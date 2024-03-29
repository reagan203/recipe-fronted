import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Switch, Menu, MenuItem, createTheme, ThemeProvider } from '@mui/material';
import { Brightness4 as DarkModeIcon, Brightness7 as LightModeIcon, Menu as MenuIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Header = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    // Define custom theme for light and dark modes
    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light', // Set mode based on darkMode state
        },
    });

    return (
        <ThemeProvider theme={theme}> {/* Wrap the AppBar in ThemeProvider */}
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuOpen}>
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                    >
                        <MenuItem component={Link} to="/home">Home</MenuItem>
                        <MenuItem component={Link} to="/create">post</MenuItem>
                        {/* <MenuItem component={Link} to="/update">Edit</MenuItem> */}
                        {/* Add more menu items as needed */}
                    </Menu>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Recipe App
                    </Typography>
                    <Switch
                        checked={darkMode}
                        onChange={toggleDarkMode}
                        icon={<LightModeIcon />}
                        checkedIcon={<DarkModeIcon />}
                        aria-label="Dark mode"
                    />
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
};

export default Header;
