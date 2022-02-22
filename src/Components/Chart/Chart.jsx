import './Chart.css'
import ChartBar from './ChartBar';
const Chart = (props) => {

    // console.log(props.chartDataPoints)
    // let pricesArray=props.chartDataPoints.map(row => row.price)
    // // console.log(...pricesArray)
    // let maxPrice = Math.max(...pricesArray)
    // // console.log(maxPrice)

    let priceArray = props.chartDataPoints.map(row => row.price);

    let maxPrice = Math.max(...priceArray)
    // console.log(priceArray)

    return (

        <div className="chart">
            {
                props.chartDataPoints.map(row => {
                    return <ChartBar key={row.label} label={row.label} value={row.price} maxValue={maxPrice} />
                })
            }

        </div>
        //     <div className="chart">
        //         {
        //             props.chartDataPoints.map((row)=>{
        //                 return <ChartBar  label={row.label} value={row.price} maxValue={maxPrice}/>
        //             })
        //         }

        //         {/* <ChartBar label="Feb" value={364} maxValue={799}/>
        //         <ChartBar label="Mar" value={556} maxValue={799}/> */}
        //     </div>
    )
}
export default Chart;