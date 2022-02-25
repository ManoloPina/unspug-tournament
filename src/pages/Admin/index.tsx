import React from "react";
//components
import SidebarMenu from "components/layout/SidebarMenu";
//styles
import * as S from "./styles";
import * as Styles from "styles";

interface Props {}

const Admin: React.FC<Props> = ({}) => {
  return (
    <S.AdminContainer>
      <SidebarMenu />
      <S.ContentWrapper>
        <S.ContentContainer>
          <S.HeaderWrapper>
            <S.Title>Generate Teams</S.Title>
          </S.HeaderWrapper>
          <S.QtyPartiesWrapper>
            <Styles.CustomTextField
              fullWidth
              size="medium"
              variant="outlined"
              label="Number of Parties"
            />
          </S.QtyPartiesWrapper>
          <S.ActionWrapper></S.ActionWrapper>
          <S.TableWrapper></S.TableWrapper>
        </S.ContentContainer>
      </S.ContentWrapper>
    </S.AdminContainer>
  );
};

export default React.memo(Admin);
