export interface UserAgentResponse {
    error: string;
}

export interface UserAgentResponse {
    about: string;
    terms: string;
    data: {
        ua: string;
        pct: number;
    }[];
    updated: number;
    thanks: string;
}
