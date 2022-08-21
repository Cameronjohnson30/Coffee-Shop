import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from './ReusableForm';

function NewProductForm(props){

function handleNewProductFormSubmission(event) {
  event.preventDefault();
  props.onNewProductCreation({
    name: event.target.name.value, 
    origin: event.target.origin.value, 
    price: parseInt(event.target.price.value), 
    roast: event.target.roast.value,
    quantity: parseInt(130),
    id: v4()
  });
}

  return (
    <React.Fragment>
      <ReusableForm
      formSubmissionHandler={handleNewProductFormSubmission}
      buttonText="Add Coffee Bag" />
    </React.Fragment>
  );
}

NewProductForm.propTypes = {
  onNewProductCreation: PropTypes.func
};


export default NewProductForm;