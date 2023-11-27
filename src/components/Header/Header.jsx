import img from "../../assets/investment-calculator-logo.png"; 
import './Header.css';

export default function Header(){
   //FETCHS USER INPUT
   //OUTPUTS RESULTS TABLE

   return (
    <div id="header">

        <img src={img} alt="investment log" />
        <h1>React Investment Calculator</h1>
    </div>
    
   );
}