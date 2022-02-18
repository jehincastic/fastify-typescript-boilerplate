/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import fastify from "fastify";
import Redis from "ioredis";

declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test";
    PORT: string;
    JWT_SECRET: string;
    BASE_URL: string;
    REDIS_URL: string;
    APP_NAME: string;
  }
}

declare module "fastify" {
  export interface FastifyInstance {
    redis: Redis.Redis;
  }
  export interface FastifyRequest {
    userId?: string;
  }
}
