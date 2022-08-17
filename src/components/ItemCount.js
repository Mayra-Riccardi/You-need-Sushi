import React, { useState } from "react";
import '../styles/styledComponents.css';
import '../styles/ItemDetails.css';
import Swal from "sweetalert2";



const ItemCount = ({initial, stock, onAdd}) => {

    const [counter, setCounter] = useState(initial)

    const Sumar = () => {
        if (counter < stock){
            setCounter(counter+1)
        } else{
          sinStock()
        }
    }

    const Restar = () => {
        if (counter > initial){
            setCounter(counter-1)
        } else {
          countEnCero()
        }
    }

    const sinStock = () =>{
      Swal.fire({
        icon: 'error',
        title: 'Uy...',
        text: 'No contamos con mas Stock para este producto!',
      })
    }

    const countEnCero = () =>{
      Swal.fire({
        icon: 'error',
        title: 'Uy...',
        text: "No hay productos para eliminar.",
      })
    }


  return (
    <>
{
  counter && stock 
    ?<div className="counter-card Wrapper">
        <button className="boton1 btn btn-danger" onClick={Restar}>-</button>
        <p className="counter-p">{counter}</p>
        <button className="boton2 btn btn-danger" onClick={Sumar}>+</button>
        <button className="btn btn-danger btn-sm btn-agregar" onClick={() => onAdd(counter)}>Agregar al Carrito</button>
    </div>
    : <div className="counter-card Wrapper">
    <button className="boton1 btn btn-danger" onClick={Restar}>-</button>
    <p className="counter-p">{counter}</p>
    <button className="boton2 btn btn-danger" onClick={Sumar}>+</button>
    <button className="btn btn-secondary btn-sm disabled btn-agregar" onClick={() => onAdd(counter)}>Agregar al Carrito</button>
    </div>
}
    </>
  );
};

export default ItemCount;
