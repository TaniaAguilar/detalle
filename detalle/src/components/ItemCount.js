import React, {useState } from 'react'

export default function ItemCount({ text, number}) {

const[count, setCont] = useState(1);
const stock = 5;

function incremento() {
    if (stock > count) {
        setCont(count + 1)

    } else {
        alert ('Selecciona un menor número de pieza, ya que el stock es limitado')
    }
}
function decremento() {
    if(count >1) {
        setCont(count -1)

    } else {
        alert('Elige un artículo')
    }
}

return (
    <button>Agregar al carrito</button>
)}
