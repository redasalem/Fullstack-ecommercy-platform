import dotenv from 'dotenv';

dotenv.config();

export const ENV = {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
    DB_URL: process.env.DB_URL,
    CLERK_PUBLISHABLE_KEY: process.env.CLERK_PUBLISHABLE_KEY,
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
    CLOUDEINARY_API_KEY:process.env.CLOUDEINARY_API_KEY,
    CLOUDEINARY_API_SECRET:process.env.CLOUDEINARY_API_SECRET,
    CLOUDEINARY_CLOUD_NAME:process.env.CLOUDEINARY_CLOUD_NAME,
    INNGEST_SIGNING_KEY:process.env.INNGEST_SIGNING_KEY,
}