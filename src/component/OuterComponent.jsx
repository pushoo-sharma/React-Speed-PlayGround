import React, { useState, useEffect } from 'react';
import InnerComponent from './InnerComponent';

// Outer component
const OuterComponent = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <h1>Outer Component</h1>
      <p>Count: {count}</p>
      <button className="button" onClick={incrementCount}>Increment Count</button>
      <InnerComponent />
    </div>
  );
};

export default OuterComponent;
