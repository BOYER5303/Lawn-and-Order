module.exports = {
    getNotes: async (req, res) => {
        
        try {
            
            const db = req.app.get('db')
            // if (req.session.user){
            //     //const {product_id}= req.session.user
            const allNotes = await db.products.get_notes()
            res.status(200).send(allNotes)
            // }
        } catch (error) {
            console.log('Error getting notes.', error)
            res.status(500).send(error)
        }
    },

    createNote: async (req, res) => {
        try {
            const db = req.app.get('db')
            const {product_id, note} = req.body
            const newNote = await db.products.create_note([product_id, note])
            res.status(200).send(newNote)
        } catch (error) {
            console.log('Note creation error.', error)
            res.status(500).send(error)
        }
    },

    deleteNote: async (req, res) => {
        try {
            const db = req.app.get('db')
            const {id} = req.params
        
            const products = await db.products.delete_note(id) 
            res.status(200).send(products)
        } catch (error) {
            console.log('Note deletion error.', error)
            res.status(500).send(error)
        }
    }
    // updateNote: async (req, res, next) => {
    //     try {
    //         const db = req.app.get('db')
    //         const {id} = req.params
    //     }
    // }
}