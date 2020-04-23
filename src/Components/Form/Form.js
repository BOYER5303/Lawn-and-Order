import React, { Component } from 'react'
import axios from 'axios'


class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: [],
            category: '',
            product: '',
            img: ''
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
        const {category, product, img} = this.state
        //const index = products.findIndex(product => product.name === selected)
        // sconst {product_id: product} = this.state.employees[index]
        const newProduct = {category, product, img}
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
        // const mappedProducts = this.state.products.map(product => {
        //     return (
        //         <option key={product.product_id}>{product.name}</option>
        //     )
        // })
        return (
            <div className='form-main'>
                <form onSubmit={this.createProduct}>
                    <span>
                        <label>Category: </label>
                        <input 
                            type='text'
                            onChange={this.handleChange}
                            name='category'
                            value={this.state.category}
                            placeholder='Category...'/>
                    </span>
                    <span>
                        <label>Product: </label>
                        <input
                            type='text'
                            onChange={this.handleChange}
                            name='product'
                            value={this.state.product}
                            placeholder='Product...'/>
                    </span>
                    <span>
                        <label>Image: </label>
                        <input 
                            type='text'
                            onChange={this.handleChange}
                            name='img'
                            value={this.state.img}
                            placeholder='Image URL...'/>
                    </span>
                    <button>save</button>
                </form>
            </div>
        )
    }
}

export default Form