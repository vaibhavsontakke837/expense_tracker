import ExpeneForm from './ExpenseForm';
import "./NewExpense.css"
import Card from '../Card/Card';
import { useState } from 'react';
const NewExpense = (props) => {

    const receiveData = (data) => {
        //     console.log("From NewExpense")
        //    console.log(data)
        props.receiveDataParent(data)
    }

    const [toggleForm, setToggleForm] = useState(false)

    const toggleExpenseForm = () => {
        setToggleForm(true)
    }

    return (
        <Card className="ExpenseForm">
            {/*           
          { !toggleForm && <button onClick={toggleExpenseForm}>Add Expense Item</button> }
          
           { toggleForm &&  <ExpeneForm receiveData={receiveData}/> } */}
            {
                toggleForm ? <ExpeneForm receiveData={receiveData} toggleForm={setToggleForm} />
                    : <button className='button' onClick={toggleExpenseForm}>Add Expense Item</button>

            }
        </Card>
    )
}
export default NewExpense;