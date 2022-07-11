import React, { useState } from "react";
import '../styles/styledComponents.css';

const ItemCount = ({initial, stock, onAdd}) => {

    const [counter, setCounter] = useState(initial)

    const Sumar = () => {
        if (counter < stock){
            const aux = counter+1
            setCounter(aux)
        } else{
          alert("No hay mas stock")
        }
    }

    const Restar = () => {
        if (counter > initial){
            const aux = counter-1
            setCounter(aux)
        }
    }

  return (
    <div className="card Wrapper shadow-sm p-3 mb-5 bg-body rounded">
      <div className="counter">
        <button className="boton1 btn btn-primary" onClick={Restar}>-</button>
        <p>{counter}</p>
        <button className="boton2 btn btn-primary" onClick={Sumar}>+</button>
      </div>
        <button className="btn btn-outline-success" onClick={onAdd}>Agregar al Carrito</button>
    </div>
  );
};

export default ItemCount;
