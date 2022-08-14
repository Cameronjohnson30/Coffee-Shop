import React from 'react';
import NewProductForm from './NewProductForm';
import InventoryList from './InventoryList';
import InventoryDetails from './InventoryDetails';

class StoreControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainInventoryList: []
    };
    this.handleClick = this.handleClick.bind(this); 
  }

  handleChangingSelectedProduct = (id) => {
    const selectedProduct = this.state.mainInventoryList.filter(product => product.id === id)[0];
    this.setState({selectedProduct: selectedProduct});
  }

  handleAddingNewProductToList = (newProduct) => {
    const newMainInventoryList = this.state.mainInventoryList.concat(newProduct);
    this.setState({
      mainProductList: newMainInventoryList,
      formVisibleOnPage: false
    });
  }
  
  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }
  handleRestockClick = (id) => {
    const selectedItem = this.state.mainInventoryList.filter((product) => product.id === id)[0]
    selectedItem.quantity += 130;
    const editedMainInventoryList = this.state.mainInventoryList.filter(
      (product) => product.id !== id) 
      .concat(selectedItem);

    this.setState({
      mainInventoryList: editedMainInventoryList,
      editing: false,
      selectedProduct: null,
    })
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 

    if (this.state.selectedTicket != null) {
      currentlyVisibleState = <InventoryDetails product = {this.state.selectedProduct} />
      buttonText = "Return to Product List";
      
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewProductForm onNewProductCreation={this.handleAddingNewProductToList}  />;
      buttonText = "Return to Product List";
    } else {
      currentlyVisibleState = <InventoryList inventoryList={this.state.mainInventoryList} onProductSelection={this.handleChangingSelectedProduct} />;
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