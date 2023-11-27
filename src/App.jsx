import Header from "./components/Header/Header";
import UserInput from "./components/User Input/UserInput";
import ResultsTable from "./components/ResultsTable/ResultsTable";
import { calculateInvestmentResults } from "./util/investment";

function App() {
  return (
    <>

    <Header/>
    <UserInput/>
    <ResultsTable/>

   
    </>
  );
}

export default App
