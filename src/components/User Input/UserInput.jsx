import { useState } from 'react';
import './UserInput.css';



export default function UserInput ({ handleInput }){

    const initialFormData = {
        initialInvestment: '', 
        annualInvestment: '',
        expectedReturn: '',
        duration: ''
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
        //setSaveData([...saveData, defaultData]);
        
        handleInput(saveData);
       
        //after saving form returns to default data
        //setDefaultData(initialFormData);
        };
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        if (value >= 0){
            setSaveData({...saveData, [name]: Number(value)})
    };
   
};

let editableInitialInvestment = <input type="number" name='initialInvestment' value={saveData.initialInvestment} onChange={handleChange} disabled={!isInEditMode}/>;
let editableAnnualInvestment = <input type="number" name='annualInvestment' value={saveData.annualInvestment} onChange={handleChange} disabled={!isInEditMode}/>;
let editableExpectedReturn = <input type="number" name='expectedReturn' value={saveData.expectedReturn} onChange={handleChange} disabled={!isInEditMode}/>;
let editableInvestmentDuration = <input type="number" name='duration' value={saveData.duration} onChange={handleChange} disabled={!isInEditMode}/>;

   
    const handleSubmit = (e) => {
        e.preventDefault();
        //handleInput(saveData);

        //after saving form returns to default data
        setDefaultData(initialFormData);
    };

    

    const handleClear = () => {
        setDefaultData(initialFormData);
    };

    
        
    return (
        <div id='user-input'>
       <form onSubmit={handleSubmit}> 
            <label>Initial Investment: {editableInitialInvestment}</label>
            <label>Annual Investment:{editableAnnualInvestment}</label>
            <label>Expected Return:{editableExpectedReturn}</label>
            <label>Duration:{editableInvestmentDuration}</label>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleSave}>Save</button>
        <button onClick={handleClear}>Clear</button> 
        
        </form> 
        
        </div>       
    );
};




