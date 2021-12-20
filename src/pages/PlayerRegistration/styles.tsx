import styled from "styled-components";
import { theme } from "styles/theme";
import { Flex } from "rebass";

export const Form = styled.form`
  && {
    height: 100%;
  }
`;

export const Container = styled.div`
  && {
    display: grid;
    grid-template-columns: 1fr 2fr;
    position: relative;
    height: 100%;
    background-color: ${theme.palette.secondary.main};
  }
`;

export const LogoWrapper = styled(Flex)`
  && {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    & img {
      margin-top: 2rem;
    }
  }
`;

export const Sidebar = styled.div`
  && {
    display: grid;
    padding: 2rem;
    grid-row-gap: 2rem;
    align-items: flex-start;
    align-content: flex-start;
    grid-template-columns: 1fr;
    border-radius: 1.5rem 0 0 1.5rem;
    box-shadow: -1px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: ${theme.palette.primary.main};

    & .select-class {
      & .Mui-focused {
        color: ${theme.palette.primary.dark};
        font-weight: bold;
        & .MuiOutlinedInput-notchedOutline {
          border-color: ${theme.palette.primary.light};
        }
      }
    }

    & .home-custom-field {
      & .Mui-focused {
        color: ${theme.palette.primary.dark};
        font-weight: bold;
        & .MuiOutlinedInput-notchedOutline {
          border-color: ${theme.palette.primary.light};
        }
      }
    }
  }
`;

export const ClassesOptWrapper = styled(Flex)`
  && {
    flex-direction: row;
    justify-content: space-between;
  }
`;
