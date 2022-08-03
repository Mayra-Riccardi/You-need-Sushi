import React from "react";
import Item from "./Item";
import "../styles/styledComponents.css"


const ItemList = ({items}) => {
    if (items.length === 0) return <p className="texto-c">Cargando...</p>
    return (
        <>
        {
            items.map(item => <Item key ={item.id} product={item}/>)
        }
        </>
    )
}

export default ItemList;