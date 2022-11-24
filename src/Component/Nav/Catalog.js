import Displaytwo from "../DisplayComponent/Displaytwo";
import Allcategories from "../Filter/AllCategories";


function Catalog(){
       
    return(  <div>
        <div className='text'>                            
        <h3>Каталог</h3>
        </div>
        <div>

<Allcategories/>

<Displaytwo/>

        </div>
        </div>
    )

}

export default Catalog;