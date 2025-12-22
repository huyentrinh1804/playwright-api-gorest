import {test, expect, request} from '@playwright/test';
import { UserService } from '../../../services/user.service';
import { requiredCases } from '../data/user/user.required.data';
import { formatCases } from '../data/user/user.format.data';
import { EmptyCases } from '../data/user/user.empty.data';
import { businessCases } from '../data/user/user.business.data';



test.describe('User API Validation', () => {
  let userService: UserService;
  let userId: number;

  test.beforeAll(async () => {
    const apiContext = await request.newContext({
      extraHTTPHeaders: {
        Authorization: `Bearer ${process.env.GOREST_TOKEN}`,
        'Content-Type': 'application/json',
        'User-Agent': 'Playwright-API-Tests'

      }
    });

    userService = new UserService(apiContext);
  });

  //------------POST------------
  test.describe('Required fields', () => {
    for (const tc of requiredCases) {
  test(tc.title, async () => {
    const res = await userService.createUser(tc.buildPayload());
    expect(res.status()).toBe(tc.expectedStatus);
    const body = await res.json();
    const errorFields = body.map((e: any) => e.field);

    for (const field of tc.expectedFields) {
      expect(errorFields).toContain(field);
  }});
  }});
  test.describe('Format Fields', () => {
    for (const tc of formatCases) {
  test(tc.title, async () => {
    const res = await userService.createUser(tc.buildPayload());
    expect(res.status()).toBe(tc.expectedStatus);
    const body = await res.json();
    const errorFields = body.map((e: any) => e.field);

    for (const field of tc.expectedFields) {
      expect(errorFields).toContain(field);
  }});
  }});
  test.describe('Empty Fields', () => {
    for (const tc of EmptyCases) {
  test(tc.title, async () => {
    const res = await userService.createUser(tc.buildPayload());
    expect(res.status()).toBe(tc.expectedStatus);
    const body = await res.json();
    const errorFields = body.map((e: any) => e.field);

    for (const field of tc.expectedFields) {
      expect(errorFields).toContain(field);
  }});
  }});
  test.describe('Business Cases', () => {
    for (const tc of businessCases) {
  test(tc.title, async () => {
    const res = await userService.createUser(tc.buildPayload());
    expect(res.status()).toBe(tc.expectedStatus);
    const body = await res.json();
    const errorFields = body.map((e: any) => e.field);

    for (const field of tc.expectedFields) {
      expect(errorFields).toContain(field);
  }});
  }});



  
});

