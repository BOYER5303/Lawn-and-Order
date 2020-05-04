import React, { Component } from 'react'
import axios from 'axios'
import Card from './Card'
import {Link, Redirect} from 'react-router-dom'
import './Dash.css'
//import {SelectDate} from './SelectDate'
import {connect} from 'react-redux'
import {logout} from '../../Redux/reducers/user'

class Dash extends Component {
    constructor(props) {
        super(props)

        this.state = {
            //user: {},
            //category: '',
            user: {},
            products: [],
            newNote: '',
            redirect: false
        }
        this.getProducts = this.getProducts.bind(this)
        //this.deleteProduct = this.deleteProduct.bind(this)
        //this.updateNote = this.updateNote.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
        //this.handleChange = this.handleChange.bind(this)
    } 

    componentDidMount() {
        this.getProducts()
        //this.updateNote()
    }

    getProducts = () => {
        axios.get('/api/products')
        .then(({data}) => {
            this.setState({
                products: data
            })
            console.log(data)
        }).catch(err => console.log('Error getting product', err))
    }
    
    deleteProduct = id => {
        //let product_id = id
        axios.delete(`/api/products/${id}`)
            .then(({data}) => {
                this.setState({
                    products: data
                })
            })
            .catch(error => {
                console.log('error deleting', error)
            })
    }


    handleLogout = () => {
        this.props.logout()
            .then(({data}) => {
                this.setState({
                    user: data,
                    redirect: true
                })
            })
            .catch(error => {
                console.log('error logging out', error)
            })
    }


    render() {
        let {redirect} = this.state
        //let {category, product, img} = this.props

        if (redirect) {
            return <Redirect to='/'/>
        }
    
        const mappedProducts = this.state.products.map(item =>
    
            <Card item={item}
            key={item.product_id}
            product_id= {item.product_id}
            category={item.category}
            product={item.product}
            img={item.img}
            note={item.note}
            getProducts = {this.getProducts}
            deleteProduct = {this.deleteProduct}/>
            // updateNote={this.updateNote}
            // handleChange={this.handleChange}
            
            // <Card
            // key={product.product_id}
            // category={category}
            // product={product}
            // img={img}/>
                )
        return (
            
                    <div className='dash-main'>     
                        <div>
                            <button onClick={this.handleLogout}>logout</button>
                                    <Link to='/form' className='link'><button>add product</button></Link>
                                    <h1>Available products:</h1>
                        </div>
                        <section>
                            {mappedProducts}
                        </section>
                    </div>
                
        )
    
}}

const mapStateToProps = state => {
    let {data: user} = state.user
    return {user}
}

const mapDispatchToProps = {logout}

export default connect(mapStateToProps, mapDispatchToProps)(Dash)