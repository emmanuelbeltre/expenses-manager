import React from 'react'
import { NewBudget } from './NewBudget'

const header = ({budget, setBudget}) => {
  return (
    <header>
        <h1>Budget Header </h1>

        <div>
            <NewBudget
            budget = {budget}
            setBudget= {setBudget}          
            />
        </div>
    </header>
  )
}

export default header