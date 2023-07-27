
import React, { useEffect, useState } from "react";
import NaviBar from './components/NaviBar'
import { Box, Container } from '@mui/system';
import { useLocation } from "react-router-dom";

function Layout(props) {

    const location = useLocation();
    const [menu, setMenu] = useState('home');

    useEffect(() => {
        const currentPath = location.pathname;
        let menu = currentPath.split('/').pop();
        if (menu) {
            setMenu(menu);
        } else {
            setMenu('home');
        }
    }, [location.pathname])


    if (menu === '') {
        setMenu('home');
    }

    return (
        <div className={`App-body ${menu}`}>
            <NaviBar className="App-navi" />
            <Container className="App-content">
                <Box mb={10} mt={4}>{props.children}</Box>
            </Container>
        </div>
    );
}

export default Layout;