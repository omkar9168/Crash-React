import React from "react";

class CarClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: this.props.brand,
      color: "Black",
    };
  }

  render() {
    return (
      <div>
        <h2>Class Component</h2>
        <p>Car brand : {this.state.brand}</p>
        <p>Color : {this.state.color}</p>
      </div>
    );
  }
}

export default CarClass;
