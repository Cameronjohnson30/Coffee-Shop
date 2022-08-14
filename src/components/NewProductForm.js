import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewProductForm(props){
  return (
    <React.Fragment>
      <form onSubmit={handleNewProductFormSubmission}>
        <input
          type='text'
          name='names'
          placeholder='Pair Names' />
        <input
          type='text'
          name='origin'
          placeholder='origin' />
        <input
          type='text'
          name='price'
          placeholder='price' />
        <input
          type='text'
          name='roast'
          placeholder='roast' />
        <button type='submit'>Add Product</button>
      </form>
    </React.Fragment>
  );
  function handleNewProductFormSubmission(event) {
  event.preventDefault();
  props.onNewProductCreation({
    names: event.target.names.value, 
    origin: event.target.origin.value, 
    price: event.target.price.value, 
    roast: event.target.roast.value,
    id: v4()
  });
}
}
NewProductForm.propTypes = {
  onNewProductCreation: PropTypes.func
};


export default NewProductForm;