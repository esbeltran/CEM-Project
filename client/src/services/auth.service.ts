import { AxiosResponse } from "axios";
import { BaseService } from "./base.service";
// import { BACKEND_URI } from "../utils/constants";

interface LoginRequest {
email: string;
password: string;
}

// Define the structure of the login response
interface LoginResponse {
token: string;
}

export class AuthService extends BaseService {
  checkAuthenticated = async (): Promise<boolean> => {
    try {
      const res: AxiosResponse = await this.axios.get('/api/auth/verify', { 
        headers: {
          token : localStorage.token
        }
      });
      return res.data;
    } catch (err) {
      console.error((err as Error).message);
      return false;
    }
  }

  login = async (data: LoginRequest): Promise<LoginResponse> => {
    try {
      const res: AxiosResponse = await this.axios.post<LoginRequest>('/api/auth/login', data);
      return res.data;
    } catch (err) {
      console.error((err as Error).message);
      throw err;
    }
  }
}