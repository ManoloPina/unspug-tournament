import React from "react";
//Components
import Menu from "./Menu";
//Styles
import * as S from "./styles";

interface Props {}

const SidebarMenu: React.FC<Props> = () => {
  return (
    <S.SidebarWrapper>
      <S.LogoWrapper>
        <img src="/logo.png" />
      </S.LogoWrapper>
      <Menu />
    </S.SidebarWrapper>
  );
};

export default React.memo(SidebarMenu);
