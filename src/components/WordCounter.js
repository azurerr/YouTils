import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import './WordCounter.scss';

export default function WordCounter() {

    const [wordCount, setWordCount] = useState(0);
    const [charCount, setCharCount] = useState(0);
    const [textInput, setTextInput] = useState('');
    const [textFieldError, setTextFieldError] = useState(false);

    const handleClick = () => {
        const trimmedInput = textInput.trim();
        if (trimmedInput === '') {
            setTextFieldError(true);
            setWordCount(0);
            setCharCount(0);
        } else {
            setTextFieldError(false);
            const words = trimmedInput.split(/\s+/);
            setWordCount(words.length);
            setCharCount(textInput.length);
        }
    }

    const handleReset = () => {
        setTextInput('');
        setWordCount(0);
        setCharCount(0);
        setTextFieldError(false);
    };

    const handleInputChange = (e) => {
        setTextInput(e.target.value);
        if (e.target.value.trim() !== '') {
            setTextFieldError(false);
        }
    };

    return (
        <div className='counter-body'>
            <h1 className='counter-title'>Word Counter</h1>
            <h4 className='counter-description'>
                Check how many words you wrote securely. <br />
                The sentences you entered won't be saved anywhere.
            </h4>
            <Box className='counter-box'>
                <TextField
                    id="counter-textfield"
                    label="Text to Count"
                    multiline
                    fullWidth
                    rows={10}
                    value={textInput}
                    error={textFieldError}
                    helperText={textFieldError ? 'Please enter text' : ''}
                    onChange={handleInputChange}></TextField>
                <div>
                    <Button
                        className="counter-button"
                        variant="contained"
                        onClick={handleClick}
                    >
                        Count
                    </Button>
                    < Button
                        onClick={handleReset}
                        sx={{ color: 'white' }}
                        disabled={textInput === ''}>
                        <RestartAltIcon sx={{ fontSize: 40 }}></RestartAltIcon>
                    </Button >
                </div>
                <div className="counter-result">
                    Character Count:
                    <span className='counter-number'> {charCount}</span>
                </div>
                <div className="counter-result">
                    Word Count:
                    <span className='counter-number'> {wordCount}</span></div>
            </Box>
        </div>
    );
}

