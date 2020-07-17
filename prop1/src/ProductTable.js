import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import{Table} from 'react-bootstrap'


function ProductTable  (props){
  return  (
    <div >
      <Table style={{
marginTop:'250px'
      }} >
      <thead style={{
        backgroundColor:"grey"
      }}>
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
  </Table>
  </div>

 
  
   ) } 

   ProductTable.propTypes = {
    products: PropTypes.array
  };
  

export default ProductTable;
