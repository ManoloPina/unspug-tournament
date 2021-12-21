import React, { ReactChild } from "react";
import { uuid } from "uuidv4";
//Components
import {
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  FormHelperText,
} from "@mui/material";
import { ArrowDropDownRounded } from "@mui/icons-material";
//types
import { IFormOption } from "types";
//Styles
import * as S from "./styles";

interface Props {
  value?: string | number;
  onChange?: (event: SelectChangeEvent<any>) => void;
  label: string;
  options: IFormOption[];
  variant?: "standard" | "outlined" | "filled";
  className?: string;
  error?: boolean;
  helperText?: string;
}

const CustomSelect: React.FC<Props> = ({
  value,
  onChange,
  label,
  options,
  variant,
  className,
  error = false,
  helperText = null,
}) => {
  return (
    <S.FormControl className={className} variant={variant} fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select
        value={value}
        label={label}
        error={error}
        onChange={onChange}
        IconComponent={() => <ArrowDropDownRounded fontSize="large" />}
      >
        {options.map((item) => (
          <MenuItem key={uuid()} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
      {!!helperText && !!error && (
        <FormHelperText color="danger">{helperText}</FormHelperText>
      )}
    </S.FormControl>
  );
};

export default React.memo(CustomSelect);
