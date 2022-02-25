import styled from "styled-components";
import { Flex } from "rebass";
import { theme } from "styles/theme";

export const SidebarWrapper = styled(Flex)`
  && {
    max-width: 240px;
    flex-direction: column;
    background-color: ${theme.palette.primary.main};
    position: relative;
    height: 100%;
    z-index: 9999;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    padding: 1rem;
  }
`;

export const LogoWrapper = styled(Flex)`
  && {
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;

    & img {
      width: 100%;
      height: auto;
    }
  }
`;
