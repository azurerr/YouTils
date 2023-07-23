import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { Box } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

const POMODORO_TIME = 1 * 10;
//const POMODORO_TIME = 25 * 60;
//const SHORTBREAK_TIME = 5 * 60;
//const LONGBREAK_TIME = 15 * 60;

function PomodoroClock() {

    const [time, setTime] = useState(POMODORO_TIME);
    const [isActive, setIsActive] = useState(false);



    useEffect(() => {
        let interval;
        if (isActive && time > 0) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime - 1);
            }, 1000);
        }
        return () => clearInterval(interval);

    }, [isActive, time]);


    const formattedTime = () => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`
    };

    const handleStart = () => {
        setIsActive((prevActive) => !prevActive);
    }

    const handleStartPause = () => (
        <Button className='button'
            variant="contained"
            onClick={handleStart}
            sx={{
                color: 'white',
                background: 'linear-gradient(to right, #2b9348, #bf0603)!important',
                fontWeight: 'bold'
            }}
            disabled={time === 0}>
            {time === 0 ?
                'FINISHED' : isActive ?
                    <PauseIcon></PauseIcon> : time === POMODORO_TIME ?
                        <PlayArrowIcon></PlayArrowIcon> : 'Resume'}
        </Button>
    );

    const changeTime = (action) => {
        if (action === 'increase') {
            setTime((prevTime) =>
                prevTime + 60
            )
        } else if (action === 'decrease' && time > 60) {
            setTime((prevTime) =>
                prevTime - 60
            )
        } else {
            setTime(0);
        }

    }

    const handleReset = () => {
        console.log('called');
        setTime(POMODORO_TIME);
    }

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Box className='box'
                sx={{
                    background: 'rgba(255, 255, 255, 0.4)',
                    padding: 10
                }}

            >
                <h1 className='menuTitle'>Pomodoro Clock</h1>
                <div className='timeDisplay'>
                    <Button className='adjustButton' onClick={() => changeTime('decrease')} sx={{ color: 'black' }} >
                        <RemoveCircleOutlineIcon sx={{ fontSize: 50 }}></RemoveCircleOutlineIcon>
                    </Button>
                    {formattedTime()}
                    <Button className='adjustButton' onClick={() => changeTime('increase')} sx={{ color: 'black', padding: 1 }} >
                        <AddCircleOutlineIcon sx={{ fontSize: 50 }}></AddCircleOutlineIcon>
                    </Button>

                </div>
                {handleStartPause()}
                <Button onClick={() => handleReset()} sx={{ color: 'black', padding: 1 }}>
                    <RestartAltIcon sx={{ fontSize: 40 }}></RestartAltIcon>
                </Button>
            </Box>
        </div>
    );
}

export default PomodoroClock;
