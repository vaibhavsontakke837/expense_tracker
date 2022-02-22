import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'
const ExpensesList = (props) => {

    if (props.filterData.length === 0) {
        return <h2 className="error_message">No Data found</h2>;
    }

    return (
        <div>
            {
                props.filterData.map((row) => {
                    return (
                        <ExpenseItem key={row.id} expenseData={row} />
                    )
                })
            }
        </div>
    )
}
export default ExpensesList;