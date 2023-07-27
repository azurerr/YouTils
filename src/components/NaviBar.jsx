import React, { useState } from 'react';
import './NaviBar.scss';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AttractionsIcon from '@mui/icons-material/Attractions';
import { NavLink } from 'react-router-dom';

function NaviBar() {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <>
            <AppBar position="static" enableColorOnDark>
                <Container maxWidth="xl" className="navi">
                    <Toolbar disableGutters >
                        <AttractionsIcon className="navi-title-icon" sx={{ display: { xs: 'none', md: 'flex' } }} />
                        <Typography
                            variant="h5"
                            noWrap
                            component={NavLink} // Use NavLink instead of "a" tag
                            to="/"
                            className="navi-title" // Apply the menu-item class to the Typography
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                            }}
                        >
                            YouTils
                        </Typography>

                        {/* Hambuger menu */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                <MenuItem className="menu-item" component={NavLink} to="/pomodoro" onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">Pomodoro Clock</Typography>
                                </MenuItem>
                                <MenuItem className="menu-item" component={NavLink} to="/lotto" onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">Lotto Numbers</Typography>
                                </MenuItem>
                                <MenuItem className="menu-item" component={NavLink} to="/timer" onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">Timer</Typography>
                                </MenuItem>
                                <MenuItem className="menu-item" component={NavLink} to="/wordcounter" onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">Word Counter</Typography>
                                </MenuItem>
                            </Menu>
                        </Box>


                        <AttractionsIcon className="navi-title-icon" sx={{ display: { xs: 'flex', md: 'none' } }} />
                        <Typography
                            variant="h5"
                            noWrap
                            component={NavLink}
                            to="/"
                            className="navi-title"
                            sx={{
                                //mr: 3,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontWeight: 700,
                                // letterSpacing: '.3rem',
                                //color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            YouTils
                        </Typography>



                        {/* Desktop Navigation */}
                        <Box className="menu-item" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <Button
                                component={NavLink}
                                to="/pomodoro"
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block', textDecoration: 'none' }}
                            >
                                Pomodoro Clock
                            </Button>
                            <Button
                                component={NavLink}
                                to="/lotto"
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block', textDecoration: 'none' }}
                            >
                                Lotto Numbers
                            </Button>
                            <Button
                                component={NavLink}
                                to="/timer"
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block', textDecoration: 'none' }}
                            >
                                Timer
                            </Button>
                            <Button
                                component={NavLink}
                                to="/wordcounter"
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block', textDecoration: 'none' }}
                            >
                                Word Counter
                            </Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
}

export default NaviBar;
