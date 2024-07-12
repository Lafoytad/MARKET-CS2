import path from "path";
import { fileURLToPath } from "url";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    config.resolve.alias["@"] = path.resolve(__dirname, "src");
    return config;
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    API_TOKEN: process.env.API_TOKEN,
  },
};

export default nextConfig;
