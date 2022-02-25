import styled from "styled-components";
import { Box, Flex, Text } from "rebass";
import { theme } from "styles/theme";

export const LoginContainer = styled(Box)`
  && {
    display: grid;
    grid-template-columns: 1fr;
    background-color: ${theme.palette.secondary.main};
    width: 100%;
    height: 100%;
    justify-items: center;
    align-content: center;
    grid-row-gap: 4rem;
  }
`;

export const LoginWrapper = styled(Flex)`
  && {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: ${theme.palette.primary.main};
    width: 62rem;
    height: fit-content;
    padding: 2rem;
    border-radius: 2rem;
  }
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  & > div:not(:nth-child(2)) {
    padding-bottom: 2rem;
  }
  & > :not(:first-child, :last-child) {
    margin-bottom: 2rem;
  }
`;

export const Title = styled(Text)`
  && {
    font-size: 3.6rem;
    font-weight: bold;
    color: white;
    padding-bottom: 2rem;
  }
`;

export const Logo = styled.img`
  width: 280px;
  height: auto;
`;
