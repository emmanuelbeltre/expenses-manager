import React from 'react'

export const NewBudget = () => {
  return (
    <div className='contenedor-presupuesto contenedor sombra'>

        <form action="" className='formulario'>
            <div className="campo">
                <label>Define Budget</label>
                <input type="text" 
                className='nuevo-presupuesto'
                typeof='text'
                placeholder='Add your budget'

                
                />
            </div>

            <input type="submit" value="add" />

        </form>

    </div>
  )
}
