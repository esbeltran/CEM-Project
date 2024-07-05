import axios, { AxiosInstance } from "axios";
import { BACKEND_URI } from "../utils/constants";

export class BaseService {
  protected axios: AxiosInstance;
  constructor() {
    this.axios = axios.create({
      baseURL: BACKEND_URI,
      withCredentials: false,
    });
  }
}