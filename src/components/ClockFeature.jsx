import React, { useEffect, useState } from "react";
import './PomodoroClock.scss';
import alarmSound from '../assets/audio/alarm.mp3';
import notificationSound from '../assets//audio/notification.mp3'
import Button from '@mui/material/Button'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';


const POMODORO_TIME = 25 * 60;
const SHORTBREAK_TIME = 5 * 60;
const LONGBREAK_TIME = 15 * 60;
// const POMODORO_TIME = 4;
// const SHORTBREAK_TIME = 3;
// const LONGBREAK_TIME = 2;

export default function ClockFeature({ activeTab }) {

    const initialTime = () => {
        switch (activeTab) {
            case 'shortBreak':
                return SHORTBREAK_TIME;
            case 'longBreak':
                return LONGBREAK_TIME;
            default:
                return POMODORO_TIME;
        }
    }

    const [time, setTime] = useState(initialTime);
    const [isActive, setIsActive] = useState(false);
    const [startPressed, setStartPressed] = useState(0);
    const [isResetable, setIsResetable] = useState(false);


    const initialize = () => {
        setTime(initialTime);
        setIsActive(false);
        setStartPressed(0);
        setIsResetable(false);
    };

    useEffect(() => {
        initialize();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeTab]);



    useEffect(() => {

        const playAlarmSound = () => {
            if (activeTab === 'pomodoroTime') {
                new Audio(notificationSound).play();
            } else {
                new Audio(alarmSound).play();
            }
        }

        let interval;
        if (isActive && time > 0) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime - 1);
            }, 1000);
        } else if (isActive && time === 0) {
            playAlarmSound();
        }
        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isActive, time]);


    const formattedTime = () => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`
    };

    const handleStartPause = () => {
        setIsActive((prevActive) => !prevActive);
        setStartPressed((prev) => prev = prev + 1);
    }

    const generateStartButton = () => (
        <Button className='button-start'
            variant="contained"
            onClick={handleStartPause}
            disabled={time === 0}>
            {time === 0 ?
                'Finished' : isActive ?
                    <PauseIcon></PauseIcon> : startPressed === 0 ?
                        <PlayArrowIcon></PlayArrowIcon> : 'Resume'}
        </Button>
    );

    const changeTime = (action) => {
        setIsResetable(true);
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

    return (
        <>
            <div className={`clock-time ${activeTab}`}>
                <Button onClick={() => changeTime('decrease')} >
                    <RemoveCircleOutlineIcon className='button-adjust'></RemoveCircleOutlineIcon>
                </Button>
                {formattedTime()}
                <Button onClick={() => changeTime('increase')}>
                    <AddCircleOutlineIcon className='button-adjust' ></AddCircleOutlineIcon>
                </Button>
            </div >
            <div className="clock-play">
                {generateStartButton()}
                < Button
                    onClick={() => initialize()}
                    sx={{ color: 'black' }}
                    disabled={startPressed === 0 && !isResetable}>
                    <RestartAltIcon sx={{ fontSize: 40 }}></RestartAltIcon>
                </Button >
            </div>
        </>
    )


}