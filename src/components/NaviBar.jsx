import React, { useState } from "react";
import "./NaviBar.scss";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AttractionsIcon from "@mui/icons-material/Attractions";
import { NavLink } from "react-router-dom";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignIn/SignUp";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

function NaviBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [showSigninModal, setShowSigninModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [signInState, setSigninState] = useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleSigninButtonClick = () => {
    setShowSigninModal(true);
  };

  const handleSignUpButtonClick = () => {
    setShowSigninModal(false);
    setShowSignUpModal(true);
  };

  const handleCloseSigninModal = () => {
    setShowSigninModal(false);
  };

  const handleCloseSignUpModal = () => {
    setShowSignUpModal(false);
  };

  return (
    <>
      <AppBar position="static" enableColorOnDark>
        <Container maxWidth="xl" className="navi">
          <Toolbar disableGutters>
            <AttractionsIcon
              className="navi-title-icon"
              sx={{ display: { xs: "none", md: "flex" } }}
            />
            <Typography
              variant="h5"
              noWrap
              component={NavLink}
              to="/"
              className="navi-title"
              sx={{
                display: { xs: "none", md: "flex" },
              }}
            >
              YouTils
            </Typography>

            <AttractionsIcon
              className="navi-title-icon"
              sx={{ display: { xs: "flex", md: "none" } }}
            />
            <Typography
              variant="h5"
              noWrap
              component={NavLink}
              to="/"
              className="navi-title"
              sx={{
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              YouTils
            </Typography>

            {/* Desktop Navigation */}
            <Box
              className="menu-item"
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            >
              <Button
                component={NavLink}
                to="/pomodoro"
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  textDecoration: "none",
                }}
              >
                Pomodoro Clock
              </Button>
              <Button
                component={NavLink}
                to="/lottery"
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  textDecoration: "none",
                }}
              >
                Lottery Numbers
              </Button>
              <Button
                component={NavLink}
                to="/timer"
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  textDecoration: "none",
                }}
              >
                Timer
              </Button>
              <Button
                component={NavLink}
                to="/wordcounter"
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  textDecoration: "none",
                }}
              >
                Word Counter
              </Button>
            </Box>

            {/* Hambuger menu */}
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="site menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem
                  className="menu-item"
                  component={NavLink}
                  to="/pomodoro"
                  onClick={handleCloseNavMenu}
                >
                  <Typography textAlign="center">Pomodoro Clock</Typography>
                </MenuItem>
                <MenuItem
                  className="menu-item"
                  component={NavLink}
                  to="/lottery"
                  onClick={handleCloseNavMenu}
                >
                  <Typography textAlign="center">Lottery Numbers</Typography>
                </MenuItem>
                <MenuItem
                  className="menu-item"
                  component={NavLink}
                  to="/timer"
                  onClick={handleCloseNavMenu}
                >
                  <Typography textAlign="center">Timer</Typography>
                </MenuItem>
                <MenuItem
                  className="menu-item"
                  component={NavLink}
                  to="/wordcounter"
                  onClick={handleCloseNavMenu}
                >
                  <Typography textAlign="center">Word Counter</Typography>
                </MenuItem>
              </Menu>
            </Box>

            {signInState ? (
              <>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/2.jpg"
                      />
                    </IconButton>
                  </Tooltip>
                </Box>
              </>
            ) : (
              <Button className="menu-item" onClick={handleSigninButtonClick}>
                Sign In
              </Button>
            )}
            {showSigninModal && (
              <SignIn
                handleCloseSigninModal={handleCloseSigninModal}
                handleSignUpButtonClick={handleSignUpButtonClick}
              />
            )}
            {showSignUpModal && (
              <SignUp handleCloseSignUpModal={handleCloseSignUpModal} />
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default NaviBar;
