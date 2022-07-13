import React, {useState} from 'react';
import '../styles/styledComponents.css';
import ItemCount from '../components/ItemCount';
import { products } from '../utils/products';
import ItemList from '../components/ItemList';

const ItemListContainer = ({greeting}) => {

    const [productsList, setProductsList] = useState([])
    const onAdd = (param) => {
        alert(`Has agregado ${param} productos al Carrito. Muchas Gracias`)
    }

    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });
    
    myPromise.then(res => {
      setProductsList(res)
    }) 
      

    return(
      <>
        <p className ="Wrapper">{greeting}</p>
        <hr/>
        <ItemCount initial={1} stock={5} onAdd={onAdd}/>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-3 g-4">
        <ItemList items={productsList}/>
        </div>
        </div>
      </>
    );
}

export default ItemListContainer;