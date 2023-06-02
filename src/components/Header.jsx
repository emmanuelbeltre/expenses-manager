import React from 'react'
import { NewBudget } from './NewBudget'
import ControlBudget from './ControlBudget'

const header = ({
  budget, 
  setBudget, 
  isValidBudget, 
  setIsValidBudget
}) => {
  return (
    <header>
        <h1>Budget Header </h1>

        <div>
          {isValidBudget ? (
            <ControlBudget
            budget={budget}
            />
          ) : 
            <NewBudget
            budget = {budget}
            setBudget= {setBudget}
            setIsValidBudget = {setIsValidBudget}          
            />
           }
            
        </div>
    </header>
  )
}

export default header