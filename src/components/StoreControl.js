import React from 'react';
import NewProductForm from './NewProductForm';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';

class StoreControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainProductList: [],
      selectedProduct: null,
      editing: false
    };
    this.handleClick = this.handleClick.bind(this); 
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
    const selectedProduct = this.state.mainProductList.filter(product => product.id === id)[0];
    this.setState({selectedProduct: selectedProduct});
  }

  handleAddingNewProductToList = (newProduct) => {
    const newMainProductList = this.state.mainProductList.concat(newProduct);
    this.setState({
      mainProductList: newMainProductList,
      formVisibleOnPage: false
    });
  }
  
  handleRestockClick = (id) => {
    const selectedItem = this.state.mainProductList.filter((product) => product.id === id)[0]
    selectedItem.quantity += 130;
    const editedMainInventoryList = this.state.mainProductList.filter(
      (product) => product.id !== id) 
      .concat(selectedItem);

    this.setState({
      mainProductList: editedMainInventoryList,
      editing: false,
      selectedProduct: null,
    })
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 
    if (this.state.selectedProduct != null) {
      currentlyVisibleState = <ProductDetails product = {this.state.selectedProduct} />
      buttonText = "Return to Product List";
      
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewProductForm onNewProductCreation={this.handleAddingNewProductToList}  />;
      buttonText = "Return to Product List";
    } else {
      currentlyVisibleState = <ProductList productList={this.state.mainProductList} onProductSelection={this.handleChangingSelectedProduct} />;
      buttonText = "Add Product";
    }  return (
    <React.Fragment>
      {currentlyVisibleState}
      <br />
      <button onClick={this.handleClick}>{buttonText}</button>
    </React.Fragment>
  );
  }
}

export default StoreControl;