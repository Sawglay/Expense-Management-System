import React from 'react'
import './SummaryCards.css'

const SummaryCards = () => {
  return (
    <div className='summary-cards'>
      <div className='summary-card'>
        <h3>Hello Balance</h3>
        <p className='amount balance'>1000</p>
      </div>

      <div className='summary-card'>
        <h3>Income</h3>
        <p className='amount income'>1000</p>
      </div>

      <div className='summary-card'>
        <h3>Expense</h3>
        <p className='amount expense'>1000</p>
      </div>  
    </div>
  )
}

export default summarycards