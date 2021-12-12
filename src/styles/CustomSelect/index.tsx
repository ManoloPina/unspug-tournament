import React from "react";
import { uuid } from "uuidv4";
//Components
import { InputLabel, Select, MenuItem, SelectChangeEvent } from "@mui/material";
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
}

const CustomSelect: React.FC<Props> = ({
  value,
  onChange,
  label,
  options,
  variant,
  className,
}) => {
  return (
    <S.FormControl className={className} variant={variant} fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select
        value={value}
        label={label}
        onChange={onChange}
        IconComponent={() => <ArrowDropDownRounded fontSize="large" />}
      >
        {options.map((item) => (
          <MenuItem key={uuid()} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </S.FormControl>
  );
};

export default React.memo(CustomSelect);
