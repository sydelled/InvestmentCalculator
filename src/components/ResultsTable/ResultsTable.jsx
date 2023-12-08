import './ResultsTable.css';
// import { useState } from 'react';
// import { formatter } from "./util/investment";



export default function ResultsTable ( { outputValue, inputValue } ){

    //const [isActive, setIsActive] = useState(false);

    mergedData = {...outputValue, ...inputValue};
    
    return (
        <div>
       
            <table id='result'>
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
    <tbody>
             {/* <tr>
             <td>{outputValue.year}</td>
             <td>{inputValue.initialInvestment}</td>
             <td>{outputValue.interest}</td>
             <td>{outputValue.valueEndOfYear}</td>
             <td>{outputValue.annualInvestment}</td>
         </tr> */}
       
        {Object.keys((mergedData).map(key) => (
             <tr key={key}>
             <td>{value.year}</td>
             <td>{inputValue.initialInvestment[index]}</td>
             <td>{value.interest}</td>
             <td>{value.valueEndOfYear}</td>
             <td>{value.annualInvestment}</td>
         </tr>
        )
        };};
       
    </tbody>
    
        </table>

        
        </div>
       
    );

};