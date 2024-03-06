import React, { useEffect, useState } from "react";
import "./NaviBar.scss";
import { connect, useSelector, useDispatch } from "react-redux";
import { loginUser, logoutUser } from "../Redux/actions";
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

function NaviBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [showSigninModal, setShowSigninModal] = useState(false);

  const { email, displayName, photoUrl } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Email:", email);
  }, [email]);

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

  const handleCloseSigninModal = () => {
    setShowSigninModal(false);
  };

  const handleLogOut = () => {
    dispatch(logoutUser());
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

            {email ? (
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
                  <MenuItem
                    className="menu-item"
                    component={NavLink}
                    to=""
                    onClick={handleCloseNavMenu}
                  >
                    <Typography textAlign="center">Dashboard</Typography>
                  </MenuItem>
                  <MenuItem
                    className="menu-item"
                    component={NavLink}
                    onClick={handleLogOut}
                  >
                    <Typography textAlign="center">LogOut</Typography>
                  </MenuItem>
                </Menu>
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar alt={displayName} src={photoUrl} />
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
              <SignIn handleCloseSigninModal={handleCloseSigninModal} />
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

const mapStateToProps = (state) => {
  return { user: state.user };
};

const mapDispatchToProps = (dispatch) => ({
  loginUser: (userData) => dispatch(loginUser(userData)),
  logoutUser: () => dispatch(logoutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NaviBar);
