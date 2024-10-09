/** @type {import('next').NextConfig} */
import { readFileSync } from 'fs';
import { join } from 'path';

const packageJson = JSON.parse(readFileSync(join(process.cwd(), 'package.json'), 'utf-8'));
const version = packageJson.version;
const nextConfig = {
    env: {
        NEXT_PUBLIC_APP_VERSION: version,
        BASE_URL_API: ''
      },
};

export default nextConfig;
