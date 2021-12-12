import React from "react";
//Compoents
import {
  Checkbox,
  CheckboxProps,
  FormControlLabel,
  FormGroup,
} from "@mui/material";

interface Props extends CheckboxProps {
  label?: string;
}

const CustomChecbox: React.FC<Props> = ({ label = "", ...checkboxProps }) => {
  return (
    <FormGroup>
      <FormControlLabel
        label={label}
        control={<Checkbox {...checkboxProps} defaultChecked />}
      />
    </FormGroup>
  );
};

export default React.memo(CustomChecbox);
