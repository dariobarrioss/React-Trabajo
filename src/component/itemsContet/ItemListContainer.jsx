import React from 'react'
import ItemList from './ItemList'

const ItemListContainer = ({persona}) => {
  return (
    <div className='divContainer'> 
       
       <h2>{persona}</h2>
       <ItemList/>
    </div>
  )
}

export default ItemListContainer