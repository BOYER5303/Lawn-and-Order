import React, { Component } from 'react'
import axios from 'axios'
import './Form.css'


class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: [],
            category: '',
            product: '',
            img: '',
            note: ''
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

    createProduct = e => {
        e.preventDefault()
        const {category, product, img, note} = this.state
        const newProduct = {category, product, img, note}
        axios.post('/api/products', newProduct)
            .then(() => {
                this.props.history.push('/dashboard')
            })
            .catch(error => {
                console.log('error creating Products', error)
            })
    }

    handleChange = e => {
        let {value, name} = e.target
        this.setState({
            [name] : value
        })
    }

    render() {
        return (
            <div className='form-main'>
                <h1>Add a product:</h1>
                <form className="input" onSubmit={this.createProduct}>
                    <span>
                        <label>Category: </label>
                        <input 
                            type='text'
                            onChange={this.handleChange}
                            name='category'
                            value={this.state.category}
                            placeholder='Category...'/>
                    </span>
                    <br/>
                    <span>
                        <label>Product: </label>
                        <input
                            type='text'
                            onChange={this.handleChange}
                            name='product'
                            value={this.state.product}
                            placeholder='Product...'/>
                    </span>
                    <br/>
                    <span>
                        <label>Image: </label>
                        <input 
                            type='text'
                            onChange={this.handleChange}
                            name='img'
                            value={this.state.img}
                            placeholder='Image URL...'/>
                    </span>
                    <br/>
                    <span>
                        <label>Maintenance Notes: </label>
                        <input 
                            type='text'
                            onChange={this.handleChange}
                            name='note'
                            value={this.state.note}
                            placeholder='Maintence Notes....'/>
                    </span>
                    <button className ="button-form">save</button>
                </form>
            </div>
        )
    }
}

export default Form