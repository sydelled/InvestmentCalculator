import UserInput from "../UserInput/UserInput";
import ResultsTable from "../ResultsTable/ResultsTable";
import { useState } from 'react';
import { calculateInvestmentResults, formatter } from "../../util/investment";


export default function HandleDataSubmission ({ onUpdateData }){

  const [output, setOutput ] = useState([]);
  const [input, setInput] = useState([]);
//   const [isActive, setIsActive] = useState(false);
  
  const handleInput = (inputValue) => {
      let processedInput = {
        initialInvestment: inputValue.initialInvestment,
        annualInvestment: inputValue.annualInvestment,
        expectedReturn: inputValue.expectedReturn, 
        duration: inputValue.duration
      };

        setInput([...input, processedInput]);
        console.log('Saved data:', processedInput);
       
        return processedInput;
    };

    // const inputData = handleInput(processInput)

    const handleOutput = () => {
        const processedInput = handleInput(processInput);
        const calculateInput = calculateInvestmentResults(processedInput);
        let outputObj; 
        calculateInput.forEach((obj) => {
          
              outputObj = {
                year: obj.year,
                interest: formatter.format(obj.interest),
                valueEndOfYear: formatter.format(obj.valueEndOfYear),
                annualInvestment: formatter.format(obj.annualInvestment)
            };      
        });
         // setIsActive(true);
         setOutput([...output, outputObj]);
    };
      
       
    return(
        <>
        <UserInput handleInput={handleInput}/>
        <ResultsTable outputValue={handleOutput} inputValue={inputValue} />
        </>
    );
          
};