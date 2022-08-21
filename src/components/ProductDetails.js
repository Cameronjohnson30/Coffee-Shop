import React from "react";
import PropTypes from 'prop-types'

function ProductDetails(props){
  const { product, onClickingDelete, onPurchasingProduct} = props;
  return (
    <React.Fragment>
      <h1>Iventory Details</h1>
      <h2> NAME:{product.name}</h2>
      <h2> ORIGIN:{product.origin}</h2>
      <h3> PRICE:{product.price}$</h3>
      <h3> ROAST:{product.roast}</h3>
      <h1>Availability: {""}
      {product.quantity > 0 ? product.quantity + " lbs" : "Out of Stock"}
      </h1>
      <button onClick={()=> onPurchasingProduct(product.id)}>Purchase</button>
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
  onClickingPurchase: PropTypes.func,
}
export default ProductDetails;