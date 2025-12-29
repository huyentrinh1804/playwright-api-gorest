/**
 * User API integration flow
 * Create → Get → Update → Verify → Delete → Verify
 */

import { test, expect, request } from '@playwright/test';
import { CreateUserData } from '../factories/user.factory';
import { UserService } from '../services/user.service';
import { ENV } from '../config/env';

test.describe('User API happy path flow', () => {
  let userService: UserService;
  let userId: number;

  test.beforeAll(async () => {
    const apiContext = await request.newContext({
      extraHTTPHeaders: {
        Authorization: `Bearer ${ENV.TOKEN}`,
        'Content-Type': 'application/json',

      }
    });

    userService = new UserService(apiContext);
  });


  test('Create → Get → Update → Delete user (happy path)', async () => {
    // CREATE
    const user = CreateUserData();
    const createRes = await userService.createUser(user);

    expect(createRes.status()).toBe(201);
    const createdBody = await createRes.json();
    userId = createdBody.id;

    // GET
    const getRes = await userService.getUser(userId);
    expect(getRes.status()).toBe(200);

    // UPDATE
    const updatedData = { ...user, name: 'Updated Name' };
    const updateRes = await userService.updateUser(userId, updatedData);
    expect(updateRes.status()).toBe(200);

    // VERIFY UPDATE
    const updatedBody = await updateRes.json();
    expect(updatedBody.name).toBe('Updated Name');

    // DELETE
    const deleteRes = await userService.deleteUser(userId);
    expect(deleteRes.status()).toBe(204);

    // VERIFY DELETE
    const verifyRes = await userService.getUser(userId);
    expect(verifyRes.status()).toBe(404);
  });
});
