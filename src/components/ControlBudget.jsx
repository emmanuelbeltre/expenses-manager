import React from 'react'

const ControlBudget = ({budget}) => {

    const formatCuantity = (cuantity) =>{
       return cuantity.toLocaleString('en-US',{
            style: 'currency',
            currency:'USD'
        })
    }
  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
            <p>Grafica aqui</p>
            </div>

            <div className="contenido-presupuesto">
                <p>
                    <span>Budget: </span> {formatCuantity(budget)}
                </p>
                <p>
                    <span>Available: </span> {formatCuantity(0)}
                </p>
                <p>
                    <span>Expense: </span> {formatCuantity(0)}
                </p>
            </div>
    </div>
  )
}

export default ControlBudget