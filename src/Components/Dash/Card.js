import {deleteProduct} from './Dash';
import SelectDate from './SelectDate'
import React from 'react'

const Card = ({item, deleteProduct}) => {
   const {category, product, img, product_id} =  item

    return (
        <div>
            
                <div className='card'>
                    <h2>{category}</h2>
                    <p>{product}</p>
                    <img src={img} alt="Unavailable." height='200' width='200' />
                    <SelectDate/>
                    <button onClick={() => deleteProduct(product_id)}>delete</button>
                </div>
        </div>
    )
}

export default Card

