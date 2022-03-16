// import React, { useState } from 'react';
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import ExpensePrice from './ExpensePrice/ExpensePrice'
import Card from '../Card/Card'

const ExpenseItem = (props) => {

  // let desc=props.expenseData.item;
  // const [desc, setDesc] = useState(props.expenseData.item)
  // const clickHandler = () => {
  //   // console.log("clicked");
  //   // desc="Changed";
  //   // console.log(desc);
  //   // setDesc("updated")

  // }

  return (
    <Card className="expenseItem">
      {/* <ExpenseDate  expenseData={props.expenseData} months={props.months}/> */}
      <ExpenseDate expenseData={props.expenseData} />
      <div className="expenseItem-description">
        <h2>{props.expenseData.item}</h2>
      </div>
      <ExpensePrice expenseData={props.expenseData} />
      <div>
      </div>
    </Card>
  )
}
export default ExpenseItem;