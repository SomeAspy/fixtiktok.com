export interface Config {
    fastify: {
        host: string;
        port: number;
        logger: boolean;
    };
    GrabPopularUserAgentOnStart: boolean;
    fallbackUserAgent: string;
}
