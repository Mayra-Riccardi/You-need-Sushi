import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "../styles/styledComponents.css"

const Cart = () => {
    const test = useContext(CartContext)
    console.log(test.cartList)
    return (
        <>

        {
            (test.cartList.length > 0 )
            ? 
            <>
            <button className="btn btn-danger btn-sm btn-borrar btn-vaciarCarrito" onClick={test.clearAll}>Vaciar Carrito</button>
            {test.cartList.map (item => 
                <table className="table table-striped">
                <tbody>
                <tr>
                    <th><img className="img-carrito"src={item.img}/></th>
                    <th>{item.name}</th>
                    <th>{item.brand}</th>
                    <th>{item.package}</th>
                    <th>{item.cantidad} items</th>
                    <th>${item.price} - ${test.finalPrice()}</th>
                    <button className="btn btn-danger btn-sm btn-trash" onClick={() => test.removeItem(item.id)}>🗑 </button>
                </tr>
                </tbody>
            </table>
            )}
            </>
            :
            <>
            <h3>Tu carrito esta vacio</h3>        
            <Link to="/"><button className="btn btn-info btn-sm btn-borrar btn-vaciarCarrito">Ir a comprar</button></Link>
            </> 
}
        </>   
    );
}

export default Cart;
