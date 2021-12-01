import React from "react";
import Item from './Item';

export default function ItemList({products}) {
    return (
        <li className='products'>
            {
                products.map(product => <Item key={ product.id} id={ product.id } title={ product.title} price={'$'+ product.price} url={ product.url} text='descripción del producto' />)
            }
        </li>
    )
}