import './ResultsTable.css';
import { useState } from 'react';



export default function ResultsTable ( { outputValue } ){

    //const [isActive, setIsActive] = useState(false);

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
        <tr>
            <td>Year</td>
            <td>{outputValue.initialInvestment}</td>
            <td>{outputValue.annualInvestment}</td>
            <td>{outputValue.expectedReturn}</td>
            <td>{outputValue.investmentDuration}</td>
        </tr>
    </tbody>
    
        </table>

        
        </div>
       
    );

};