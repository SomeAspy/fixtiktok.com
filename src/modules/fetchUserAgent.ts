/**
 * @file Fetch User Agent
 * @author @SomeAspy
 * @license GPL-3.0
 * @module fetchUserAgent
 * @version 0.0.1
 * @description Fetch a user agent
 * @summary Fetches the most popular user agent of the week. Thanks to useragents.me for the API! The API is rate limited to 15 requests per hour.
 */

import type { Config } from '../types/config.d.ts';
import config from '../../config.json' assert { type: 'json' };
import type { UserAgentResponse } from '../types/useragents.me.d.ts';

const localConfig: Config = config; // Cast config to Config so that TypeScript doesn't complain

/**
 * @name fetchUserAgent
 * @description Fetch a user agent
 * @async
 * @returns {Promise<string>} User agent
 * @private
 */
async function fetchUserAgent(): Promise<string> {
    if (!config.GrabPopularUserAgentOnStart) {
        return new Promise((resolve) => {
            resolve(localConfig.fallbackUserAgent);
        });
    } else {
        const response = await fetch('https://useragents.me/api/');
        const data = await (response.json() as Promise<UserAgentResponse>);
        if (data.error != undefined) {
            return localConfig.fallbackUserAgent;
        } else {
            return data.data[0].ua;
        }
    }
}

/**
 * @name userAgent
 * @description User agent fetched from useragents.me
 * @type {string}
 * @public
 * @readonly
 */
export const userAgent: string = await fetchUserAgent();
