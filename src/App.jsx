import Header from "./components/Header/Header";
import UserInput from "./components/User Input/UserInput";
import ResultsTable from "./components/ResultsTable/ResultsTable";
import { calculateInvestmentResults } from "./util/investment";
import { useState } from 'react';

function App() {

  const [output, setOutput ] = useState({
    initialInvestment: '', 
    annualInvestment: '',
    expectedReturn: '',
    investmentDuration: ''
});

  const handleInput = (inputValue) => {
    const processedOutput = {
    initialInvestment: inputValue.initialInvestment, 
    annualInvestment: inputValue.annualInvestment,
    expectedReturn: inputValue.expectedReturn,
    investmentDuration: inputValue.investmentDuration

    };
    console.log('Saved Data', processedOutput);

    setOutput(processedOutput)

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
