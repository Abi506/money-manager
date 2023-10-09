import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="user-container">
          <h1 className="userWelcome">Hi,Richard</h1>
          <p className="welcome-message">
            Welcome back to your{' '}
            <span className="span-item">Money Manager</span>
          </p>
        </div>
        <MoneyDetails />
        <div className="transaction-and-history">
        <form className="transaction-container">
        <h1 className="transaction-heading">Add Transaction</h1>

        <p className="input-labels">TITLE</p>
        <input type="text" className="input-styling" placeholder="TITLE"/>

        <p className="input-labels">Amount</p>
        <input type="text" placeholder="AMOUNT" className="input-styling"/>

        <p className="input-labels">TYPE</p>
        <select>
        {
            transactionTypeOptions.map(each=>(
                <option id={each.optionId} value={each.optionId}>{each.displayText}</option>
            ))
        }
        

        </select>
        <div className="button-container">
        <button type="submit">Add</button>

        </div>
        </form>
      </div>
    )
  }
}
export default MoneyManager