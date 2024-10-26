// src/Calculator.js
import React, { useState } from 'react';
import './Calculator.css'; // Optional: for styling

const Calculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleClick = (value) => {
        setInput(input + value);
    };

    const calculateResult = () => {
        try {
            setResult(eval(input)); // Use eval carefully in production
            setInput('');
        } catch (error) {
            setResult('Error');
        }
    };

    const clearInput = () => {
        setInput('');
        setResult('');
    };

    return (
        <div className="calculator">
            <div className="display">
                <div className="input">{input}</div>
                <div className="result">{result}</div>
            </div>
            <div className="buttons">
                {['7', '8', '9', '/'].map((value) => (
                    <button key={value} onClick={() => handleClick(value)}>{value}</button>
                ))}
                {['4', '5', '6', '*'].map((value) => (
                    <button key={value} onClick={() => handleClick(value)}>{value}</button>
                ))}
                {['1', '2', '3', '-'].map((value) => (
                    <button key={value} onClick={() => handleClick(value)}>{value}</button>
                ))}
                {['0', '.', '=', '+'].map((value) => (
                    <button key={value} onClick={value === '=' ? calculateResult : () => handleClick(value)}>
                        {value}
                    </button>
                ))}
                <button onClick={clearInput}>C</button>
            </div>
        </div>
    );
};

export default Calculator;