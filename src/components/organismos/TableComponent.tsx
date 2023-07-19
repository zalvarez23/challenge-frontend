import React from "react";
import { PermissionTable } from "../moleculas";
import { IPermission } from "../../types/permission/Permission";

type TableComponentProps = {
  data: IPermission[];
};

const TableComponent: React.FC<TableComponentProps> = ({ data }) => {
  return <PermissionTable data={data} />;
};

export default TableComponent;
