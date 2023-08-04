import React, { useState } from "react";
import './LotteryNumbers.scss';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box'
import FormControlLabel from '@mui/material/FormControlLabel';

export default function LotteryNumbers() {

    const [largestNumber, setLargestNumber] = useState(49);
    const [numberOfPicks, setNumberOfPicks] = useState(6);
    const [includeZero, setIncludeZero] = useState(false);
    const [generatedNumbers, setGeneratedNumbers] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');
    const [displayedNumbers, setDisplayedNumbers] = useState([]);
    const [isGenerating, setIsGenerating] = useState(false);


    // Function to handle sequential display of numbers
    const displayNumbers = (numbers, currentIndex) => {
        setTimeout(() => {
            setDisplayedNumbers((prevNumbers) => [...prevNumbers, numbers[currentIndex]]);
            if (currentIndex + 1 < numbers.length) {
                displayNumbers(numbers, currentIndex + 1);
            } else {
                setIsGenerating(false);
            }
        }, 700);
    };

    const handleGenerate = () => {
        if (isGenerating) return;
        setDisplayedNumbers([]);
        setGeneratedNumbers([]);
        setIsGenerating(true);
        const numbers = [];
        const startNumber = includeZero ? 0 : 1;

        if (numberOfPicks >= parseInt(largestNumber) + 1 - startNumber) {
            setErrorMsg('The largest number should be bigger than the number of picks');
            setIsGenerating(false);
        } else if (numberOfPicks < 1) {
            setErrorMsg('The number of Picks should be bigger than 0');
            setIsGenerating(false);
        }
        else {
            console.log('min:', startNumber, ", max: ", largestNumber)
            while (numbers.length < numberOfPicks) {
                const randomNumber = Math.floor(Math.random() * (largestNumber - startNumber + 1)) + startNumber;
                if (!numbers.includes(randomNumber)) {
                    numbers.push(randomNumber);
                }
            }
            setGeneratedNumbers(numbers);
            setErrorMsg('');
            displayNumbers(numbers, 0);
        }
    }

    // Generate the 6 number select buttons
    const NumberButton = ({ value, purpose }) => {
        const isSelected = purpose === 'largest' ?
            parseInt(largestNumber) === parseInt(value)
            : purpose === 'picks' ? numberOfPicks === parseInt(value) : false;

        const handleClick = () => {
            if (purpose === 'largest') {
                setLargestNumber(parseInt(value));
            } else {
                if (parseInt(value) >= 1) {
                    setNumberOfPicks(parseInt(value));
                }
            }
        };

        const buttonClass = isSelected ? `button-${purpose} active-button-${purpose}` : `button-${purpose}`;

        return (
            <Button
                className={buttonClass}
                variant={isSelected ? "contained" : "outlined"}
                onClick={handleClick}
            >
                {value}
            </Button>
        );
    }

    return (
        <div className='lottery-body'>
            <h1 className='lottery-title'>Lottery Number Generator</h1>
            <h4 className='lottery-description'>Trustworthy random numbers for lottery</h4>
            <Box className='lottery-box'>

                <div className="lottery-line">
                    <span className="lottery-query">The largest number? </span>
                    <NumberButton value='30' purpose='largest'></NumberButton>
                    <NumberButton value='49' purpose='largest'></NumberButton>
                    <NumberButton value='50' purpose='largest'></NumberButton>
                    <TextField
                        className="lottery-input"
                        id="largest-number"
                        label="Enter a number"
                        type="number"
                        variant="filled"
                        color="success"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{
                            min: 1,
                        }}
                        value={largestNumber}
                        onChange={(e) => setLargestNumber(e.target.value)}
                    />
                </div>
                <div className="lottery-line">
                    <span className="lottery-query">The number of picks? </span>
                    <NumberButton value='1' purpose='picks'></NumberButton>
                    <NumberButton value='6' purpose='picks'></NumberButton>
                    <NumberButton value='7' purpose='picks'></NumberButton>
                    <TextField
                        className="lottery-input"
                        id="picks-number"
                        label="Enter a number"
                        type="number"
                        variant="filled"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{
                            min: 1,
                            max: 20,
                        }}
                        value={numberOfPicks}
                        onChange={(e) => setNumberOfPicks(e.target.value)}
                    />
                </div>
                <div className="lottery-line">
                    <FormControlLabel
                        control={
                            <Checkbox
                                className="lottery-checkbox"
                                checked={includeZero}
                                onChange={(e) => setIncludeZero(e.target.checked)}
                                color="secondary"
                            />
                        }
                        label=" Add 0 to the number pool?"
                    />
                </div>
                <div className="lottery-line">
                    <Button
                        className='button-generate'
                        variant="contained"
                        onClick={() => handleGenerate()}
                        disabled={isGenerating} >
                        Generate
                    </Button>
                </div>
                <div className="lottery-line">
                    {displayedNumbers.map((number) => (
                        <div key={number} className="lottery-circle">
                            <span className="lottery-current-number">{number}</span>
                        </div>
                    ))}
                </div>
                <div className="lottery-line-luck">{
                    generatedNumbers.length !== 0 && <span>Good Luck!</span>
                }</div>
                <div className="errorMsg">{errorMsg ? errorMsg : ''}
                </div>
            </Box>
        </div>
    );

}