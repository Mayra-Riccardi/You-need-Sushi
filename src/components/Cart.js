import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Table from 'react-bootstrap/Table';
import '../styles/styledComponents.css'
import { collection, serverTimestamp, setDoc, doc, updateDoc, increment } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig"


const Cart = () => {
    const test = useContext(CartContext)
    console.log(test.cartList)

    const createOrder = () => {
        let itemsForFirebase = test.cartList.map(item => ({
            id: item.id,
            title: item.name,
            price: item.price,
            qty: item.cantidad
        }))
        let order = {
            buyer: {
                email: "may@gmail.com",
                name: "Mayra Riccardi",
                phone: "12345678"
            },
            date: serverTimestamp(),
            items: itemsForFirebase,
            total: test.totalPrice()
        }
        console.log(order)

      const createOrdeFirestore = async () => {  
        const orderRef = doc(collection(db, "orders"))
        await setDoc(orderRef,order)
        return orderRef
      }

      createOrdeFirestore()
      .then(result => 
        alert("Tu Orden fue creada exitosamente bajo el ID " + result.id))

      test.cartList.forEach(async (item) => {
        console.log(test.cartList + "hola")
        const itemRef = doc(db, "products", item.id)
        await updateDoc(itemRef, {
            stock: increment(-item.cantidad)
        })
      })


    //vaciar el carrito post concretar compra
    test.clearAll();

    
}

    return (
        <>

        {
            (test.cartList.length > 0 )
            ? 
            <>
            <button className="btn btn-danger btn-sm btn-borrar btn-vaciarCarrito" onClick={test.clearAll}>Vaciar Carrito</button>
            {test.cartList.map (item => 
            <Table table bordered hover variant="dark">
            <tbody>
              <tr className="tr">
                <td className="td-img"><img className="img-carrito"src={item.img} alt=""/></td>
                <td className="td-texto" style={{paddingTop:50}}>{item.name}</td>
                <td className="td-texto" style={{paddingTop:50}}>{item.brand}</td>
                <td className="td-texto" style={{paddingTop:50}}>{item.cantidad} items</td>
                <td className="td-texto" style={{paddingTop:50}}>${item.price} c/u</td>
                <td><button className="btn btn-sm btn-trash"onClick={() => test.removeItem(item.id)}>🗑 </button></td>
              </tr>
            </tbody>
          </Table>
        )
      }     
                   <div className="card card-total" >
                     <div className="card-body">
                     <h5 className="card-title">Subtotal</h5>
                     <h6 className="card-subtitle mb-2 text-muted">({test.cartBudge()} Item/s)</h6>
                     <p className="card-text">${test.totalPrice()}</p>
                     <button className="btn btn-success btn-sm" onClick={createOrder}>Finalizar compra</button>
                   </div>
                   </div>
            </>
            :
            <>
            <h3 className="carrito-vacio-compra">Tu carrito está vacio</h3>        
            <Link to="/"><button className="btn btn-danger btn-sm btn-borrar btn-comprar">Ir a comprar</button></Link>
            </> 
}
        </>   
    );
}
export default Cart;
