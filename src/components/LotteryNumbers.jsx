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


    const handleGenerate = () => {
        const numbers = [];
        const startNumber = includeZero ? 0 : 1;
        while (numbers.length < numberOfPicks) {
            const randomNumber = Math.floor(Math.random() * largestNumber) + startNumber;
            if (!numbers.includes(randomNumber)) {
                numbers.push(randomNumber);
            }
            console.log(numbers)
        }
        setGeneratedNumbers(numbers);
    }

    const NumberButton = ({ value, purpose }) => {
        if (purpose === 'largest') {
            return (
                <Button className={`button-${purpose}`}
                    variant={largestNumber === parseInt(value) ? "contained" : "outlined"}
                    onClick={() => setLargestNumber(value)}>
                    {value}
                </Button>
            )
        } else {
            return (
                <Button
                    className={`button-${purpose}`}
                    variant={numberOfPicks === parseInt(value) ? "contained" : "outlined"}
                    onClick={() => setNumberOfPicks(value)}
                >
                    {value}
                </Button>
            )
        }
    }


    return (
        <div className='lottery-body'>
            <h1 className='lottery-title'>Lottery Number Generator</h1>
            <h4 className='lottery-description'>Trustworthy random numbers for lottery!</h4>
            <Box className='lottery-box'>

                <div>
                    <span className="lottery-query">Select the largest number:</span>
                    <NumberButton value='30' purpose='largest'></NumberButton>
                    <NumberButton value='49' purpose='largest'></NumberButton>
                    <NumberButton value='50' purpose='largest'></NumberButton>

                    <TextField
                        id="standard-number"
                        label="Enter a custom number"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={largestNumber}
                        onChange={(e) => setLargestNumber(e.target.value)}
                    />
                </div>
                <div>
                    <span>Select the number of picks:</span>
                    <NumberButton value='5' purpose='picks'></NumberButton>
                    <NumberButton value='6' purpose='picks'></NumberButton>
                    <NumberButton value='7' purpose='picks'></NumberButton>
                    <TextField
                        id="standard-number"
                        label="Enter a custom number"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={numberOfPicks}
                        onChange={(e) => setNumberOfPicks(e.target.value)}
                    />
                </div>
                <div>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={includeZero}
                                onChange={(e) => setIncludeZero(e.target.checked)}
                                color="primary"
                            />
                        }
                        label="Add 0 to the number pool?"
                    />
                </div>

                <Button
                    className='button-generate'
                    variant="contained"
                    onClick={() => handleGenerate()}>
                    Generate
                </Button>
                <div>{
                    generatedNumbers ? (generatedNumbers.map((number) =>
                        <span className='lottery-numbers'
                            key={number}>
                            {number}
                        </span>
                    )) : ''}
                </div>
            </Box>
        </div>
    );

}