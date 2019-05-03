
const products = require('../products.json');

const getProduct = (req, res) => {
    const idInt = parseInt(req.params.id);

    const item = products.find(val => val.id === idInt);
    
    if (!item) {
        return res.status(500).send('Item not in list');
    }
    res.status(200).send(item);
};

module.exports = getProduct;
