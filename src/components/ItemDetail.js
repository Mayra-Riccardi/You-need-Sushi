import React, { useState } from "react";
import "../styles/ItemDetails.css";
import ItemCount from "./ItemCount";
import { Link } from 'react-router-dom';






const ItemDetail = ({ item }) => {

  const [itemCount, setItemCount] = useState (0)
  
  const onAdd = (param) => {
    alert(`Has agregado ${param} productos al Carrito. Muchas Gracias`);
    setItemCount(param)
  };


  return (
    <>
    {
      item && item.img
      ?
      <>
      <div className="row">
        <div className="col-md-4">
          <img className="img-detail" src={item.img} alt="Same at value" />
        </div>
        <div className="col-md-6 text-detail cardA">
          <h3>
            {item.name} - {item.brand}
          </h3>
          <h5>{item.package}</h5>
          <hr />
          <h6>{item.price}</h6>
          <br />
          <p>{item.description}</p>
        </div>
      </div>
      
      {
          itemCount === 0
          ?<ItemCount initial={itemCount} stock={5} onAdd={onAdd}/>
          : <Link to="/cart"><button className="btn btn-danger btn-sm boton-finalizar">Finalizar compra</button></Link>
      }
      </>
      
      : <p style={{margin:"30px"}}>Cargando...</p>

    }
    </>

  );
};

export default ItemDetail;
