import axios from "axios";

export default {
    // get product with id
    getItem: function(id) {
        return axios.get('/api/items' + id)
    },
    // get all the items
    getAllItems: function() {
        return axios.get('/api/items')
    },
    // delete item by id
    deleteItem: function(id) {
        return axios.delete('/api/preorder/' + id)
    },
    // adds an item to database
    addItem: function(item) {
        return axios.post('/api/preorder', item)
    },
    // fetching items in preOrder collection only
    getPreOrderItems: function(){
        return axios.get('/api/preorder')
    }
}