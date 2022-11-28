import { useSelector, useDispatch} from "react-redux";
import { getSelectedCategory, filterCategory } from "../../Redux/displaySlice";

const Filter = ({category}) => {

const dispatch = useDispatch();

const selectedCategory = useSelector(getSelectedCategory);

    return(
    <div>
    <div>
    <p onClick={() => {dispatch(filterCategory(category))}} className={selectedCategory === category ? 'categoryButtonSelected categoryButton' : 'categoryButton'}>{category}</p>
    </div>
    </div>   
    )
    }
    
    export default Filter;