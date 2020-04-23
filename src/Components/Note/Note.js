import React, { Component } from 'react'
import axios from 'axios'


class Note extends Component {
    constructor(props) {
        super(props)

        this.state = {
            notes: [],
        }
    }

    componentDidMount() {
        axios.get('/api/notes')
            .then(({data}) => {
                this.setState({
                    notes: data
                })
            })
            .catch(error => {
                console.log('Error getting note', error)
            })
    }

    createNote = e => {
        e.preventDefault()
        const {product_id, note} = this.state
        //const index = products.findIndex(product => product.name === selected)
        // sconst {product_id: product} = this.state.employees[index]
        const newNote = {product_id, note}
        axios.post('/api/notes', newNote)
            .then(() => {
                this.props.history.push('/dashboard')
            })
            .catch(error => {
                console.log('error creating note', error)
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
                <form onSubmit={this.createNote}>
                    <span>
                        <label>Note: </label>
                        <input 
                            type='text'
                            onChange={this.handleChange}
                            name='category'
                            value={this.state.note}
                            placeholder='Add note...'/>
                    </span>
                    <button>save</button>
                </form>
            </div>
        )
    }
}

export default Note