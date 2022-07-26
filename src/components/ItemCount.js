import React, { useState } from "react";
import '../styles/styledComponents.css';


const ItemCount = ({initial, stock, onAdd}) => {

    const [counter, setCounter] = useState(initial)

    const Sumar = () => {
        if (counter < stock){
            setCounter(counter+1)
        } else{
          alert("Solo puedes agregar un máximo de 5 unidades.")
        }
    }

    const Restar = () => {
        if (counter > initial){
            setCounter(counter-1)
        } else {
          alert("No hay mas productos para eliminar.")
        }
    }

  return (
    <>
{
  counter && stock 
    ?<div className="counter-card Wrapper">
        <button className="boton1 btn btn-light" onClick={Restar}>-</button>
        <p className="counter-p">{counter}</p>
        <button className="boton2 btn btn-light" onClick={Sumar}>+</button>
        <button className="btn btn-primary btn-sm btn-agregar" onClick={() => onAdd(counter)}>Agregar al Carrito</button>
    </div>
    : <div className="counter-card Wrapper">
    <button className="boton1 btn btn-light" onClick={Restar}>-</button>
    <p className="counter-p">{counter}</p>
    <button className="boton2 btn btn-light" onClick={Sumar}>+</button>
    <button className="btn btn-secondary btn-sm disabled btn-agregar" onClick={() => onAdd(counter)}>Agregar al Carrito</button>
    </div>
}
    </>
  );
};

export default ItemCount;
