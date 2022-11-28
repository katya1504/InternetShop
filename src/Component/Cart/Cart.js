import { useSelector } from "react-redux/es/exports";
import { getCartItems, getTotalPrice } from "../../Redux/cartSlice";
import Image from './basket.png';
import CartItem from './CartItem';

const Cart = () => {

const cartItems = useSelector(getCartItems);

const totalPrice = useSelector(getTotalPrice);

    return(
    <div className="blockTwo">
        <div className="Blockicon">
    <img src={Image} alt='icon' className="urn"></img>
<h4 className="finishPrice">Итого: ${totalPrice}</h4>
</div>
{cartItems.map(cartItem => <CartItem cartItem={cartItem}/>)}
    </div>
    );
    }
    
    export default Cart;