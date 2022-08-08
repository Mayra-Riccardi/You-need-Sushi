import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "../styles/styledComponents.css"
import "../styles/ItemDetails.css"

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
                <table className="table table-striped ">
                <tbody>
                <tr>
                    <th scope="col"><img className="img-carrito"src={item.img} alt=""/></th>
                    <th scope="col">{item.name}</th>
                    <th scope="col">{item.brand}</th>
                    <th scope="col">{item.package}</th>
                    <th scope="col">{item.cantidad} items</th>
                    <th scope="col">${item.price} c/u</th>
                    <th scope="col">Total ${item.price * item.cantidad}</th>
                    <button className="btn btn-danger btn-sm btn-trash" onClick={() => test.removeItem(item.id)}>🗑 </button>
                </tr>
                </tbody>
            </table>
            )}
                   <div className="card card-total" >
                     <div className="card-body">
                     <h5 className="card-title">Subtotal</h5>
                     <h6 className="card-subtitle mb-2 text-muted">({test.cartBudge()} Item/s)</h6>
                     <p className="card-text">${test.subTotal()}</p>
                     <Link to="/https://www.mercadopago.com.ar/paid?code=V1C70X&utm_source=google&utm_medium=cpc&utm_campaign=MLA_MP_G_AO_ALL_BRD_SEARCH_MP_EXACT&matt_tool=28766038&matt_word=MLA_MP_BRD_EXACT&gclid=CjwKCAjw3K2XBhAzEiwAmmgrAsKueC5auc2ud4yWLXO2Dp6_ZJRnZeDacqMSKv1XXCK-W3jSM9L0VRoCt94QAvD_BwE"><button className="btn btn-success btn-sm">Finalizar compra</button></Link>
                   </div>
                   </div>
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
