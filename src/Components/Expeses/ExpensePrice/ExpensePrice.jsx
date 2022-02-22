import './ExpensePrice.css'
const ExpensePrice = (props) => {
    return (
        <div>
            <div className="expenseItem-price">
                $ {props.expenseData.price}
            </div>
        </div>
    )
}
export default ExpensePrice;