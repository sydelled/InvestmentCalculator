import { useState } from 'react';
import './UserInput.css';


export default function UserInput (){

    const initialFormData = {
        initialInvestment: '', 
        annualInvestment: '',
        expectedReturn: '',
        investmentDuration: ''
    };
    
    const initialEditState = false;
    const initialSaveState = [];

    //initializing a state object with useState
    const [defaultData, setDefaultData] = useState(initialFormData);
    const [ isInEditMode, setIsInEditMode ]= useState(initialEditState);
    const [ saveData, setSaveData ] = useState(initialSaveState);

    //when handling edition - it is set to true
    const handleEdit = () => {
        setIsInEditMode(true);
    };

    const handleSave = () => {
        //when in save mode editing mode is false
        setIsInEditMode(false);

        if (isInEditMode === true) {
        //saving data into a new list
        setSaveData([...saveData, defaultData]);
        //displays data in console
        console.log('Saved Data', defaultData);
       
        setDefaultData(initialFormData);
        };
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        //convert value to integer with base of 10
        //default value to zero if conversion fails
        let intValue = parseInt(value, 10); 

        setDefaultData((prevData) => ({
          ...prevData,
          [name]: intValue 
        }));
    };

    const handleSumbit = (e) => {
        e.preventDefault();

         // Check if all required fields are filled out
         if (
            defaultData.initialInvestment !== '' &&
            defaultData.annualInvestment !== '' &&
            defaultData.expectedReturn !== '' &&
            defaultData.investmentDuration !== ''
        ) {
            return false;
        };
    };

    const handleClear = () => {
        setDefaultData(initialFormData);
    };

    let editableInitialInvestment = <input type="number" name='initialInvestment' value={defaultData.initialInvestment} onChange={handleChange} disabled={!isInEditMode}/>;
    let editableAnnualInvestment = <input type="number" name='annualInvestment' value={defaultData.annualInvestment} onChange={handleChange} disabled={!isInEditMode}/>;
    let editableExpectedReturn = <input type="number" name='expectedReturn' value={defaultData.expectedReturn} onChange={handleChange} disabled={!isInEditMode}/>;
    let editableInvestmentDuration = <input type="number" name='investmentDuration' value={defaultData.investmentDuration} onChange={handleChange} disabled={!isInEditMode}/>;
        
    return (
        // <div id='user-input'>
            <form id='user-input' onSubmit={handleSumbit}>
                <label>Initial Investment: {editableInitialInvestment}</label>
                <label>Annual Investment:{editableAnnualInvestment}</label>
                <label>Expected Return:{editableExpectedReturn}</label>
                <label>Duration:{editableInvestmentDuration}</label>

            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleClear}>Clear</button>
            </form>
            
        // </div>
    );
};




