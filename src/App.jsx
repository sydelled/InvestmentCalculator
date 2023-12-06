import Header from "./components/Header/Header";
import UserInput from "./components/User Input/UserInput";
import ResultsTable from "./components/ResultsTable/ResultsTable";
import { calculateInvestmentResults, formatter } from "./util/investment";
import { useState } from 'react';

function App() {

  const [output, setOutput ] = useState({
    year: '', 
    interest: '',
    valueEndOfYear: '',
    annualInvestment: ''
});

  const handleInput = (inputValue) => {
    const processedInput = {
    initialInvestment: inputValue.initialInvestment, 
    annualInvestment: inputValue.annualInvestment,
    expectedReturn: inputValue.expectedReturn,
    duration: inputValue.duration

    };
    console.log('Saved Data', processedInput);

    const calculateInput = calculateInvestmentResults(processedInput);
    setOutput(calculateInput);

  };
  return (
    <>

    <Header/>
    <UserInput handleInput={handleInput}/>
    <ResultsTable outputValue={output}/>

   
    </>
  );
}

export default App
