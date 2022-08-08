import cart from '../assets/cart.svg';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const test = useContext(CartContext);
    console.log(test)
    return(
        <Link to="/cart/">
           { 
           test.cartList.length > 0 ?
        <>
             <span className="position-absolute top-0 start-70 badge rounded-pill bg-danger">
             {test.cartBudge()}
             </span>
           
            <img className='cart' src={cart} alt="" width="35" height="35"/>
        </>
        :<img className='cart' src={cart} alt="" width="35" height="35"/>
           }
        </Link>
    )
}

export default CartWidget;