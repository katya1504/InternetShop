import Cart from "../Cart/Cart";

function NavCart(){  

    return(  <div>
        <div className='text'>                            
        <h3>Корзина </h3>
        </div>

        <div>
        <Cart/>
        </div>
        </div>
    )
}

export default NavCart;