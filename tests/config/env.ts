import 'dotenv/config';

export const ENV = {
  BASE_URL: process.env.GOREST_BASE_URL,
  TOKEN: process.env.GOREST_TOKEN,
};

if (!ENV.BASE_URL) {
  throw new Error('GOREST_BASE_URL is not defined in .env');
}

if (!ENV.TOKEN) {
  throw new Error('GOREST_TOKEN is not defined in .env');
}
