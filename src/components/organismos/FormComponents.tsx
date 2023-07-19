import { Grid, TextField } from "@mui/material";
import React from "react";
import { ButtonUpdate, HeaderText, SelectTypes } from "../atomos";
import { IPermissionTypes } from "../../types/permissionTypes/PermissionTypes";

type FormComponentsProps = {
  employeeName: string;
  lastNameEmployee: string;
  typePermit: number;
  typesPermission: IPermissionTypes[] | undefined;
  isLoading: boolean;
  buttonLabel: string;
  setEmployeeName: (employeeName: string) => void;
  setLastNameEmployee: (lastNameEmployee: string) => void;
  setTypePermit: (typePermit: number) => void;
  handlerButtonForm: () => void;
};
const FormComponents: React.FC<FormComponentsProps> = ({
  employeeName,
  lastNameEmployee,
  typePermit,
  typesPermission,
  isLoading,
  buttonLabel,
  setEmployeeName,
  setLastNameEmployee,
  setTypePermit,
  handlerButtonForm,
}) => {
  return (
    <Grid
      paddingX={"10%"}
      container
      spacing={5}
      marginTop={3}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          fullWidth
          id="standard-basic"
          label={<HeaderText fontFamily="Montserrat-Regular" label="Nombre" />}
          value={employeeName}
          onChange={(e) => setEmployeeName(e.target.value)}
          variant="standard"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          fullWidth
          id="standard-basic"
          label={
            <HeaderText fontFamily="Montserrat-Regular" label="Apellido" />
          }
          value={lastNameEmployee}
          onChange={(e) => setLastNameEmployee(e.target.value)}
          variant="standard"
        />
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        {typePermit && typesPermission && (
          <SelectTypes
            typesPermission={typesPermission}
            typePermit={typePermit}
            setTypePermit={setTypePermit}
          />
        )}
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <ButtonUpdate
          isLoading={isLoading}
          updatePermission={handlerButtonForm}
          label={buttonLabel}
        />
      </Grid>
    </Grid>
  );
};

export default FormComponents;
