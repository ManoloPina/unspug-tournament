import React from "react";
import { usePlayer } from "hooks";
//Styles
import * as S from "../styles";
import { Box } from "rebass";
//Types
import { IFormOption } from "types";

interface Props {
  opt: IFormOption;
}

const ClassOptItem: React.FC<Props> = ({ opt }) => {
  const { getImagePathByClassId } = usePlayer();
  return (
    <S.ClassesOptWrapper>
      <Box>{opt.label}</Box>
      <Box>
        <img src={getImagePathByClassId(opt.value as number)} />
      </Box>
    </S.ClassesOptWrapper>
  );
};

export default React.memo(ClassOptItem);
