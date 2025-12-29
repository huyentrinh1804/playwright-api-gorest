import {CreateUserData} from '../factories/user.factory';


// empty fields cases data

export const EmptyCases = [
    {
        title: 'Empty name',
        buildPayload: ()=>({
            ...CreateUserData(),
            name: ''
        }),
        expectedStatus: 422,
        expectedFields: ['name'],
    },
    {
        title: 'Empty email',
        buildPayload: () => ({
            ...CreateUserData(),
            email: ''
        }),
        expectedStatus: 422,
        expectedFields: ['email']
    },
    {
        title: 'Empty name & email',
        buildPayload: () => ({
            ...CreateUserData(),
            name: '',
            email: ''
        }),
        expectedStatus: 422,
        expectedFields: ['name','email']
    },

  

]