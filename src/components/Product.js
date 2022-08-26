import React from "react";
import PropTypes from "prop-types";

function Product(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenProductClicked(props.id)}>
      <h3>{props.name}</h3>
        <h3>{props.origin}</h3>
        <h3>{props.price}</h3>
        <h3>{props.roast}</h3>
        <h3>{props.quantity}</h3>
      </div>
    </React.Fragment>
  );
}

Product.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  price: PropTypes.number,
  roast: PropTypes.string,
  id: PropTypes.string,
  quantity: PropTypes.number, 
  whenProductClicked: PropTypes.func 
};

export default Product;