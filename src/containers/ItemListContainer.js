import '../styles/styledComponents.css';
import React from 'react';
import ItemCount from '../components/ItemCount';


const ItemListContainer = ({greeting}) => {
    const onAdd = (param) => {
        alert(`Has agregado ${param} productos al Carrito. Muchas Gracias`)
    }

    return(
      <>
        <p className ="Wrapper">{greeting}</p>
        <hr/>
        <ItemCount initial={1} stock={5} onAdd={onAdd}/>
      </>
    );
}

export default ItemListContainer;