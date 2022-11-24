import furniture from "../furnitureComponent/furniture";
import Display from "../DisplayComponent/Display";
import { getSelectedCategory } from "../../Redux/DisplaySlice";
import { useSelector } from "react-redux";
import Mishael from'./michael.jpg';

const Displaytwo = () => {

    const selectedCategory = useSelector(getSelectedCategory);

return(
<div>
<div className="block">
{furniture.filter(dish => {
if (selectedCategory === 'Весь ассортимент') return true;
    return selectedCategory === dish.category;
}).map(display => 
<Display display={display}/>)}
<img src={Mishael} width='100%' className="Mishael" alt="MishaelInterior"></img>

</div>
</div>
)
}

export default Displaytwo;