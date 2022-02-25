import React from "react";
//Styles
import * as S from "./styles";
//Components
import Item from "./Item";
import { PeopleAltRounded, GroupWorkRounded } from "@mui/icons-material";

interface Props {}

const Menu: React.FC<Props> = () => {
  return (
    <S.MenuWrapper>
      <Item name="Players" icon={<PeopleAltRounded />} />
      <Item name="Parties" icon={<GroupWorkRounded />} />
    </S.MenuWrapper>
  );
};

export default React.memo(Menu);
