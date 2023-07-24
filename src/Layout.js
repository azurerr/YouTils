
import React, { useEffect, useState } from "react";
import Navigation from './components/Navigation';
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

    const googleAnalytics = () => {
        return (
            <>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-TWYCXFEYX6"></script>
                <script>
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){window.dataLayer.push(arguments)}
                    gtag('js', new Date());
                    gtag('config', 'G-TWYCXFEYX6');
                </script>
            </>
        )
    }

    return (
        <>
            <header className="App-header">
                {googleAnalytics}
            </header>
            <body className={`App-body ${menu}`}>
                <Navigation />
                <Container className="App-content">
                    <Box mb={10} mt={4}>{props.children}</Box>
                </Container>
            </body>
        </>
    );
}

export default Layout;