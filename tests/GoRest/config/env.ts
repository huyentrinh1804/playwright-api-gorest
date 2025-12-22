export const ENV = {
  BASE_URL: 'https://gorest.co.in/public/v2',
  TOKEN: process.env.GOREST_TOKEN as string
};

if (!ENV.TOKEN) {
  throw new Error('GOREST_TOKEN is not defined in .env');
}
