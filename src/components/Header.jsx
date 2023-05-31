import React from 'react'
import { NewBudget } from './NewBudget'

const header = () => {
  return (
    <header>
        <h1>Budget Header</h1>

        <div>
            <NewBudget/>
        </div>
    </header>
  )
}

export default header