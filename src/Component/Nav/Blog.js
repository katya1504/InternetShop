import { useState } from "react";
import furnitureInterior from "../furnitureComponent/furnitureInterior";


function Blog(){ 

    const [interior] = useState(furnitureInterior); 
 
    return(
        <div>
<div>
    <p className="FurnitureInterior"> Наша мебель в интерьере клиентов: </p>
</div>

 {interior.map((thing =>{
const {id,name, img} = thing;

return(
    <div className='furnitureInteriorBlock' key={id}>
        <div className="furnitureInteriorBlockTwo">
    <p className="nameInteriorText">{name}</p>
    <img src={`./${img}.jpg`} alt='furnitureInterior' className="furnitureInteriorImage"></img>
    </div>
   </div>
)

 }))}  

</div>                                
    )
}


export default Blog;