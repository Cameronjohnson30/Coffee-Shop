import React from "react";
import coffee from "./../img/coffee.webp"
function Header(){
  return (
    <React.Fragment>
      <h1>Product list</h1>
      <img src={coffee} alt="coffee cup" />
    </React.Fragment>
  );
}

export default Header;