import React from "react";
import { Link } from "react-router-dom";
import { BodyText, HeaderText } from "../atomos";
import { IPermission } from "../../types/permission/Permission";
import { formatDate } from "../../utils/DateFormat";
import {
  SegmentOutlined,
  AutofpsSelectOutlined,
  CalendarMonthOutlined,
  EditNote,
} from "@mui/icons-material";
import {
  Box,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

type PermissionTableProps = {
  data: IPermission[];
};

const PermissionTable: React.FC<PermissionTableProps> = ({ data }) => {
  console.log(data);
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <Box display="flex" alignItems="center" gap={1}>
                <AutofpsSelectOutlined fontSize="small" color="disabled" />
                <HeaderText label="Id" />
              </Box>
            </TableCell>
            <TableCell>
              <Box display="flex" alignItems="center" gap={1}>
                <SegmentOutlined fontSize="small" color="disabled" />
                <HeaderText label="Nombres" />
              </Box>
            </TableCell>
            <TableCell>
              <Box display="flex" alignItems="center" gap={1}>
                <SegmentOutlined fontSize="small" color="disabled" />
                <HeaderText label="Apellidos" />
              </Box>
            </TableCell>
            <TableCell>
              <Box display="flex" alignItems="center" gap={1}>
                <SegmentOutlined fontSize="small" color="disabled" />
                <HeaderText label="Tipo de Permiso" />
              </Box>
            </TableCell>
            <TableCell>
              <Box display="flex" alignItems="center" gap={1}>
                <CalendarMonthOutlined fontSize="small" color="disabled" />
                <HeaderText label="Fecha de Permiso" />
              </Box>
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((permission, i) => (
            <TableRow key={i}>
              <TableCell>
                <BodyText label={String(permission.id)} />
              </TableCell>
              <TableCell>
                <BodyText label={permission.employeeName} />
              </TableCell>
              <TableCell>
                <BodyText label={permission.lastNameEmployee} />
              </TableCell>
              <TableCell>
                <BodyText label={permission.typePermit} />
              </TableCell>
              <TableCell>
                <BodyText label={formatDate(permission.datePermission)} />
              </TableCell>
              <TableCell>
                <Link to={`/update/${permission.id}`}>
                  <IconButton>
                    <EditNote />
                  </IconButton>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PermissionTable;
