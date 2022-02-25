import styled from "styled-components";
import { Flex } from "rebass";
import "animate.css";

export const MenuWrapper = styled(Flex)`
  && {
    flex-direction: column;
    & > div:not(:last-child) {
      margin-bottom: 1rem;
    }

    & > div:hover {
      cursor: pointer;
      animation: pulse;
      animation-duration: 1s;
    }
  }
`;
