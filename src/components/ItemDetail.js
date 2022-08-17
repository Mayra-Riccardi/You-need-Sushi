import React, { useState, useContext } from "react";
import "../styles/ItemDetails.css";
import ItemCount from "./ItemCount";
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import Spinner from 'react-bootstrap/Spinner';
import Swal from "sweetalert2";

const ItemDetail = ({ item }) => {

  const [itemCount, setItemCount] = useState (0)
  const test = useContext(CartContext)

  
  const onAdd = (param) => {
    agregarProductos();
    setItemCount(param)
    test.addToCart(item, param);
  };

  const agregarProductos = () =>{
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'success',
      title: 'Productos agregados al carrito'
    })

  }

  return (
    <>
    {
      item && item.img
      ?
      <>
      <div className="row">
        <div className="col-md-4 border border-white">
          <img className="img-detail" src={item.img} alt="Same at value" />
        </div>
        <div className="col-md-6 text-detail cardA">
          <h3 className="producto-titulo">
            {item.name} - {item.brand}
          </h3>
          <hr />
          <h6 className="producto-detalles">Precio ${item.price}</h6>
          <h6 className="producto-detalles">{item.package}</h6>
          <h6 className="producto-detalles">Stock {item.stock} unidades.</h6>
          <br />
          <p className="producto-p">{item.description}</p>
        </div>
      </div>
      
      {
          itemCount === 0
          ?<ItemCount initial={itemCount} stock={item.stock} onAdd={onAdd}/>
          : <Link to="/cart"><button className="btn btn-danger btn-sm boton-finalizar">Finalizar compra</button></Link>
      }
      </>
      
      : <Spinner animation="border" variant="warning" />

    }
    </>

  );
};

export default ItemDetail;
