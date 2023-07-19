import React from "react";
import HeaderComponent from "../components/organismos/HeaderComponents";
import { Box } from "@mui/material";
import FormComponents from "../components/organismos/FormComponents";
import useCreatePermissionContainer from "./useHooks/useCreatePermissionContainer";

const CreatePermissionContainer: React.FC = () => {
  const {
    employeeName,
    lastNameEmployee,
    typePermit,
    typesPermission,
    isLoading,
    setEmployeeName,
    setLastNameEmployee,
    setTypePermit,
    createPermission,
  } = useCreatePermissionContainer();

  return (
    <Box paddingY={5} paddingX={"10%"}>
      <HeaderComponent
        titleName="Crear Permisos"
        labelsLeft={["Información del permiso"]}
        labelsRight={["Nuevo permiso"]}
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
        handlerButtonForm={createPermission}
        buttonLabel="NUEVO PERMISO"
      />
    </Box>
  );
};

export default CreatePermissionContainer;
