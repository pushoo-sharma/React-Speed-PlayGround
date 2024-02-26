import React, { useState, useEffect, lazy, Suspense } from 'react';

// Lazy load InnerComponent
const LazyInnerComponent = lazy(() => import('./InnerComponent'));

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
      <Suspense fallback={<div>Loading...</div>}>
        <LazyInnerComponent />
      </Suspense>
    </div>
  );
};

export default OuterComponent;
