import './FilterItem.css'
import Card from '../Card/Card';
const FilterItem = (props) => {

    const sendYear = (e) => {
        // console.log(e.target.value);
        props.getYear(e.target.value);
    }
    return (
        <Card className="expenseItem">
            <h3>filter by year</h3>
            <select onChange={sendYear} value={props.yearValue}>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
            </select>
        </Card>
    )
}
export default FilterItem;