import './ResultsTable.css';


export default function ResultsTable ({ outputValue, inputValue, isActive }){
    
    console.log('input: ', inputValue);
    console.log('output: ', outputValue);
    console.log('here resultstable');
    return (
      
       <div>
       {isActive ? (
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
    {outputValue.map((value, index) => (
    <tr key={index}>
        <td>{value.year}</td>
        <td>{inputValue[index].initialInvestment}</td>
        <td>{value.interest}</td>
        <td>{value.valueEndOfYear}</td>
        <td>{value.annualInvestment}</td>
    </tr>
))}
    </tbody>
    </table>) : (

    <p className='center'>Please submit data in form above by hitting <strong>edit</strong> button and entering your information. </p>
        )}
    </div>
    );
};