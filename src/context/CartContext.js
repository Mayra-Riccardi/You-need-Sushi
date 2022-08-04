import { createContext, useState } from "react";

 export const CartContext = createContext();

 const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])
    
    const addToCart = (item, cantidad) => {
        let foundItem = cartList.find(product => product.id === item.id);
       
        if (foundItem === undefined) {
        
        setCartList([...cartList, {
            id: item.id,
            name: item.name,
            img: item.img,
            brand: item.brand,
            price: item.price,
            cantidad: cantidad,
        }])
          } else {foundItem.cantidad += cantidad}
            
        }

        const removeItem = (id) => {
            let newState = cartList.filter(item => item.id !== id)
            setCartList(newState)
        }

        const clearAll = () => {
            setCartList([]);
        }

        const cartBudge = () => {
            let cantidadBadge = cartList.map(item => item.cantidad);
            return cantidadBadge.reduce(((previusValue, currentValue) => previusValue + currentValue), 0) 
        }

        const subTotal = () => { 
            const compraTotal = cartList.reduce((acc, item) => (acc + item.price * item.cantidad), 0)      
            return compraTotal;    
        }
    
    return (
        <CartContext.Provider value={{cartList, addToCart, removeItem, clearAll, cartBudge,subTotal}}>
            {children}
        </CartContext.Provider>
    )
 }
 
 export default CartContextProvider;

