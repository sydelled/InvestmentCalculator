import { useState } from 'react';
import './UserInput.css';


export default function UserInput (){

    //initializing a state object with useState
    const [formData, setFormData] = useState({
        initialInvestment: 0, //default is zero
        annualInvestment: 0,
        expectedReturn: 0,
        investmentDuration: 0
    });

    const [ isEditMode, setIsEditMode ]= useState(false);
    const [ savedData, setSavedData ] = useState([]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    let btnName = 'Edit';
    if (isEditMode){
        btnName = 'Save';
    };

    const handleEditClick = ()=> {
        setIsEditMode(true);
        
        
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();//prevents default submission behavior

        setSavedData([...savedData, formData]);
        setIsEditMode(false);
        console.log('Form Data', formData);
        setFormData({
            initialInvestment: 0, //default is zero
            annualInvestment: 0,
            expectedReturn: 0,
            investmentDuration: 0
        });
    };

        return (
        <div 
        id = 'user-input'
        >
        
        {isEditMode && (
        <form 
        className = 'input-group' onSubmit = {handleSubmit}>

        <label>Initial Investment:
        <input
        type='number'
        placeholder='Initial Investment'
        name='initialInvestment'
        required value={(formData.initialInvestment)} //bind input value to a state
        onChange={handleInputChange} //attach onChange even handler with a function that changes the input value 
        />
        </label>

        <label>Annual Investment:
        <input
        type='number'
        placeholder='Annual Investment'
        name='annualInvestment'
        required value={(formData.annualInvestment)} //bind input value to a state
        onChange={handleInputChange} //attach onChange even handler with a function that changes the input value 
        />
        </label>

        <label>Expected Return:
        <input
        type='number'
        placeholder='Expected Return'
        name='expectedReturn'
        required value={(formData.expectedReturn)} //bind input value to a state
        onChange={handleInputChange} //attach onChange even handler with a function that changes the input value 
        />
        </label>

        <label>Duration:
        <input
        type='number'
        placeholder='Duration'
        name='investmentDuration'
        required value={(formData.investmentDuration)} //bind input value to a state
        onChange={handleInputChange} //attach onChange even handler with a function that changes the input value 
        />
        </label>

        
        </form>
        )}

           
            <button
            onClick={handleEditClick} >
        
            {btnName}
            </button>
            
        </div>
    );
};






// This function expects a JS object as an argument
// The object should contain the following properties
// - initialInvestment: The initial investment amount
// - annualInvestment: The amount invested every year
// - expectedReturn: The expected (annual) rate of return
// - duration: The investment duration (time frame)


// export default function UserInput ({ data, isActive, onChangeData }){

//     //initializing a state object with useState
//     const [formData, setFormData] = useState({
//         initialInvestment: 0, //default is zero
//         annualInvestment: 0,
//         expectedReturn: 0,
//         investmentDuration: 0
//     });

//     const [ isEditing, setIsEditing ] = useState(false);

//     function handleEditClick(){

//         setIsEditing(editing => !editing); //schedules a state update to be true

//         //if user is editing data
//         if (isEditing){
//             onChangeData(formData);
//         };
        
//     };


//     //Handler function to update the state based on input changes
//     const handleInputChange = (event) => {
        
//         const { name, value } = event.target;
//         //updating the state by spreading the existing state and updating the specific property
//         setFormData({...formData, [name]: value, });
//        // setFormData(event.target.value);
       
//     };

//     let editableFormData = <span className="input-group">{formData}</span>;
//     let btnCaption = 'Edit';

//     if (isEditing){
//         editableFormData = <input type="number" required value={formData} onChange={handleInputChange} />;
//         btnCaption = 'Save';
//     };

//     //Submit handler function to handle table submission
//     const handleSumbitData = (event) => {
//         event.preventDefault();//prevents default submission behavior

//         //PERFORM MORE LOGIC HERE TO SUBMIT DATA


//         //accessing form data for submission
//         console.log('Form Data', formData);

//          //reset form data after submit
//          setFormData({
//             initialInvestment: 0, //default is zero
//             annualInvestment: 0,
//             expectedReturn: 0,
//             investmentDuration: 0
//         });
//     };

//     return (
//         <div 
//         id = 'user-input'
//         >
//         <form 
//         className = 'input-group' onSubmit = {handleSumbitData}>

//         <label>Initial Investment:
//         <input
//         type='number'
//         placeholder='Initial Investment'
//         name='initial investment'
//         required value={(formData.initialInvestment)} //bind input value to a state
//         onChange={handleInputChange} //attach onChange even handler with a function that changes the input value 
//         />
//         </label>

//         <label>Annual Investment:
//         <input
//         type='number'
//         placeholder='Annual Investment'
//         name='annual investment'
//         required value={(formData.annualInvestment)} //bind input value to a state
//         onChange={handleInputChange} //attach onChange even handler with a function that changes the input value 
//         />
//         </label>

//         <label>Expected Return:
//         <input
//         type='number'
//         placeholder='Expected Return'
//         name='expected return'
//         required value={(formData.expectedReturn)} //bind input value to a state
//         onChange={handleInputChange} //attach onChange even handler with a function that changes the input value 
//         />
//         </label>

//         <label>Duration:
//         <input
//         type='number'
//         placeholder='Duration'
//         name='duration'
//         required value={(formData.investmentDuration)} //bind input value to a state
//         onChange={handleInputChange} //attach onChange even handler with a function that changes the input value 
//         />
//         </label>

//         <button
//             onClick={handleEditClick} >
        
//             {btnCaption}
//             </button>

//         </form>
//         </div>
//     );
// };








