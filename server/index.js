// ABSOLUTE IMPORTS
const express = require('express');

// RELATIVE IMPORTS
const getProducts = require('./getProducts');
const getProduct = require('./getProduct');

// SERVER CODE
const app = express();
const port = 3001;

// ENDPOINTS - Always requires a method, path, and handler (cb function). req = request, res = response
app.get('/api/products', getProducts);

app.get('/api/product/:id', getProduct);

// SERVER LISTEN - Always requires a port and a cb function. req = request, res = response
app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});
