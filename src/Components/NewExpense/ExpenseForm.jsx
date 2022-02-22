import { useState } from 'react/cjs/react.development';
import './ExpenseForm.css'
const ExpeneForm = (props) => {

    const [title, setTitle] = useState("Sumit");
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState();


    const updateTitle = (event) => {
        // console.log(event.target.value);
        setTitle(event.target.value)
    }
    // const handleSubmit = (e) => {
    //     // alert(title +" "+amount+" "+date);    
    //     e.preventDefault();
    //     // console.log(title +" "+amount+" "+date);
    // }

    const data = {
        item: title,
        price: amount,
        date: new Date(date)
    }

    // let name="vaibhav"
    // console.log("From Expense From")

    // console.log(data)

    const handleSubmit = (e) => {
        e.preventDefault();     //to spot the page reload
        props.receiveData(data);

        setTitle(" ");
        setAmount(" ");
        setDate(" ");

        props.toggleForm(false)
    }
    const cancelButton = () => {
        props.toggleForm(false)
    }

    // store date in object to send to backend


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="newExpenseForm">
                    <div className="newExpenseForm__item">
                        <label>Title</label>
                        <input type="text" onChange={updateTitle} value={title} />
                    </div>
                    <div className="newExpenseForm__item">
                        <label>Amount</label>
                        <input type="number" onChange={(event) => setAmount(event.target.value)} value={amount} />
                    </div>
                    <div className="newExpenseForm__item">
                        <label>Date</label>
                        <input type="date" onChange={(event) => setDate(event.target.value)} value={date} />
                    </div>
                    <div className="newExpenseForm__item">
                        <button type="button" className='cancelButton' onClick={cancelButton}>Cancel</button>
                        <button type="submit" >Add Expense</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default ExpeneForm;