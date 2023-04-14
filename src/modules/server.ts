/**
 * @file Server module
 * @author Aiden
 * @license GPL-3.0
 * @module server
 * @version 0.0.1
 */
import type { FastifyInstance } from 'fastify';
import Fastify from 'fastify';
import config from '../../config.json' assert { type: 'json' };
import { join, resolve } from 'path';

export const FastifyServer: FastifyInstance = Fastify({ logger: true });

await FastifyServer.register(import('@fastify/static'), {
    root: join(resolve('.'), 'static'),
    prefix: '/',
});

// default route
FastifyServer.route({
    method: 'GET',
    url: '/',
    handler: async (request, reply) => {
        await reply.sendFile('html/base.html');
    },
});

/**
 * @name startServer
 * @description Start the server
 * @async
 */
export async function startServer(): Promise<void> {
    await FastifyServer.listen(config.fastify);
}

await startServer();
