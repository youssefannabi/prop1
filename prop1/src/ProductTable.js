import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import{table} from 'react-bootstrap'


function ProductTable  (props){
  return  (
    <div >
      <table>
      <thead>
      <tr >
        <td>name </td>
        <td> price </td>
        <td>category </td>
      </tr>
     </thead>

     <tbody> {props.produits.map((produit)=> 
     
     <tr>
     <td>{produit.name}</td>
     <td>{produit.price}</td>
     <td>{produit.category}</td>
     </tr>
     )}

  </tbody>
  </table>
  </div>

 
  
   ) } 

   ProductTable.propTypes = {
    products: PropTypes.array
  };
  

export default ProductTable;
