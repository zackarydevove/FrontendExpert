import React from 'react';

export default function TipCalculator() {

  const [bill, setBill] = useState(50);
  const [tip, setTip] = useState(18);
  const [num, setNum] = useState(1);

  const totalTip = (bill * tip) / 100
  const tipPerPerson = totalTip / num

  const handleBill = event => {
    const value = event.target.value
    setBill(value)
  }

  const handleTip = event => {
    const value = event.target.value
    setTip(value)
  }

  const handlePeople = event => {
    const value = event.target.value
    setNum(value)
  }

  return (
    <>
      <label>
      Bill
      <input type='number' value={bill} onChange={handleBill} />
      </label>
      <label>
      Tip Percentage
      <input type='number' value={tip} onChange={handleTip} />
      </label>
      <label>
      Number of People
      <input type='number' value={num} onChange={handlePeople} />
      </label>
      <p>Total Tip: ${totaltip}</p>
      <p>Tip Per Person: ${tipPerPerson}</p>
    </>
  );
}