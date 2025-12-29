import { CreateUserData } from '../factories/user.factory';

// Business Case Data
export const businessCases = [
  // DUPLICATE
  {
    title: 'duplicate email',
    buildPayload: () =>
      CreateUserData({
        email: 'duplicate_user@test.com'
      }),
    expectedStatus: 422,
    expectedFields: ['email']
  }
  
];
