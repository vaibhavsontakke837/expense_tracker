import './Expenses.css'
import Card from '../Card/Card'
import FilterItem from './FilterItem'
import ExpensesList from './ExpensesList'
import { useState } from 'react'
import ExpenseChart from './ExpenseChart'

const Expenses = ({ expenseData }) => {

    const [year, setYear] = useState("2020")


    //get year from child comp to parent comp
    const getYear = (year) => {
        // console.log("From Expenses");
        // console.log(year);
        setYear(year)
    }

    let filterData = expenseData.filter((exp) => {
        // console.log(exp.date.getFullYear())
        return exp.date.getFullYear().toString() === year.toString()
    })
    // console.log(filterData)

    // //storing jsx code in variable and use it in jsx
    // let record = <h2 style={{color:"white"}}>No Data found</h2>;                 //expensesList

    // if(filterData.length > 0){
    //     record=filterData.map((row) => {
    //         return (
    //             <ExpenseItem key={row.id} expenseData={row} />
    //         )
    //     })
    // }

    return (
        <div>

            <Card className="expenses">
                <div className="filter">
                    <FilterItem yearValue={year} getYear={getYear} />

                    <ExpenseChart filterData={filterData} />

                    <ExpensesList filterData={filterData} />
                </div>
                {/* {
                    filterdata.length === 0 && record

                } */}

                {/* {record} */}



            </Card>
        </div>
    )
}
export default Expenses;