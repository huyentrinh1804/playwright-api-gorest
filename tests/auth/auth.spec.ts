import { test, expect,request} from '@playwright/test';
import { ENV } from '../config/env';

test('POST /users without token → 401', async ({ playwright }) => {
  const ctx= await request.newContext({
      extraHTTPHeaders: {
      'Content-Type': 'application/json',

      }
    });
  const res = await ctx.post(`${ENV.BASE_URL}/users`, {
  });
  expect(res.status()).toBe(401);
});
test('POST /users invalid token → 401', async ({ playwright }) => {
  const ctx= await request.newContext({
      extraHTTPHeaders: {
      'Content-Type': 'application/json',
      Authorization: `Bearer invalid_token`,
      }
    });
  const res = await ctx.post(`${ENV.BASE_URL}/users`, {
  });
  expect(res.status()).toBe(401);
});
