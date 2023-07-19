import { IPermission } from "../../types/permission/Permission";
import { IPermissionRepository } from "../../types/permission/PermissionRepository";
import { ApiClient } from "../../utils/ApiClient";
import { AxiosResponse } from "axios";

export class ApiPermissionRepository implements IPermissionRepository {
  private apiClient: ApiClient;
  constructor() {
    this.apiClient = ApiClient.getInstance();
  }

  async getAll(): Promise<IPermission[]> {
    const response: AxiosResponse<IPermission[]> = await this.apiClient
      .getHttpClient()
      .get(`${import.meta.env.VITE_API_URL}/permission`);
    return response.data;
  }

  async getById(id: number): Promise<IPermission> {
    const response: AxiosResponse<IPermission> = await this.apiClient
      .getHttpClient()
      .get(`${import.meta.env.VITE_API_URL}/permission/${id}`);
    return response.data;
  }

  async putPermission(iPermission: IPermission): Promise<void> {
    const response: AxiosResponse<void> = await this.apiClient
      .getHttpClient()
      .put(`${import.meta.env.VITE_API_URL}/permission`, {
        ...iPermission,
      });
    return response.data;
  }

  async postPermission(iPermission: IPermission): Promise<void> {
    const response: AxiosResponse<void> = await this.apiClient
      .getHttpClient()
      .post(`${import.meta.env.VITE_API_URL}/permission`, {
        ...iPermission,
      });
    return response.data;
  }
}
