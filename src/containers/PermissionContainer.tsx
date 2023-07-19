import React from "react";
import HeaderComponent from "../components/organismos/HeaderComponents";
import { Box } from "@mui/material";
import TableComponent from "../components/organismos/TableComponent";
import usePermissionContainer from "./useHooks/usePermissionContainer";

const PermissionContainer: React.FC = () => {
  const { permissionsList } = usePermissionContainer();

  return (
    <Box paddingY={5} paddingX={"10%"}>
      <HeaderComponent />
      <TableComponent data={permissionsList} />
    </Box>
  );
};

export default PermissionContainer;
