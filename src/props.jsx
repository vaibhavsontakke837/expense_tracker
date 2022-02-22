import React from "react";
import { useState } from "react";
import Expenses from './Components/Expeses/Expenses'

import NewExpense from "./Components/NewExpense/NewExpense";

const dummyData = [
    {
        id: "exp1",
        date: new Date(2021, 2, 12),
        item: "New TV",
        price: "799.49"
    },
    {
        id: "exp2",
        date: new Date(2021, 4, 23),
        item: "Car Incurance",
        price: "294.76"
    },
    {
        id: "exp3",
        date: new Date(2019, 2, 12),
        item: "New Desk",
        price: "250"
    },
    {
        id: "exp4",
        date: new Date(2020, 11, 19),
        item: "Laptop",
        price: "330"
    },
    {
        id: "exp5",
        date: new Date(2020, 12, 20),
        item: "TV",
        price: "450"
    },
    {
        id: "exp6",
        date: new Date(2022, 12, 20),
        item: "Camera",
        price: "350"
    },
    {
        id: "exp7",
        date: new Date(2019, 12, 20),
        item: "Laptop",
        price: "450"
    },
    {
        id: "exp8",
        date: new Date(2019, 2, 12),
        item: "Pen",
        price: "300"
    },
    {
        id: "exp9",
        date: new Date(2019, 6, 22),
        item: "Ink",
        price: "200"
    },
    {
        id: "exp10",
        date: new Date(2022, 5, 5),
        item: "Pen",
        price: "300"
    },
    {
        id: "exp11",
        date: new Date(2022, 2, 23),
        item: "Pen",
        price: "600"
    },
    {
        id: "exp12",
        date: new Date(2020, 8, 15),
        item: "Mobile",
        price: "521"
    }, {
        id: "exp13",
        date: new Date(2020, 5, 22),
        item: "Headphone",
        price: "300"
    },
]

const FirstProps = () => {

    //  const months = ["January", "February", "March", "April", "May", "June", 
    // "July", "August", "September", "October", "November", "December"]; 

    const [expenseData, setExpenseData] = useState(dummyData);

    // console.log(expenseData)
    // console.log(expenseData[0])



    //receive data from child comp to parent comp
    const receiveData = (data) => {
        console.log("From Props(App Comp)")
        console.log(data)
        setExpenseData([data, ...expenseData]);
    }

    return (
        <div>
            <NewExpense receiveDataParent={receiveData} />
            <Expenses expenseData={expenseData} />
        </div>
    )
}
export default FirstProps;