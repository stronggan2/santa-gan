import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Input } from "@mui/material";

import { getScaledWidthPixel } from "../../../lib/scale";
import { colors } from "../../../lib/colors";
import CustomText from "../Text/CustomText";
import logo from "../../../assets/icon/logo.PNG";

const S = {
  Header: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 ${getScaledWidthPixel(50)};
  `,
  MenuContainer: styled.div`
    display: flex;
    align-items: center;
  `,
  Menu: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${getScaledWidthPixel(150)};
    background-color: ${colors.white};
    border: none;
    cursor: pointer;
  `,
  UserContainer: styled.div`
    display: flex;
    align-items: center;
  `,
  Content: styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: hidden;
    background-color: #f8f8f8;
  `,
};

const CustomHeader = () => {
  const navigate = useNavigate();
  return (
    <S.Header>
      <S.MenuContainer>
        <S.Logo src={logo}></S.Logo>
        <S.Menu
          onClick={() => {
            navigate("/local");
          }}
        >
          <CustomText fontSize={20} fontColor={colors.primary}>
            지역별
          </CustomText>
        </S.Menu>
        <S.Menu
          onClick={() => {
            navigate("/height");
          }}
        >
          <CustomText fontSize={20} fontColor={colors.primary}>
            높이순
          </CustomText>
        </S.Menu>
        <S.Menu
          onClick={() => {
            navigate("/national");
          }}
        >
          <CustomText fontSize={20} fontColor={colors.primary}>
            국립공원
          </CustomText>
        </S.Menu>
        <S.Menu
          onClick={() => {
            navigate("/beginner");
          }}
        >
          <CustomText fontSize={20} fontColor={colors.primary}>
            초보자라면
          </CustomText>
        </S.Menu>
      </S.MenuContainer>
      <S.UserContainer>
        <Input></Input>
        <div>검색</div>
        <div>마이 페이지</div>
      </S.UserContainer>
    </S.Header>
  );
};

export default CustomHeader;
