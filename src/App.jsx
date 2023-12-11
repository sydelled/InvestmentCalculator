import Header from "./components/Header/Header";
import UserInput from "./components/User Input/UserInput";
import ResultsTable from "./components/ResultsTable/ResultsTable";
import { calculateInvestmentResults, formatter } from "./util/investment";
import { useState } from 'react';

function App() {

  
  const [output, setOutput ] = useState([]);
  const [input, setInput] = useState([]);
  
  const handleInput = (inputValue) => {
      let processedInput = {
        initialInvestment: inputValue.initialInvestment,
        annualInvestment: inputValue.annualInvestment,
        expectedReturn: inputValue.expectedReturn, 
        duration: inputValue.duration
      };

    setInput(processedInput);
    console.log('Saved data:', processedInput);
    const calculateInput = calculateInvestmentResults(processedInput);
    
     calculateInput.forEach((obj) => {
      
    console.log(obj);
        const outputObj = {
          year: obj.year,
          interest: formatter.format(obj.interest),
          valueEndOfYear: formatter.format(obj.valueEndOfYear),
          annualInvestment: formatter.format(obj.annualInvestment)
       };
      //  console.log('output', outputObj);
      setOutput(outputObj);
       
    });
    
    };


  return (
    <>

    <Header/>
    <UserInput handleInput={handleInput}/>
    <ResultsTable outputValue={output} inputValue={input}/>

   
    </>
  );
};

export default App

