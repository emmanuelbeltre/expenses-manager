import { useState } from 'react'
import Header from './components/header'
import IconNewExpense from './img/nuevo-gasto.svg'


function App() {

  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false)
  const [modal, setModal] =useState(false);


  const handleNewExpense = ()=>{
    setModal(true)
  }

  return (
    <>

      <div >
        <Header
          budget = {budget}
          setBudget= {setBudget}
          isValidBudget={isValidBudget}
          setIsValidBudget={setIsValidBudget}
        /> 

        {isValidBudget && (<div className="nuevo-gasto">
          <img 
          src={IconNewExpense} 
          alt="icon new spent"
          onClick={handleNewExpense}
          />
        </div>) }
   
        

        </div>
    </>
  )
}

export default App
