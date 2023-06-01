import UseState, { useState } from 'react'
import Message from './Message';

export const NewBudget = ({budget, setBudget}) => {

  const [message, setMessage]= useState('');

  const handleBudget = (e) =>{
    e.preventDefault();
    
    if (!Number(budget) || Number(budget)<0){
      setMessage('Is not a valid budget')
    }else{
    }
  }


  return (
    <div className='contenedor-presupuesto contenedor sombra'>

        <form onSubmit={handleBudget} className='formulario'>
            <div className="campo">
                <label>Define Budget</label>
                <input type="text" 
                className='nuevo-presupuesto'
                typeof='text'
                placeholder='Add your budget'
                value={budget}
                onChange={e=>setBudget(e.target.value)}

                
                />
            </div>

            <input type="submit" value="add" />

          {message && <Message tipo='error'>{message}</Message>}

        </form>

    </div>
  )
}
