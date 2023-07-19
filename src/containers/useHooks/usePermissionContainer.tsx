import { useEffect, useState } from "react";
import { PermissionServices } from "../../services/permission/PermissionServices";
import { IPermission } from "../../types/permission/Permission";

const usePermissionContainer = () => {
  const [mounted, setMounted] = useState(true);
  const [permissionsList, setPermissionsList] = useState<IPermission[]>([]);

  const permissionServices = new PermissionServices();
  const getAllPermission = async (): Promise<void> => {
    const result = await permissionServices.getAll();
    setPermissionsList(result);
  };
  useEffect(() => {
    if (!mounted) {
      getAllPermission();
    }
    setMounted(false);
  }, [mounted]);

  return {
    permissionsList,
  };
};
export default usePermissionContainer;
