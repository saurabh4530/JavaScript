// Import axios using ES6 import statement
import axios from 'axios';

// Use axios to make an HTTP GET request
axios.get('https://fakestoreapi.com/products')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error('An error occurred:', error);
    });