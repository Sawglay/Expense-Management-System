import React from 'react'
import './App.css';
import SummaryCards from '../Components/SummaryCards/summarycards';

const App = () => {
  return (
    <div>
      <header>
        <h1>
          Expense Management System
        </h1>

        <SummaryCards/>

        <div className='dashboard'>
          <div className='left panel'>

          </div>
        </div>
      </header>
    </div>
  )
}
