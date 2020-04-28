module.exports = {
    getProducts: async (req, res) => {
        
        
        try {
            
            
            const db = req.app.get('db')
            // if (req.session.user){
            //     //const {product_id}= req.session.user
            const allProducts = await db.products.get_products()
            res.status(200).send(allProducts)
            // }
        } catch (error) {
            console.log('Error getting products.', error)
            res.status(500).send(error)
        }
    },

    createProduct: async (req, res) => {
        try {
            const db = req.app.get('db')
            const {category, product, img, note} = req.body
            const newProduct = await db.products.create_product([category, product, img, note])
            res.status(200).send(newProduct)
        } catch (error) {
            console.log('Product creation error.', error)
            res.status(500).send(error)
        }
    },

    deleteProduct: async (req, res) => {
        try {
            const db = req.app.get('db')
            const {id} = req.params
        
            const products = await db.products.delete_product(id) 
            res.status(200).send(products)
        } catch (error) {
            console.log('Product deletion error.', error)
            res.status(500).send(error)
        }
    },
    updateNote: async (req, res) => {
        //try {
            const db = req.app.get('db')
            const {id} = req.params
            const {note} = req.body
            const noteContents = await db.products.update_note( [note, id])
            res.status(200).send(noteContents)
       // } catch (error){
            // console.log('Note change error')
            // res.status(500).send(error)
      //  }
    }
}