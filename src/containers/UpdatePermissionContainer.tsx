import React from "react";
import HeaderComponent from "../components/organismos/HeaderComponents";
import { Box } from "@mui/material";
import FormComponents from "../components/organismos/FormComponents";
import useUpdatePermissionContainer from "./useHooks/useUpdatePermissionContainer";

const UpdatePermissionContainer: React.FC = () => {
  const {
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
  } = useUpdatePermissionContainer();

  return (
    <Box paddingY={5} paddingX={"10%"}>
      <HeaderComponent
        titleName="Actualizar Permisos"
        labelsLeft={["Información del permiso"]}
        labelsRight={[`Id de permiso:  ${id}`]}
      />
      <FormComponents
        employeeName={employeeName}
        lastNameEmployee={lastNameEmployee}
        typePermit={typePermit}
        typesPermission={typesPermission}
        isLoading={isLoading}
        setEmployeeName={setEmployeeName}
        setLastNameEmployee={setLastNameEmployee}
        setTypePermit={setTypePermit}
        handlerButtonForm={updatePermission}
        buttonLabel="ACTUALIZAR"
      />
    </Box>
  );
};

export default UpdatePermissionContainer;
