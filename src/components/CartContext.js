import { createContext, useState } from "react";
import { products } from "../utils/products";

 export const CartContext = createContext();

 const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])
    
    const addToCart = (item, param) => {
        let foundItem = cartList.find(product => product.id === item.id);
        if (foundItem === undefined) {
        
        setCartList([...cartList, {
            id: item.id,
            name: item.name,
            img: item.img,
            brand: item.brand,
            price: item.price,
            cantidad: param
        }])
    } else (foundItem.cantidad += param)
    }

        const removeItem = (id) => {
            let nuevoEstado = cartList.filter(item => item.id != id)
            setCartList(nuevoEstado)
        }

        const clearAll = () => {
            setCartList([]);
        }
        
        
    
    return (
        <CartContext.Provider value={{cartList, addToCart, removeItem, clearAll}}>
            {children}
        </CartContext.Provider>
    )
 }
 
 export default CartContextProvider;