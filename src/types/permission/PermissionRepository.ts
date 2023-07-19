import { IPermission } from "./Permission";

export interface IPermissionRepository {
  getById(id: number): Promise<IPermission | undefined>;
  getAll(): Promise<IPermission[]>;
  putPermission(iPermission: IPermission): Promise<void>;
  postPermission(iPermission: IPermission): Promise<void>;
}
