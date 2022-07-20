import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from '../components/ItemDetail'
import { products } from '../utils/products';

const ItemDetailContainer = () => {
    const [ItemData, setItemData] = useState ({});
    const { id } = useParams();

    useEffect(() => {
      if (id === undefined){
        const myPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(products[id]);
            }, 2000);
          });
          
          myPromise.then(res => {
            setItemData(res)
          }) 
        }   
    },[]);
    
    console.log(ItemData)
    return (
            <ItemDetail item={ItemData}/>
    )
}

export default ItemDetailContainer;