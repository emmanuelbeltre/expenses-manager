import UseState, { useState } from 'react'
import Message from './Message';

export const NewBudget = ({
  budget, 
  setBudget, 
  setIsValidBudget
}) => {

  const [message, setMessage]= useState('');

  const handleBudget = (e) =>{
    e.preventDefault();
    
    if (!budget || Number(budget)<0){
      setMessage('Is not a valid budget')
      return
    }
    setMessage('');
    setIsValidBudget(true)
    
  }


  return (
    <div className='contenedor-presupuesto contenedor sombra'>

        <form onSubmit={handleBudget} className='formulario'>
            <div className="campo">
                <label>Define Budget</label>
                <input type="number" 
                className='nuevo-presupuesto'
                placeholder='Add your budget'
                value={budget}
                onChange={e=>setBudget(Number(e.target.value))}

                
                />
            </div>

            <input type="submit" value="add" />

          {message && <Message tipo='error'>{message}</Message>}

        </form>

    </div>
  )
}
