
import React from "react";
import Navigation from './components/Navigation';
import { Box, Container } from '@mui/system';

function Layout(props) {

    return (
        <div className="App">
            <header className="App-header">
            </header>
            <body className="App-body">
                <Navigation />
                <Container maxWidth={false} className="App-content">
                    <Box mb={10} mt={4}>{props.children}</Box>
                </Container>
            </body>
        </div>
    );

}


export default Layout;