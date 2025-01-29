import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function TemperatureConverter() {

    function FahrToCels(newval){
        const celsField = document.getElementById("Celsius");
        celsField.value = (newval - 32) / 1.8;
    }

    function CelsToFarh(newval){
        const fahrField = document.getElementById("Fahrenheit");
        fahrField.value = (newval * 1.8) + 32;
    }
    return (
        <div>
            <TextField id="Celsius" label="Celcius" variant="outlined" type='number' onChange={(event) => CelsToFarh(event.target.value)}/>
            <TextField id="Fahrenheit" label="Fahrenheit" variant="outlined" type='number' onChange={(event) => FahrToCels(event.target.value)}/>
        </div>
    );
}