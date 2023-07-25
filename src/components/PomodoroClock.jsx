import React, { useState } from 'react';
import './PomodoroClock.scss';
import ClockFeature from './ClockFeature';
import { Box, Tab, Tabs } from '@mui/material';


function PomodoroClock() {


    const [activeTab, setActiveTab] = useState('pomodoroTime');

    const handleTabs = (event, tab) => {
        setActiveTab(tab);
    }

    const generateTabs = () => {

        return (
            <Tabs
                className='pomodoroTabs'
                value={activeTab}
                onChange={handleTabs}
                textColor='black'
                TabIndicatorProps={{ style: { background: '#AAAAAA' } }}
                aria-label='select clock'
            >
                <Tab className='pomodoroTab' value='pomodoroTime' label='Pomodoro' key="pomodoro" />
                <Tab className='pomodoroTab' value='shortBreak' label='Short Break' key="shortBreak" />
                <Tab className='pomodoroTab' value='longBreak' label='Long Break' key="longBreak" />
            </Tabs>
        )
    }

    return (
        <>

            <div className='pomodoroBody' >
                <h1 className='pomodoro-title'>Pomodoro Clock</h1>
                <h4 className='description'>Be more productive and focused </h4 >
                <Box className='pomodoroBox'>
                    {generateTabs()}
                    <ClockFeature activeTab={activeTab} />
                </Box>
                <div className='description'><a href="https://francescocirillo.com/products/the-pomodoro-technique" target="_blank" rel="noopener noreferrer">Pomodoro Technique?</a></div>
            </div>
        </>
    );
}

export default PomodoroClock;
