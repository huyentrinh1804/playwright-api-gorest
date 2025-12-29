import { APIRequestContext} from "@playwright/test";
import { UserData } from '../factories/user.factory';
import { ENV } from '../config/env';

export class UserService{
  constructor (private request : APIRequestContext){};
  
  async createUser(body: Partial<UserData>) {
    return this.request.post(`${ENV.BASE_URL}/users`, { data: body });
  }

  async getUser(userID: number) {
    return this.request.get(`${ENV.BASE_URL}/users/${userID}`);
  }

  async updateUser(userID: number, body: Partial<UserData>) {
    return this.request.put(`${ENV.BASE_URL}/users/${userID}`, { data: body });
  }

  async deleteUser(userID: number) {
    return this.request.delete(`${ENV.BASE_URL}/users/${userID}`);
  }

};