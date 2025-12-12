import React, { useEffect, useState } from "react";

const TImer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    // Mounted
    console.log("Adding new interval");
    const timer = setTimeout(() => setTime(time + 1), 1000);
    return function () {
      console.log("clear old interval")
      clearInterval(timer);
    };
  }, [time]);
  return (
    <div>
      <h1>StopWatch</h1>
      <p>Current Time is : {time}</p>
    </div>
  );
};

export default TImer;
