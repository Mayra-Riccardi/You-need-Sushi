import React, { useState } from "react";
import '../styles/styledComponents.css';

const ItemCount = ({initial, stock, onAdd}) => {

    const [counter, setCounter] = useState(initial)

    const Sumar = () => {
        if (counter < stock){
            let cantidad = counter+1
            setCounter(cantidad)
        } else{
          alert("Solo puedes agregar un máximo de 5 unidades.")
        }
    }

    const Restar = () => {
        if (counter > initial){
            let cantidad = counter-1
            setCounter(cantidad)
        } else {
          alert("No hay mas productos para eliminar.")
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
