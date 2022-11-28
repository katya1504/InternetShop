import furniture from "../furnitureComponent/furniture";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../Redux/cartSlice";


const CartItem = ({cartItem}) => {

const dishes = furniture.find(item => item.id === cartItem.dishId)

const dispatch= useDispatch();


    return(
    <div>
        <div className="cartList">
        <img className="fotoTwo" src={`./${dishes.img}.jpg`} alt='fotos'/>
        <div className="cartListBlock">
        <p className="dishesName">{dishes.name}</p>
    <p className="CartText">Количество: {cartItem.quantity}</p>
    <p className="CartText">Стоимость: ${dishes.price * cartItem.quantity}</p>
    <span onClick={() => dispatch(removeItemFromCart({cartItemId:
    cartItem.id}))}>
    <button className='AddToCart'>Удалить</button>    
 </span>
    </div>
    </div>
    </div>
    )
    }
    
    export default CartItem;