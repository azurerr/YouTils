import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button'

const POMODORO_TIME = 1 * 10;
//const POMODORO_TIME = 25 * 60;
const SHORTBREAK_TIME = 5 * 60;
const LONGBREAK_TIME = 15 * 60;

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

    const setButtons = () => {
        if (time !== 0) {

            return (
                <>
                    <Button className='button' variant="outlined" onClick={handleStart}>
                        {isActive ? 'Pause' : time === POMODORO_TIME ? 'Start' : 'Resume'}
                    </Button>
                    {
                        (time < POMODORO_TIME && (
                            <Button className='button' variant="text">↻</Button>
                        ))
                    }
                </>
            )
        }
        else {
            return (
                <Button disabled variant="outlined" onClick={handleStart}>
                    FINISHED
                </Button>
            )

        }
    }


    return (
        <div>
            <h1 className='menuTitle'>Pomodoro Clock</h1>
            <div className='timeDisplay'>{formattedTime()}</div>
            {setButtons()}
        </div>
    );
}

export default PomodoroClock;
