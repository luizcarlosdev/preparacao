"use client";

import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  const [percentage, setPercentage] = useState(0);

  function calculatePercentage() {
    if (count !== 0) {
      const percentageCalculate = inputValue * count / 100;
      console.log("Porcentagem calculada: "+percentageCalculate);
      setPercentage(percentageCalculate);
    }
  }

  function buttonValue(element: any) {
    setCount(Number(element.value));
  }

  function input(element: any) {
    setInputValue(Number(element.value));
  }

  return (
    <>
      <div className="display">{percentage}</div>
      <div className="btn_group">
        <button className="btn" value={5} onClick={(event) => { buttonValue(event.target) }}>5%</button>
        <button className="btn" value={10} onClick={(event) => { buttonValue(event.target) }}>10%</button>
        <button className="btn" value={25} onClick={(event) => { buttonValue(event.target) }}>25%</button>
        <button className="btn" value={50} onClick={(event) => { buttonValue(event.target) }}>50%</button>
      </div>
      <div className="submit">
        <input type="number" onChange={(event) => input(event.target)} />
        <button onClick={calculatePercentage}>Calcular porcentagem</button>
      </div>
    </>
  );
}
