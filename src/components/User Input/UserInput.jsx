import { useState, useEffect } from 'react';
import './UserInput.css';

export default function UserInput ({ handleInput }){
    
    const [formData, setFormData] = useState({
        initialInvestment: '',
        annualInvestment: '',
        expectedReturn: '', 
        duration: ''
    })
    
    const [editState, setEditState] = useState(false);
    const [disable, setDisable] = useState(true);


    //when handling edition - it is set to true
    const handleEdit = () => {
        setEditState(true);
    };

    const handleSave = () => {
        //when in save mode editing mode is false
        setEditState(false);

        if (editState === true) {
        
        handleInput(formData);

        //sets data back to original after hitting save button
        setFormData({
            initialInvestment: '',
            annualInvestment: '',
            expectedReturn: '', 
            duration: ''
        });
    };     
};
        
useEffect(() => {
    // Check if all fields have values
    const allFieldsFilled = Object.values(formData).every((val) => val !== '');
    setDisable(!allFieldsFilled);
  }, [formData]);

    const handleChange = (event) => {
        let value = event.target.value;
        let name = event.target.name; 
        
        if (value >= 0){
            setFormData((preValue) => {
                return {
                    ...preValue,
                    [name] : Number(value)
                };
            });
        }; 
    };
   

    let editableInitialInvestment = <input type="number" name='initialInvestment' value={formData.initialInvestment} onChange={handleChange} disabled={!editState}/>;
    let editableAnnualInvestment = <input type="number" name='annualInvestment' value={formData.annualInvestment} onChange={handleChange} disabled={!editState}/>;
    let editableExpectedReturn = <input type="number" name='expectedReturn' value={formData.expectedReturn} onChange={handleChange} disabled={!editState}/>;
    let editableInvestmentDuration = <input type="number" name='duration' value={formData.duration} onChange={handleChange} disabled={!editState}/>;

   
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleClear = () => {
        setFormData({
            initialInvestment: '',
            annualInvestment: '',
            expectedReturn: '', 
            duration: ''
        });
    };

    return (
        <div id='user-input'>
       <form onSubmit={handleSubmit}> 
            <label>Initial Investment: {editableInitialInvestment}</label>
            <label>Annual Investment:{editableAnnualInvestment}</label>
            <label>Expected Return:{editableExpectedReturn}</label>
            <label>Duration:{editableInvestmentDuration}</label>

        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleSave} disabled={disable}>Save</button>
        <button onClick={handleClear}>Clear</button> 
        
        </form> 
        
        
        </div>       
    );
};




