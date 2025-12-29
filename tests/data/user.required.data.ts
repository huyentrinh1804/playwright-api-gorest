import {CreateUserData} from '../factories/user.factory';

// Requied fields data

export const requiredCases =[
    {
        title: 'missing name',
        buildPayload: ()=>{
            const u = CreateUserData();
            delete ( u as any).name;
            return u;
        },
        expectedStatus: 422,
        expectedFields: ['name']
    },
    {
        title: 'missing email',
        buildPayload: ()=>{
            const u = CreateUserData();
            delete ( u as any).email;
            return u;
        },
        expectedStatus: 422,
        expectedFields: ['email']
    },
    {
        title: 'missing gender',
        buildPayload: ()=>{
            const u = CreateUserData();
            delete ( u as any).gender;
            return u;
        },
        expectedStatus: 422,
        expectedFields: ['gender']
    },
    {
        title: 'missing status',
        buildPayload: ()=>{
            const u = CreateUserData();
            delete ( u as any).status;
            return u;
        },
        expectedStatus: 422,
        expectedFields: ['status']
    },

    // ==== COMBINATION ====
    {
        title: 'missing name & email',
        buildPayload: ()=>{
            const u = CreateUserData();
            delete ( u as any).name;
            delete ( u as any).email;
            return u;
        },
        expectedStatus: 422,
        expectedFields: ['name', 'email']
    },
    {
        title: 'missing email & status',
        buildPayload: ()=>{
            const u = CreateUserData();
            delete ( u as any).email;
            delete ( u as any).status;
            return u;
        },
        expectedStatus: 422,
        expectedFields: ['email', 'status']
    },
    {
        title: 'missing all required fields',
        buildPayload: ()=>{
            return {}
        },
        expectedStatus: 422,
        expectedFields: ['name','email', 'status', 'gender']
    }

]
