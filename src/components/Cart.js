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
                    <th className="tabla"><img className="img-carrito"src={item.img}/></th>
                    <th className="tabla">{item.name}</th>
                    <th className="tabla">{item.brand}</th>
                    <th className="tabla">{item.package}</th>
                    <th className="tabla">{item.cantidad} items</th>
                    <th className="tabla">${item.price} c/u</th>
                    <th className="tabla">Total ${item.price * item.cantidad}</th>
                    <button className="btn btn-danger btn-sm btn-trash" onClick={() => test.removeItem(item.id)}>🗑 </button>
                </tr>
                </tbody>
            </table>
            )}
            </>
            :
            <>
            <h3>Tu carrito esta vacio</h3>        
            <Link to="/"><button className="btn btn-info btn-sm btn-borrar btn-comprar">Ir a comprar</button></Link>
            </> 
}
        </>   
    );
}

export default Cart;
