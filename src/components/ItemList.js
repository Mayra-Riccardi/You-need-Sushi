import React from "react";
import Item from "./Item";
import "../styles/styledComponents.css"
import Spinner from 'react-bootstrap/Spinner';



const ItemList = ({items}) => {
    if (items.length === 0) return <Spinner animation="grow" variant="danger" />
    return (
        <>
        {
            items.map(item => <Item key ={item.id} product={item}/>)
        }
        </>
    )
}

export default ItemList;