import React from "react";
import Item from "./Item";

const ItemList = ({items}) => {
    if (items.length === 0) return <p>Cargando...</p>
    return (
        <>
        {
            items.map(item => <Item key ={item.id} product={item}/>)
        }
        </>
    )
}

export default ItemList;