import React, { ReactNode } from "react";
import { AuthProvider } from "./AuthProvider";

interface Props {
  children: ReactNode;
}

const Providers: React.FC<Props> = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default Providers;
