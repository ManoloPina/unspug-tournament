import { ReactChild } from "react";

export interface IFormOption {
  label: string | ReactChild;
  value: string | number;
}
