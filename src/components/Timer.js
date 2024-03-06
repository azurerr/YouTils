import React from 'react';
import { Box } from '@mui/material';

function Timer() {
    return (
        <div className='timer-body'>
            <h1 className='timer-title'>Timer</h1>
            <h4 className='timer-description'>Coming soon! 🚧</h4>
            <Box className='timer-box'>
                <div className="timer-line">
                </div>
            </Box>
        </div>
    );
}

export default Timer;
