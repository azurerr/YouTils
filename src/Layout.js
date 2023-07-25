
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
                <meta name="description" content=" Discover YouTils, your ultimate collection of utilities! Enhance productivity with the Pomodoro Clock, try your luck with the Lotto Number Generator, set precise timings with the Timer, and count words effortlessly with the Word Counter. Streamline your tasks now!" />
                <meta name="keywords" content="utilities, time management, Pomodoro Clock, Lotto Number Generator, Random Number Generator, Timer, Countdown Timer, Word Counter, productivity tools, Online Tools, Free Utilities, Time Tracking, Task Productivity, Free Online Utilities" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

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