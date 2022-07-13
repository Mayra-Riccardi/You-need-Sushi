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
    <div className="counter-card Wrapper shadow-sm p-3 mb-5 rounded">
      <div className="counter">
        <button className="boton1 btn btn-primary" onClick={Restar}>-</button>
        <p>{counter}</p>
        <button className="boton2 btn btn-primary" onClick={Sumar}>+</button>
      </div>
        <button className="btn btn-outline-success" onClick={() => onAdd(counter)}>Agregar al Carrito</button>
    </div>
  );
};

export default ItemCount;
