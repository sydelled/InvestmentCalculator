import { useState } from 'react';
import './UserInput.css';


// This function expects a JS object as an argument
// The object should contain the following properties
// - initialInvestment: The initial investment amount
// - annualInvestment: The amount invested every year
// - expectedReturn: The expected (annual) rate of return
// - duration: The investment duration (time frame)


export default function UserInput (){

    //initializing a state object with useState
    const [formData, setFormData] = useState({
        'Initial Investment': 0, //default is zero
        'Annual Investment': 0,
        'Expected Return': 0,
        'Investment Duration': 0
    });

    //Handler function to update the state based on input changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        //updating the state by spreading the existing state and updating the specific property
        setFormData({...formData, [name]: value });
    };

    //Submit handler function to handle table submission
    const handleSumbitData = (event) => {
        event.preventDefault();//prevents default submission behavior
        //accessing form data for submission
        console.log('Form Data', formData);
    };

    return (
        <div id='user-input'>
        <form id = 'input-group' onSubmit = {handleSumbitData}>

        <label>{formData['Initial Investment']}</label>
        <input
        type='number'
        placeholder='Initial Investment'
        name='initial investment'
        value={formData['Initial Investment']} //bind input value to a state
        onChange={handleInputChange} //attach onChange even handler with a function that changes the input value 
        />
        

        <button
        type='submit'>Submit</button>
        </form>
        </div>
    );
};








