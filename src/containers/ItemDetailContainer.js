import React, { useEffect, useState } from "react";
import ItemDetail from '../components/ItemDetail'
import { products } from '../utils/products';

const ItemDetailContainer = () => {
    const [ItemData, setItemData] = useState ({});

    useEffect(() => {
        const myPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(products[0]);
            }, 2000);
          });
          
          myPromise.then(res => {
            setItemData(res)
          }) 
    },[]);
    
    console.log(ItemData)
    return (
         
            <ItemDetail items={ItemData}/>
            
    )
}

export default ItemDetailContainer;