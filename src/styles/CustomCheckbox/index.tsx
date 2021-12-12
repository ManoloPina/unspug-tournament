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

const CustomCheckbox: React.FC<Props> = ({ label = "", ...checkboxProps }) => {
  return (
    <FormGroup>
      <FormControlLabel
        label={label}
        control={<Checkbox {...checkboxProps} defaultChecked />}
      />
    </FormGroup>
  );
};

export default React.memo(CustomCheckbox);
