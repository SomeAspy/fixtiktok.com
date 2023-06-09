/**
 * @file URL Expansion
 * @author @SomeAspy
 * @license GPL-3.0
 */

import { userAgent } from './fetchUserAgent.js';

/**
 * @name expandUrl
 * @description Expand a URL
 * @async
 * @param {string} url - URL to expand
 * @returns {Promise<string>} Expanded URL
 * @throws {Error} If the URL is invalid
 */
export async function expandUrl(url: string): Promise<string> {
    try {
        const response = await fetch(url, {
            method: 'HEAD',
            redirect: 'follow',
            headers: {
                'User-Agent': userAgent,
            },
        });
        return response.url;
    } catch (error) {
        throw new Error('Invalid URL');
    }
}
