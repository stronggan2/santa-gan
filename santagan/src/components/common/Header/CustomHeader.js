import React from "react";
import { Link } from "react-router-dom";
import { colors } from "../../../lib/colors";

const CustomHeader = () => {
  return (
    <>
      <div id="header">
        <div className="headerContainer">

        
        <Link to="/local">
          <div id="local" fontSize={20} fontColor={colors.primary}>
            지역별
          </div>
        </Link>
        <Link to="/height">
          <div id="height" fontSize={20} fontColor={colors.primary}>
            높이순
          </div>
        </Link>
        <Link to="/national">
          <div id="national" fontSize={20} fontColor={colors.primary}>
            국립공원
          </div>
        </Link>
        <Link to="/beginner">
          <div id="beginner" fontSize={20} fontColor={colors.primary}>
            초보자라면
          </div>
        </Link>
        <div id="search">검색</div>
        <Link to="/mypage">
          <div id="mypage">마이 페이지</div>
        </Link>
      </div>
      </div>
    </>
  );
};

export default CustomHeader;
