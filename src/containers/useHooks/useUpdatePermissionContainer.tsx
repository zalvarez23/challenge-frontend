import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { IPermissionTypes } from "../../types/permissionTypes/PermissionTypes";
import { PermissionServices } from "../../services/permission/PermissionServices";
import { TypesPermissionServices } from "../../services/typesPermissionServices/TypesPermissionServices";
import { IPermission } from "../../types/permission/Permission";

const useUpdatePermissionContainer = () => {
  const { id } = useParams();
  const [mounted, setMounted] = useState(true);
  const [permission, setPermission] = useState<IPermission>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [typesPermission, setTypesPermission] = useState<IPermissionTypes[]>();
  const [employeeName, setEmployeeName] = useState<string>("");
  const [lastNameEmployee, setLastNameEmployee] = useState<string>("");
  const [typePermit, setTypePermit] = useState<number>(0);
  const [datePermission, setDatePermission] = useState<string>("");
  const permissionServices = new PermissionServices();
  const typesPermissionServices = new TypesPermissionServices();
  const navigate = useNavigate();

  const getAllPermission = async () => {
    const result = await permissionServices.getById(Number(id));
    setPermission(result);
  };

  const getAllTypesPermission = async () => {
    const result = await typesPermissionServices.getAll();
    setTypesPermission(result);
  };

  const updatePermission = async () => {
    setIsLoading(true);
    await permissionServices.putPermission({
      id: Number(id),
      employeeName,
      lastNameEmployee,
      typePermit,
      datePermission,
    });
    setTimeout(() => {
      setIsLoading(false);
      navigate("/");
    }, 2000);
  };
  useEffect(() => {
    if (!mounted) {
      getAllPermission();
      getAllTypesPermission();
    }
    setMounted(false);
  }, [mounted]);

  useEffect(() => {
    if (!permission) return;
    setEmployeeName(permission.employeeName);
    setLastNameEmployee(permission.lastNameEmployee);
    setTypePermit(permission.typePermit);
    setDatePermission(permission.datePermission);
  }, [permission]);

  return {
    id,
    employeeName,
    lastNameEmployee,
    typePermit,
    typesPermission,
    isLoading,
    setEmployeeName,
    setLastNameEmployee,
    setTypePermit,
    updatePermission,
  };
};
export default useUpdatePermissionContainer;
