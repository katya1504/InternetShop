import { useState } from "react";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { addItemToCart } from "../../Redux/cartSlice";

    const Display = ({display}) =>{

        const [quantity, setQuantity] = useState(1);

        const dispatch = useDispatch();


    return(
    <div>
        <p className="nameFurniture">{display.name}</p>
        <img className="foto" src={`./${display.img}.jpg`} alt='fotos'/>
        <div className="quantity">
    <p>$ {display.price}</p>
    </div>

    <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
    <div className="quantity">
    <button onClick={() => {dispatch(addItemToCart({display, quantity}))}} className='AddToCart'>В корзину</button>
</div>
    </div>
    
    )
    }
    
    export default Display;