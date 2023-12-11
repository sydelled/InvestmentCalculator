import './ResultsTable.css';
// import { useState } from 'react';
// import { formatter } from "./util/investment";



export default function ResultsTable ({outputValue, inputValue}){

    console.log("variable: ", outputValue)
    const outputArray = [];
    outputArray.push(outputValue);
    outputArray.push(outputValue);
    console.log("outputArray: ", outputArray);
    //const [isActive, setIsActive] = useState(false);

    // console.log("output: " + outputValue);
    // console.log("input: " + inputValue);

    // const handleValues = () => {

    //     outputValue.forEach((obj) => {
    //         <tr>
    //         <td>{obj.year}</td>
    //         <td>{inValue.initialInvestment}</td>
    //          <td>{obj.interest}</td>
    //          <td>{obj.valueEndOfYear}</td>
    //          <td>{obj.annualInvestment}</td>
    //          </tr>
            
          
    //     });
    // };
    
    return (
        <div>
       
        <table id='result'>
    <thead>
        <tr>
            <th>Year</th>
            {/* <th>Investment Value</th> */}
            <th>Interest (year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
        </tr>
    </thead>
<tbody>
   {outputArray.map(( outputValue, index ) => (
        <tr key={index}>
        <td>{outputValue.year}</td>
        <td>{outputValue.interest}</td>
        <td>{outputValue.valueEndOfYear}</td>
        <td>{outputValue.annualInvestment}</td>
        </tr>))}
    
    {/* <tr>
        <td>{outputValue.year}</td>
        <td>{inputValue.initialInvestment}</td>
        <td>{outputValue.interest}</td>
        <td>{outputValue.valueEndOfYear}</td>
        <td>{outputValue.annualInvestment}</td>
    </tr> */}
</tbody>

    </table>

    
    </div>
   
       
);
    };