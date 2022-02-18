import { FastifyPluginAsync } from "fastify";
import fastifyPligun from "fastify-plugin";

import redisClient from "../lib/redis";

const dbPlugin: FastifyPluginAsync = async (fastify) => {
  fastify.decorate("redis", redisClient);
};

const plugin = fastifyPligun(dbPlugin);

export default plugin;
