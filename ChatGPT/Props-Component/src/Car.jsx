import React, { useState } from "react";

function Car(props) {
  const [brand, setBrand] = useState(props.brand);
  return (
    <>
      <h2>Functional Components</h2>
      <p>
        Car Brand : {brand} {setBrand}
      </p>
    </>
  );
}

export default Car;
