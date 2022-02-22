import './Card.css'

const Card = (props) => {
    // const classes ="card "+ props.className
    // console.log(classes) 
    return (
        <div className={"card " + props.className}>
            {props.children}
        </div>
    )
}
export default Card;
