export const isProd = process.env.NODE_ENV === "production";
export const port = process.env.PORT || 4000;

export const redisUrl = process.env.REDIS_URL as string;

export const baseUrl = process.env.BASE_URL as string;

export const appName = process.env.APP_NAME as string;
