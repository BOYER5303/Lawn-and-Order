
import SelectDate from './SelectDate'
import React, {Component} from 'react'
import './Dash.css'
import axios from 'axios'

class Card extends Component {
   //const {product_id, category, product, img, note} =  props.item
   //const {newNote} = props.note
  // const {note} = props.comment
    constructor(props){
        super(props)

        this.state = {
            newNote: '',

        }
    }
    componentDidMount() {
        axios.get('/api/products')
            .then(({data}) => {
                this.setState({
                    products: data
                })
            })
            .catch(error => {
                console.log('Error getting products', error)
            })
    }

    updateNote(event, id) {
        event.preventDefault()
        const {note} = this.state
        //const newNote = {note}
        
        axios.put(`/api/products/${id}`, {note})
        .then(() => this.props.getProducts())
        .catch(error => {
            console.log('Note update error', error)
        })
     }
 
     handleChange = event => {
         let {value, name} = event.target
         this.setState({
             [name] : value
         })
     }
    
 
render(){
    const {product_id, category, product, img, note} = this.props
    return (
        
                <div className='card'>
                    <h2>{category}</h2>
                    <p>{product}</p>
                    <img src={img} alt="Unavailable." height='200' width='200' />
                    
                    <SelectDate/>
                    
    
                    <h1>Maintenance Notes</h1>
                    <p>{note}</p>
                    <div className="note-group">
                        <label htmlFor="notes">Notes:</label>
                        <textarea className="note-control" 
                        rows="5"
                        value={this.state.note}
                        name='note'
                        onChange={this.handleChange} />
                        <button onClick={(event) => this.updateNote(event, product_id)}>Update Note</button>
                        <button onClick={() => this.props.deleteProduct(product_id)}>delete</button>
                    </div>
                    
                    
                </div>
        
    )
}
}
export default Card

