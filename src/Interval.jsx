import React, { useState, useEffect } from "react";

const Interval = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <div className="counter">
      <div className="text">{seconds} seconds have elapsed</div>
    </div>
  );
};

export default Interval;
