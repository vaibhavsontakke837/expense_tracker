import Chart from "../Chart/Chart"

const ExpenseChart = (props) => {



    // console.log(props.filterData)

    let chartDataPoints = [
        { label: "Jan", price: 0 },
        { label: "Feb", price: 0 },
        { label: "Mar", price: 0 },
        { label: "Apr", price: 0 },
        { label: "May", price: 0 },
        { label: "June", price: 0 },
        { label: "Jully", price: 0 },
        { label: "Aug", price: 0 },
        { label: "Sep", price: 0 },
        { label: "Oct", price: 0 },
        { label: "Nov", price: 0 },
        { label: "Dec", price: 500 }
    ];

    // for(let record of props.filterData){
    //     let month = record.date.getMonth()
    //     // console.log(month)
    //     // console.log(chartDataPoints[month].price)
    //     chartDataPoints[month].price += record.price
    // }

    for (let record of props.filterData) {
        let month = record.date.getMonth();
        // console.log(month)   
        chartDataPoints[month].price += Number(record.price)
        // console.log(chartDataPoints[month].price+=Number(record.price))
    }
    return (
        <div>
            {/* <Chart /> */}

            <Chart chartDataPoints={chartDataPoints} />
        </div>
    )
}
export default ExpenseChart;