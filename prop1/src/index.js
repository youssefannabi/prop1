import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProductTable from './ProductTable';
import * as serviceWorker from './serviceWorker';


const product1 = { name : "spadri" , price: "50 DT", category: "clothes" }
const product2 = { name : "telifoun" , price: "550 DT", category: "electronics" }


const products = [product1, product2]



ReactDOM.render(
  <React.StrictMode>
    <ProductTable  produits = {products}  />
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
