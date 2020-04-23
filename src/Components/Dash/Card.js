//import {deleteProduct} from './Dash';
import Note from '../Note/Note'
import SelectDate from './SelectDate'
import React from 'react'
import './Dash.css'

const Card = (props) => {
   const {category, product, img, note} =  props.item
  // const {note} = props.comment

    return (
        <div>
                <div className='card'>
                    <h2>{category}</h2>
                    <p>{product}</p>
                    <img src={img} alt="Unavailable." height='200' width='200' />
                    <SelectDate/>
    
                    {/* <h1>Notes</h1>
                    <p>{note}</p>
                    <div className="note-group">
                        <label htmlFor="notes">Notes:</label>
                        <textarea className="note-control" rows="5" />
                        <button onClick={() => props.deleteNote(product_id)}>delete</button>
                    </div> */}
                    
                    
                </div>
        </div>
    )
}

export default Card

