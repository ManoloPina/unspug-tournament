import styled from "@emotion/styled";
import { theme } from "styles/theme";

export const Container = styled.div`
  && {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

export const Sidebar = styled.div`
  && {
    position: fixed;
    right: 0;
    top: 0;
    width: 70%;
    display: grid;
    height: 100%;
    padding: 2rem;
    grid-template-columns: 1fr;
    border-radius: 1.5rem 0 0 1.5rem;
    background-color: ${theme.palette.primary.main};
    box-shadow: -1px 4px 4px rgba(0, 0, 0, 0.25);
    align-items: flex-start;
  }
`;
