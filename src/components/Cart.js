import { useContext } from "react";
import { CartContext } from "./CartContext";
import "../styles/styledComponents.css"

const Cart = () => {
    const test = useContext(CartContext)
    console.log(test.cartList)
    return (
        <>
        <h3>Tu Carrito</h3>
        <button className="btn btn-danger btn-sm btn-borrar btn-vaciarCarrito" onClick={test.clearAll}>Vaciar Carrito</button>

        {
            test.cartList.length > 0 && test.cartList.map (item => 
                <table className="table table-striped">
                <tbody>
                <tr>
                    <th><img className="img-carrito"src={item.img}/></th>
                    <th>{item.name}</th>
                    <th>{item.brand}</th>
                    <th>{item.package}</th>
                    <th>{item.cantidad} items</th>
                    <th>{item.price}</th>
                    <button className="btn btn-danger btn-sm btn-borrar" onClick={() => test.removeItem(item.id)}>Borrar</button>
                </tr>
                </tbody>
            </table>
            )
}
        </>   
    );
}

export default Cart;
