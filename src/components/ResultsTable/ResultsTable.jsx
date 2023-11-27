import './ResultsTable.css';
import { useState } from 'react';



export default function ResultsTable (){

    const [isActive, setIsActive] = useState(false);

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
            <td>Row 1, Cell 1</td>
            <td>Row 1, Cell 2</td>
            <td>Row 1, Cell 3</td>
            <td>Row 1, Cell 4</td>
            <td>Row 1, Cell 5</td>
        </tr>
    </tbody>
    
        </table>

        
        </div>
       
    );

};