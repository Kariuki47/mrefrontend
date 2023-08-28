//import { env } from './commonui/utils';

const config = {
  APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
  BASE_PATH: process.env.NEXT_PUBLIC_BASE_PATH || '',
  CORS_ENABLED: process.env.NEXT_PUBLIC_CORS_ENABLED === 'true',
  DEMO_MODE: process.env.NEXT_PUBLIC_DEMO_MODE === 'true',
  DOCKER_API_URL: process.env.NEXT_PUBLIC_DOCKER_API_URL,
  NODE_ENV: process.env.NEXT_PUBLIC_NODE_ENV,
  SIGNUP: process.env.NEXT_PUBLIC_SIGNUP === 'true',
  API_URL: process.env.NEXT_PUBLIC_API_URL,
  RESETSERVICE_URL: process.env.NEXT_PUBLIC_RESETSERVICE_URL,
  PRODUCTION: process.env.NEXT_PUBLIC_PRODUCTION === 'true',
};

export default config;
