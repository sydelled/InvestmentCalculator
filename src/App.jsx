import Header from "./components/Header/Header";
import UserInput from "./components/UserInput/UserInput";
import ResultsTable from "./components/ResultsTable/ResultsTable";
import { calculateInvestmentResults, formatter } from "./util/investment";
import { useState } from 'react';
import './index.css';


function App() {
  const [output, setOutput ] = useState([]);
  const [input, setInput] = useState([]);
  const [isActive, setIsActive] = useState(false);
  
  const handleInput = (inputValue) => {
      let processedInput = {
        initialInvestment: inputValue.initialInvestment,
        annualInvestment: inputValue.annualInvestment,
        expectedReturn: inputValue.expectedReturn, 
        duration: inputValue.duration
      };

        setInput([...input, processedInput]);
        console.log('Saved data:', processedInput);
      
    
      
          
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
        setIsActive(true);
    
      };
  

  return (
    <>
    <Header/>
    <main>
    <UserInput handleInput={handleInput}/>
    <ResultsTable outputValue={output} inputValue={input} isActive={isActive} />
    </main>
    </>
  );
};

export default App

