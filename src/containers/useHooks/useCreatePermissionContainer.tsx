import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { IPermissionTypes } from "../../types/permissionTypes/PermissionTypes";
import { PermissionServices } from "../../services/permission/PermissionServices";
import { TypesPermissionServices } from "../../services/typesPermissionServices/TypesPermissionServices";

const useCreatePermissionContainer = () => {
  const [mounted, setMounted] = useState(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [typesPermission, setTypesPermission] = useState<IPermissionTypes[]>();
  const [employeeName, setEmployeeName] = useState<string>("");
  const [lastNameEmployee, setLastNameEmployee] = useState<string>("");
  const [typePermit, setTypePermit] = useState<number>(1);
  const permissionServices = new PermissionServices();
  const typesPermissionServices = new TypesPermissionServices();
  const navigate = useNavigate();

  const getAllTypesPermission = async () => {
    const result = await typesPermissionServices.getAll();
    setTypesPermission(result);
  };

  const createPermission = async () => {
    setIsLoading(true);
    await permissionServices.postPermission({
      employeeName,
      lastNameEmployee,
      typePermit,
      datePermission: new Date().toISOString(),
    });
    setTimeout(() => {
      setIsLoading(false);
      navigate("/");
    }, 2000);
  };
  useEffect(() => {
    if (!mounted) {
      getAllTypesPermission();
    }
    setMounted(false);
  }, [mounted]);

  return {
    employeeName,
    lastNameEmployee,
    typePermit,
    typesPermission,
    isLoading,
    setEmployeeName,
    setLastNameEmployee,
    setTypePermit,
    createPermission,
  };
};
export default useCreatePermissionContainer;
