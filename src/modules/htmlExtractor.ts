/**
 * @file Extracts data from HTML
 * @author @SomeAspy
 * @license GPL-3.0
 * @module htmlExtractor
 * @version 0.0.1
 */

import { userAgent } from './fetchUserAgent.js';
import type { Post } from '../types/post.d.ts';

/**
 * @name fetchHTML
 * @description Fetches HTML from a URL
 * @async
 * @param {string} url - URL to fetch HTML from
 * @returns {Promise<string>} HTML
 * @private
 * @throws {Error} If the URL is invalid
 */
export async function fetchHTML(url: string): Promise<string> {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'User-Agent': userAgent,
            },
        });
        return response.text();
    } catch (error) {
        throw new Error('Invalid URL');
    }
}

/**
 * @name extractDescription
 * @description Extracts the description from HTML
 * @param {string} html - HTML to extract from
 * @returns {string} Description
 * @private
 */
export function extractDescription(html: string): string {
    const regex = /property="og:description"(.+?)"\/>/; // Don't touch - it WILL break
    const match = regex.exec(html);
    if (match == null) {
        return '';
    }
    const description = match[1].replace(/content="/, '');
    return description.slice(0, -1).trim();
}

/**
 * @name extractStats
 * @description Extracts the stats from HTML
 * @param {string} html - HTML to extract from
 * @returns {{likes:string; comments:string;}} Stats
 */
export function extractStats(html: string): {
    likes: string;
    comments: string;
} {
    const regex = /name="description" content="(.+?)\. /; // Don't touch - it WILL break
    const match = regex.exec(html);
    if (match == null) {
        return {
            likes: '0',
            comments: '0',
        };
    }
    let stats: string = match[1].replace(/name="description" content="/, '');
    const likes = stats.split(' ')[0];
    stats = stats.replace(likes, '');
    const comments = stats.split(' ')[2];
    return {
        likes,
        comments,
    };
}

/**
 * @name buildPost
 * @description Builds a post object
 * @param {string} link - Link to the post
 * @returns {Post} Post object
 * @async
 */
export async function buildPost(link: string): Promise<Post> {
    const HTML = await fetchHTML(link);
    const stats = extractStats(HTML);
    return {
        mp4: '',
        likes: stats.likes,
        comments: stats.comments,
        link,
        description: extractDescription(HTML),
    };
}

const URL = 'https://www.tiktok.com/@angelinevalo/video/7221645980876164394';

const DATA = buildPost(URL);
console.log(await DATA);
