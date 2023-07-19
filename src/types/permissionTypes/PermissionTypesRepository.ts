import { IPermissionTypes } from "./PermissionTypes";

export interface IPermissionTypesRepository {
  getAll(): Promise<IPermissionTypes[]>;
}
