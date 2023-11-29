import { useState } from 'react';
import './UserInput.css';


export default function UserInput (){

    const initialFormData = {
        initialInvestment: '', 
        annualInvestment: '',
        expectedReturn: '',
        investmentDuration: ''
    };
    
    //initializing a state object with useState
    const [formData, setFormData] = useState(initialFormData);
    const [ isEditMode, setIsEditMode ]= useState(true);
    const [ tableData, setTableData ] = useState([]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({...formData, [name]: value});
    };

    const handleEdit = () => {
        setIsEditMode(true);
    };

    const handleSave = () => {
        setIsEditMode(false);
        setTableData([...tableData, formData]);
        setFormData(initialFormData);
    };

//     const handleInputChange = (event) => {
//         // const { name, value } = event.target;
//         // setFormData({
//         //     ...formData,
//         //     [name]: value,
//         // });
//         setFormData(event.target.value);
//     };


//     let editableInitialInvestment = <input  
//     type='number'
//     placeholder='Initial Investment'
//     value={formData.key} readOnly/>;
//     let editableAnnualInvestment = <input type="number"
//     placeholder='Annual Investment'         
//     value={formData.key} readOnly/>;
//     let editableExpectedReturn = <input 
//     type="number"
//     placeholder='Expected Return' 
//     value={formData.key} readOnly/>;
//     let editableInvestmentDuration = <input 
//     type="number" 
//     placeholder='Investment Duration'
//     value={formData.key} readOnly/>;
//     let btnName = 'Edit';

    
//     if (isEditMode){
//     btnName = 'Save';
//     };
    
//     // let editableInitialInvestment = <input type="number" required value={formData.initialInvestment} onChange={handleInputChange}/>;
//     // let editableAnnualInvestment = <input type="number" required value={formData.annualInvestment} onChange={handleInputChange} />;
//     // let editableExpectedReturn = <input type="number" required value={formData.expectedReturn} onChange={handleInputChange}/>;
//     // let editableInvestmentDuration = <input type="number" required value={formData.investmentDuration} onChange={handleInputChange}/>;
        
//     // };

//     const handleEditClick = ()=> {
//         setIsEditMode(true);
        
//         };
    
//     const handleSubmit = (event) => {
//         event.preventDefault();//prevents default submission behavior

//         setSavedData([...savedData, formData]);
//         setIsEditMode(false);
//         console.log('Form Data', formData.key);
//         setFormData({
//             initialInvestment: 0, //default is zero
//             annualInvestment: 0,
//             expectedReturn: 0,
//             investmentDuration: 0
//         });
//     };

//         return (
//         <div 
//         id = 'user-input'>
        
//         <form 
//         className = 'input-group'>
//         <label>Initial Investment: {editableInitialInvestment}</label>
//         <label>Annual Investment:{editableAnnualInvestment}</label>
//         <label>Expected Return:{editableExpectedReturn}</label>
//         <label>Duration:{editableInvestmentDuration}</label>
//         </form>
        
//             <button
//             onClick={handleEditClick} >
//             {btnName}
//             </button>
            
//         </div>
//     );
// };






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








