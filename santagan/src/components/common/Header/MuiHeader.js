import * as React from "react";

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";

import { Link } from "react-router-dom";

export default function VariantButtonGroup() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& > *": {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="text" aria-label="text button group">
        <Link to="/local">
          <Button>지역별</Button>
        </Link>
        <Link to="/height">
          <Button>높이순</Button>
        </Link>
        <Link to="/national">
          <Button>국립공원</Button>
        </Link>
        <Link to="/beginner">
          <Button>초보자라면</Button>
        </Link>
      </ButtonGroup>

    </Box>
  );
}
