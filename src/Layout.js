
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

    //const currentPath = window.location.pathname;
    //let menu = currentPath.split('/').pop(); // Split the path and get the last part

    if (menu === '') {
        menu = 'home';
    }

    // Function to get the background image URL based on the last part of the path
    // const getBackgroundImage = (lastPart) => {
    //     switch (lastPart) {
    //         case '':
    //             return '../public/images/home.jpg';
    //         case 'pomodoro':
    //             return '../public/images/pomodoro.jpg';
    //         case 'shortbreak':
    //             return 'shortbreak1.jpg';
    //         case 'longbreak':
    //             return 'longbreak1.jpg';
    //         // Add more cases for other menus as needed
    //         default:
    //             return 'default.jpg'; // Default image if the last part doesn't match any menu
    //     }
    // };

    //const backgroundImage = getBackgroundImage(lastPart);
    //console.log(backgroundImage);

    return (
        <div className="App">
            <header className="App-header">
            </header>
            <body className={`App-body ${menu}`}>
                <Navigation />
                <Container maxWidth={false} className="App-content">
                    <Box mb={10} mt={4}>{props.children}</Box>
                </Container>
            </body>
        </div>
    );

}


export default Layout;