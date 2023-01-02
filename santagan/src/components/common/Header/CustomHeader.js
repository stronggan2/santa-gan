import React from "react";
import { Link } from "react-router-dom";
import { colors } from "../../../lib/colors";

const CustomHeader = () => {
  return (
    <>
      <div>
        <Link to="/local">
          <div fontSize={20} fontColor={colors.primary}>
            지역별
          </div>
        </Link>
        <Link to="/height">
          <div fontSize={20} fontColor={colors.primary}>
            높이순
          </div>
        </Link>
        <Link to="/national">
          <div fontSize={20} fontColor={colors.primary}>
            국립공원
          </div>
        </Link>
        <Link to="/beginner">
          <div fontSize={20} fontColor={colors.primary}>
            초보자라면
          </div>
        </Link>
        <div>검색</div>
        <Link to="/mypage">
        <div>마이 페이지</div>
        </Link>
      </div>
    </>
  );
};

export default CustomHeader;
