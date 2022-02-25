import styled from "styled-components";
import { Flex } from "rebass";
import { theme } from "styles/theme";

export const ItemWrapper = styled(Flex)`
  && {
    flex-direction: row;
    border-radius: 1rem;
    justify-content: flex-start;
    padding: 0.5rem;
    background-color: ${theme.palette.secondary.main};
    align-items: center;
    padding-left: 1rem;
    color: ${theme.palette.primary.main};
    font-weight: bold;
    & div:first-child {
      padding-right: 1rem;
    }
  }
`;
