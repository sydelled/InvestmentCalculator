import Header from "./components/Header/Header";
import UserInput from "./components/User Input/UserInput";
import ResultsTable from "./components/ResultsTable/ResultsTable";
import { calculateInvestmentResults, formatter } from "./util/investment";
import { useState } from 'react';

function App() {

  const [output, setOutput ] = useState([]);

  const handleInput = (inputValue ) => {
      const processedInput = {
        initialInvestment: inputValue.initialInvestment,
        annualInvestment: inputValue.annualInvestment,
        expectedReturn: inputValue.expectedReturn, 
        duration: inputValue.duration
      };
    console.log('Saved data:', processedInput);
     const calculateInput = calculateInvestmentResults(processedInput);
      setOutput(calculateInput);
      console.log('output', calculateInput);
    };
  return (
    <>

    <Header/>
    <UserInput handleInput={handleInput}/>
    <ResultsTable outputValue={output}/>

   
    </>
  );
};

export default App


// const processedInput = {
    //   interest: inputValue.initialInvestment, 
    //   valueEndOfYear: inputValue.expectedReturn,
    //   //duration: inputValue.duration,
    //   annualInvestment: inputValue.annualInvestment

    //   };
    //   console.log('Saved Data', processedInput);

    //   const calculateInput = calculateInvestmentResults(processedInput);
    //   setOutput(calculateInput);

    // const inputInitialInvestment = calculateInvestmentResults(initialInvestment);
    // const inputAnnualInvestment = calculateInvestmentResults(annualInvestment);
    // const inputExpectedReturn = calculateInvestmentResults(expectedReturn);
    // const inputDuration = calculateInvestmentResults(duration);

    // setOutput(inputInitialInvestment);
    // setOutput(inputAnnualInvestment);
    // setOutput(inputExpectedReturn);
    // setOutput(inputDuration);

    // console.log('initialInvesment', inputInitialInvestment);
    // console.log('annualInvestment', annualInvestment);
    // console.log('exceptedReturn', inputExpectedReturn);
    // console.log('duration', inputDuration);
 // const inputObj = {
    //   initialInvestment: initialInvestment,
    //   annualInvestment: annualInvestment,
    //   expectedReturn: expectedReturn,
    //   duration: duration
    // }
    // const calculateInput = calculateInvestmentResults(inputObj);
    // setOutput(calculateInput);
    // console.log(inputObj);