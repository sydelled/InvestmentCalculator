import './ResultsTable.css';
// import { useState } from 'react';
// import { formatter } from "./util/investment";



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
            <td>{outputValue.year}</td>
            <td>{outputValue.investmentValue}</td>
            <td>{outputValue.interest}</td>
            <td>{outputValue.valueEndOfYear}</td>
            <td>{outputValue.annualInvestment}</td>
        </tr>
    </tbody>
    
        </table>

        
        </div>
       
    );

};