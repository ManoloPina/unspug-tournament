import styled from "styled-components";
import { Box, Flex, Text } from "rebass";
import { theme } from "styles/theme";

export const AdminContainer = styled(Box)`
  && {
    display: grid;
    grid-template-columns: max-content 1fr;
    height: 100%;
  }
`;

export const ContentWrapper = styled(Flex)`
  && {
    width: 100%;
    padding: 2rem;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

export const ContentContainer = styled(Box)`
  && {
    display: grid;
    border-radius: 1rem;
    border: ${theme.palette.primary.main} solid 2px;
    width: 100%;
    height: 100%;
    background-color: ${theme.palette.secondary.light};
    padding: 2rem;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    grid-template-rows: max-content max-content 1fr;
  }
`;

export const HeaderWrapper = styled(Flex)`
  && {
    grid-column: 1/4;
  }
`;

export const Title = styled(Text)`
  && {
    font-size: 2.2rem;
    font-weight: bold;
    color: ${theme.palette.text.primary};
  }
`;

export const QtyPartiesWrapper = styled(Flex)`
  && {
    grid-column: 1/3;
  }
`;

export const ActionWrapper = styled(Flex)`
  && {
    grid-column: 3/4;
  }
`;

export const TableWrapper = styled(Flex)`
  && {
    grid-column: 1/4;
  }
`;
