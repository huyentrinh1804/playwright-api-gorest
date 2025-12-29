import { expect } from 'playwright/test';
import { CreateUserData} from '../factories/user.factory';

// Format fields data
export const formatCases = [
    {
        title: 'invalid email format',
        buildPayload: ()=>CreateUserData({email: 'abc'}),
        expectedStatus: 422,
        expectedFields: ['email']
        
    },
    {
        title: 'invalid Gender',
        buildPayload: ()=>CreateUserData({gender: 'abc'} as any),
        expectedStatus: 422,
        expectedFields: ['gender']
    },
    {
        title: 'invalid status',
        buildPayload: ()=>CreateUserData({status: 'abc'} as any),
        expectedStatus: 422,
        expectedFields: ['status']
    },
    // LENGTH / LIMIT (BUSINESS)
    {
    title: 'name exceeds business max length',
    buildPayload: () =>
      CreateUserData({
        name: 'a'.repeat(300)
      }),
    expectedStatus: 422,
    expectedFields: ['name']
    }
]