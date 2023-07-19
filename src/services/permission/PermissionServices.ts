import { ApiPermissionRepository } from "../../repositories/permission/PermissionImpl";
import { IPermission } from "../../types/permission/Permission";
import { IPermissionRepository } from "../../types/permission/PermissionRepository";

export class PermissionServices implements IPermissionRepository {
  private apiPermissionRepository: ApiPermissionRepository;
  constructor() {
    this.apiPermissionRepository = new ApiPermissionRepository();
  }

  async getAll(): Promise<IPermission[]> {
    return this.apiPermissionRepository.getAll();
  }

  async getById(id: number): Promise<IPermission | undefined> {
    return this.apiPermissionRepository.getById(id);
  }

  async putPermission(iPermission: IPermission): Promise<void> {
    return this.apiPermissionRepository.putPermission(iPermission);
  }

  async postPermission(iPermission: IPermission): Promise<void> {
    return this.apiPermissionRepository.postPermission(iPermission);
  }
}
