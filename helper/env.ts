import dotenv from 'dotenv';
dotenv.config();

export function getEnv(name: string): string {
    const value = process.env[name];
    if (!value) {
        throw new Error(`Environment variable ${name} is not defined`);
    }
    return value;
}

export const env = {
  BASE_URL: getEnv("BASE_URL"),
  DASHBOARD_URL: getEnv("DASHBOARD_URL"),
  VALID_USERNAME: getEnv("VALID_USERNAME"),
  VALID_PASSWORD: getEnv("VALID_PASSWORD"),
  INVALID_USERNAME: getEnv("INVALID_USERNAME"),
  INVALID_PASSWORD: getEnv("INVALID_PASSWORD"),
};