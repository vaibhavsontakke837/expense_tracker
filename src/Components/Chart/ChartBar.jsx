import './ChartBar.css'
const ChartBar=(props)=>{

    // let barHeight="0%";
    // if(props.maxValue > 0){
    //     barHeight=Math.round((props.value / props.maxValue)*100) + "%";
    //     console.log(barHeight)
    // }
    // console.log(props.value)

    let barHeight=" ";
    if(props.maxValue > 0){
        barHeight=Math.round((props.value / props.maxValue) * 100) + "%"
        // console.log(barHeight)
    }
    return(
        <div className='chartBar'>
            <div className='chartBar_inner'>
                <div className="chartBar_fill" style={{height:barHeight}}></div>
            </div>
            <div className="chartBar_label">{props.label}</div>
        </div>
        // <div className="chartBar">
        //     <div className="chartBar_inner">
        //         <div className="chartBar_fill" style={{height:barHeight}}></div>
        //     </div>
        //     <div className='chartBar_label'>{props.label}</div>
        // </div>
    )
}
export default ChartBar;