import { ApiTypesPermissionRepository } from "../../repositories/typesPermission/PermissionImpl";
import { IPermissionTypes } from "../../types/permissionTypes/PermissionTypes";
import { IPermissionTypesRepository } from "../../types/permissionTypes/PermissionTypesRepository";

export class TypesPermissionServices implements IPermissionTypesRepository {
  private apiTypesPermissionRepository: ApiTypesPermissionRepository;
  constructor() {
    this.apiTypesPermissionRepository = new ApiTypesPermissionRepository();
  }

  async getAll(): Promise<IPermissionTypes[]> {
    return this.apiTypesPermissionRepository.getAll();
  }
}
