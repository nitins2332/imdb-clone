import { useState } from "react";

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  InputBase,
  styled,
} from "@mui/material";
import { logoURL } from "../../Constants/Constant";

// import { Link } from "react-router-dom";
import { routhPath } from "../../Constants/Route";
import { useNavigate } from "react-router-dom";

import { Menu, BookmarkAdd, ArrowDropDown } from "@mui/icons-material";

// Component
import HeaderMenu from "./HeaderMenu";

const StyledToolbar = styled(Toolbar)`
  background: #121212;
  min-height: 56px !important;
  padding: 0 115px !important;
  justify-content: space-between;
  & > * {
    padding: 0 15px;
  }
  & > div {
    display: flex;
    align-items: center;
    cursor: pointer;
    & > p {
      font-size: 14px;
      font-weight: 600;
    }
  }
  & > p {
    font-size: 14px;
    font-weight: 600;
  }
`;

const InputSearchField = styled(InputBase)`
  background: #fff;
  height: 30px;
  width: 55%;
  border-radius: 5px;
  padding: 10px;
  font-size: 14px;
`;

const Logo = styled("img")({
  width: 64,
  cursor: "pointer",
});

const Header = () => {
  const [open, setOpen] = useState(null);

  const navigation = useNavigate();

  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <>
      <AppBar position="static">
        <StyledToolbar>
          <Logo
            src={logoURL}
            alt="logo"
            onClick={() => navigation(routhPath.home)}
          />

          <Box onClick={handleClick}>
            <Menu />
            <Typography>Menu</Typography>
          </Box>
          <HeaderMenu open={open} handleClose={handleClose} />
          <InputSearchField />
          <Typography>
            IMDb<Box component="span">Pro</Box>
          </Typography>
          <Box>
            <BookmarkAdd />
            <Typography>Watchlist</Typography>
          </Box>
          <Typography>Sign In</Typography>
          <Box>
            <Typography>EN</Typography>
            <ArrowDropDown />
          </Box>
        </StyledToolbar>
      </AppBar>
    </>
  );
};

export default Header;
