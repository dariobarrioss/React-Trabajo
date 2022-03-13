import React, {useState} from 'react'



const ItemContador = ({stock, initial}) => {


const [contador, agregarContador] = useState(initial)
const agregarProducto = () => {
        if (contador < stock){
            agregarContador(contador + 1)
        }
    }

    const quitarProducto = () =>{
        if(contador > 0){
            agregarContador(contador - 1)
        }
    }

  return (
    <div>
        <button className='botones' onClick={quitarProducto}>-</button>
        <span>{contador}</span>
        <button className='botones' onClick={agregarProducto}>+</button>
    </div>
  )
}

export default ItemContador