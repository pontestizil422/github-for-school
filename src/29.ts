import { useState } from "react";

const MyComponent = () => {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <h1>My Component</h1>
      <p>The counter is {count}.</p>
      <button onClick={incrementCounter}>Increment Counter</button>
    </div>
  );
};

export default MyComponent;
