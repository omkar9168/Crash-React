import React from "react";

const Cards = (props) => {
  return (
    <div>
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1757710436034-f1d7372ec1be?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"
          alt="image"
        />
        <h1>
          {props.user} {props.age}
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>View Profile</button>
      </div>
    </div>
  );
};

export default Cards;
