import { IPermissionTypes } from "../../types/permissionTypes/PermissionTypes";
import { IPermissionTypesRepository } from "../../types/permissionTypes/PermissionTypesRepository";
import { ApiClient } from "../../utils/ApiClient";
import { AxiosResponse } from "axios";

export class ApiTypesPermissionRepository
  implements IPermissionTypesRepository
{
  private apiClient: ApiClient;
  constructor() {
    this.apiClient = ApiClient.getInstance();
  }

  async getAll(): Promise<IPermissionTypes[]> {
    const response: AxiosResponse<IPermissionTypes[]> = await this.apiClient
      .getHttpClient()
      .get(`${import.meta.env.VITE_API_URL}/typePermission`);
    return response.data;
  }
}
