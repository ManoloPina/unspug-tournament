import React, { ReactChild } from "react";
//Styles
import * as S from "./styles";
import { Box } from "rebass";

interface Props {
  name: string;
  icon: ReactChild;
}

const Item: React.FC<Props> = ({ name, icon }) => {
  return (
    <S.ItemWrapper>
      <Box>{icon}</Box>
      <Box>{name}</Box>
    </S.ItemWrapper>
  );
};

export default React.memo(Item);
