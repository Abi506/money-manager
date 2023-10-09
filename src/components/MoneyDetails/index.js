// Write your code here
import './index.css'
const MoneyDetails = props => {
  const {balanceAmount} = props
  return (
    <div className="money-details">
      <div className="balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="balance-image"
        />
        <div>
          <p className="text-styling">Your balance</p>
          <p className="text-rupee">Rs 4000</p>
        </div>
      </div>
      <div className="income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="income-image"
        />
        <div>
          <p className="text-styling">Your balance</p>
          <p className="text-rupee">Rs 4000</p>
        </div>
      </div>
      <div className="expenses-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png "
          alt="expenses"
          className="expense-image"
        />
        <div>
          <p className="text-styling">Your balance</p>
          <p className="text-rupee">Rs 4000</p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
