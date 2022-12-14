import React from 'react';
import NewProductForm from './NewProductForm';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import EditProductForm from './EditProductForm'

class StoreControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainProductList: [],
      selectedProduct: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedProduct != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedProduct: null,
        editing: false
      });
    } else {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage,
    }));
    }
  }

  handleChangingSelectedProduct = (id) => {
    const selectedProduct = this.state.mainProductList.filter((product) => product.id === id)[0];
    this.setState({selectedProduct: selectedProduct});
  }

  handleAddingNewProductToList = (newProduct) => {
    const newMainProductList = this.state.mainProductList.concat(newProduct);
    this.setState({
      mainProductList: newMainProductList,
      formVisibleOnPage: false
    });
  }
  handleDeletingProduct = (id) => {
    const newMainProductList = this.state.mainProductList.filter((product) => product.id !== id);
    this.setState({
      mainProductList: newMainProductList,
      selectedProduct: null,
    });
  };

  handleEditClick = () => {
    this.setState({ editing: true });
  };

  handleEditingProductInList = (productToEdit) => {
    const editedMainProductList = this.state.mainProductList.filter((product) => product.id !== this.state.selectedProduct.id).concat(productToEdit);
    this.setState({
      mainProductList: editedMainProductList,
      editing: false,
      selectedProduct: null
    });
  }
  handlePurchasingProduct = (id) => {
    const selectedProduct = this.state.mainProductList.filter((product) => product.id === id)[0]; selectedProduct.quantity -= 1;
    const editedMainProductList = this.state.mainProductList.filter((product) => product.id !== id).concat(selectedProduct);
    this.setState({
      mainProductList: editedMainProductList,
      editing: false,
    });
  };

  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 
    if (this.state.editing) {
      currentlyVisibleState = 
        <EditProductForm
          product = {this.state.selectedProduct} 
          onEditProduct = {this.handleEditingProductInList} />
          buttonText = "Return to Product List";
    } else if (this.state.selectedProduct != null) {
      currentlyVisibleState = 
        <ProductDetails 
          product = {this.state.selectedProduct} 
          onClickingDelete={this.handleDeletingProduct} 
          onClickingEdit={this.handleEditClick}
          onPurchasingProduct ={this.handlePurchasingProduct} />
          buttonText = "Return to Product List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = 
        <NewProductForm 
          onNewProductCreation={this.handleAddingNewProductToList} />
          buttonText = "Return to Product List";
    } else {
      currentlyVisibleState = 
        <ProductList 
          productList={this.state.mainProductList} 
          onProductSelection={this.handleChangingSelectedProduct} />
          buttonText='Add Product';
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default StoreControl;