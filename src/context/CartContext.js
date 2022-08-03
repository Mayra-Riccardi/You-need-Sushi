import { createContext, useState } from "react";

 export const CartContext = createContext();

 const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])
    
    const addToCart = (item, cantidad, total) => {
        let foundItem = cartList.find(product => product.id === item.id);
       
        if (foundItem === undefined) {
        
        setCartList([...cartList, {
            id: item.id,
            name: item.name,
            img: item.img,
            brand: item.brand,
            price: item.price,
            cantidad: cantidad
        }])
          } else {foundItem.cantidad += cantidad}
            
        }

        const removeItem = (id) => {
            let nuevoEstado = cartList.filter(item => item.id !== id)
            setCartList(nuevoEstado)
        }

        const clearAll = () => {
            setCartList([]);
        }

        const notificacionCarrito = () => {
            let cantidadBadge = cartList.map(item => item.cantidad);
            return cantidadBadge.reduce(((previusValue, currentValue) => previusValue + currentValue), 0) 
        }

        const finalPrice = () => { 
            const compraTotal = cartList.reduce((acc, item) => (acc + item.cantidad * item.price), 0)        
            return compraTotal;    
        }
    
    return (
        <CartContext.Provider value={{cartList, addToCart, removeItem, clearAll, notificacionCarrito, finalPrice}}>
            {children}
        </CartContext.Provider>
    )
 }
 
 export default CartContextProvider;

