import React from "react";

const ItemDetail = ({items}) => {
    return (
    <>
        <h3>{items.name} - {items.brand}</h3>
        <p>{items.price}</p>
        <div><img src={items.img} alt="Same at value" /></div>
    </>
    )
}

export default ItemDetail;