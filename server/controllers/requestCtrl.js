module.exports = {
    getRequests: async (req, res) => {
        
        try {
            
            const db = req.app.get('db')
            // if (req.session.user){
            //     //const {product_id}= req.session.user
            const allRequests = await db.requests.get_requests()
            res.status(200).send(allRequests)
            // }
        } catch (error) {
            console.log('Server error getting requests.', error)
            res.status(500).send(error)
        }
    },

    createRequest: async (req, res) => {
        try {
            const db = req.app.get('db')
            const {user_id, product_id, request_start, request_end} = req.body
            const newRequest = await db.products.create_product([user_id, product_id, request_start, request_end])
            res.status(200).send(newRequest)
        } catch (error) {
            console.log('Server error creating request.', error)
            res.status(500).send(error)
        }
    }
}