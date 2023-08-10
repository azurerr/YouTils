import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import './WordCounter.scss';

export default function WordCounter() {

    const [wordCount, setWordCount] = useState(0);
    const [charCount, setCharCount] = useState(0);
    const [textInput, setTextInput] = useState('');

    const handleClick = () => {
        const trimmedInput = textInput.trim();
        if (trimmedInput === '') {
            setWordCount(0);
            setCharCount(0);
        } else {
            const words = trimmedInput.split(/\s+/);
            setWordCount(words.length);
            setCharCount(textInput.length);
        }
    }

    const initialize = () => {
        setTextInput('');
        setWordCount(0);
        setCharCount(0);
    };

    return (
        <div className='counter-body'>
            <h1 className='counter-title'>Word Counter</h1>
            <h4 className='counter-description'>Check how many words you wrote securely. <br />
                The sentences you entered won't be saved anywhere.</h4>
            <Box className='counter-box'>


                <TextField
                    id="counter-textfield"
                    label="Text to Count"
                    multiline
                    fullWidth
                    rows={10}
                    value={textInput}
                    onChange={(e) => setTextInput(e.target.value)}></TextField>


                <div>
                    <Button
                        className="counter-button"
                        variant="contained"
                        onClick={handleClick}
                    >
                        Count
                    </Button>
                    < Button
                        onClick={() => initialize()}
                        sx={{ color: 'white' }}
                        disabled={textInput === ''}>
                        <RestartAltIcon sx={{ fontSize: 40 }}></RestartAltIcon>
                    </Button >
                </div>
                <div className="char-count">Character Count: {charCount}</div>
                <div className="word-count">Word Count: {wordCount}</div>
            </Box>
        </div>
    );
}

