import React from "react";
import Product from "./Product";
import PropTypes from "prop-types";



function ProductList(props){
  return (
    <React.Fragment>
      {props.productList.map((product) =>
        <Product
          whenProductClicked = { props.onProductSelection }
          name={product.name}
          origin={product.origin}
          price={product.price}
          roast= {product.roast}
          quantity= {product.quantity}
          id={product.id}
          key={product.id}/>
      )}
    </React.Fragment>
  );
}

ProductList.propTypes = {
  ProductList: PropTypes.array,
  onProductSelection: PropTypes.func
};

export default ProductList;