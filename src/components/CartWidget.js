import cart from '../img/cart.svg';

const CartWidget = () => {
    return(
        <a href="#">
             <span className="position-absolute top-0 start-70 translate-middle badge rounded-pill bg-danger">
             4
             </span>
        <img className='cart' src={cart} alt="" width="35" height="35"/>
        </a>
    )
}

export default CartWidget;