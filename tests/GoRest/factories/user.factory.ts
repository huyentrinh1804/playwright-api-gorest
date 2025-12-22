export interface UserData{
  name: string;                 // required
  email: string;                // required, unique
  gender: 'male' | 'female';    // required
  status: 'active' | 'inactive';// required
};
export function CreateUserData (
overrides: Partial<UserData>={}):UserData{
  const ts = Date.now();
  return {
    name: 'QA',
    email: `qa_${ts}@test.com`,
    gender: 'female',
    status: 'active',
    ...overrides
  }
};

 

