import React, { useState } from 'react';
const SumComponent = () => {
  const [number, setNumber] = useState(1);
  const [counter, setCounter] = useState(0);
  const calculateSum = (n) => {
    console.log('Calculating sum...');
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  };
  const sum = calculateSum(number);
  return (
    <div>
      <h1>Sum from 1 to {number}: {sum}</h1>
      <button onClick={() => setNumber(number + 1)}>Increment Number</button>
      <button onClick={() => setCounter(counter + 1)}>Increment Counter</button>
      <p>Counter: {counter}</p>
    </div>
  );
};
export default SumComponent;