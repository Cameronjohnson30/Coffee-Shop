import React from "react";
import PropTypes from 'prop-types'

function ProductDetails(props){
  const { product, onClickingDelete } = props;
  return (
    <React.Fragment>
      <h1>Iventory Details</h1>
      <h2> {product.name}</h2>
      <h2> {product.origin}</h2>
      <h3> {product.price}</h3>
      <h3> {product.roast}</h3>
      <h3> {product.qauntity}</h3>
      <button onClick={() => props.onClickingRestock(product.id) }>Restock</button>
      <button onClick={ props.onClickingEdit }>Update Product</button>
      <button onClick={() => onClickingDelete(product.id)}> Delete Product</button>
      <hr/>
    </React.Fragment>
  );
}

ProductDetails.propTypes = {
  product: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingRestock: PropTypes.func,
}
export default ProductDetails;