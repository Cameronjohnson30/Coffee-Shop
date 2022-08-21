import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
      <input
          type='text'
          name='name'
          placeholder='name' />
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
        <button type='submit'>Submit</button>
      </form>
    </React.Fragment>
  )
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;