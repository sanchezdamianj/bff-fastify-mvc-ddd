"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("@fastify/cors"));
const fastify_1 = __importDefault(require("fastify"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const fastify = (0, fastify_1.default)({
    logger: true
});
fastify.get('/', async (request, reply) => {
    return { hello: 'world' };
});
fastify.register(cors_1.default, {});
fastify.register(userRoutes_1.default, { prefix: '/users/' });
/**
 * Run the server!
 */
const start = async () => {
    try {
        await fastify.listen({ port: 3000 });
    }
    catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};
start();
exports.default = fastify;
