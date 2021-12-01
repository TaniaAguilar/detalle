import React, { useEffect } from "react";
import imagen1 from '../src/assets/img/imagen1.jpeg';
import imagen2 from '../src/assets/img/imagen2.jpeg';
import imagen3 from '../src/assets/img/imagen3.jpeg';
import imagen4 from '../src/assets/img/imagen4.jpeg';
import ItemCount from "./components/ItemCount";
import ItemList from "./components/ItemList";
import "./App.css";

export default function ItemListContainer() {
  const [product, setProduct] = useState([]);
  
  const productosComp =[
    {id: '01', title: "Naturaleza", price: 850, url: imagen1},
    {id: '02', title: "Tierra", price: 750, url: imagen2},
    {id: '03', title: "Mar", price: 950, url: imagen3},
    {id: '04', title: "Aire", price: 750, url: imagen4}
  ];

  const promise = new Promise((resultado) => {
    setTimeout(() => resultado(productosComp), 2000)
  })

  useEffect ( ()  => {
    promise.then(product => setProduct(product))
 }, [] )



return (
    <ul className='ItemListContainer'>
      <ItemList products={ product } />
      <ItemCount key={ 'agregarAlCarrito'} text= 'Agregar al carrito'/>
    </ul>
)
}


