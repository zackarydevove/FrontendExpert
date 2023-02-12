import React, { useState } from 'react';

export default function TipCalculator() {
  const [bill, setBill] = useState(50);
  const [tip, setTip] = useState(18);
  const [people, setPeople] = useState(1);

  const totalTip = ((bill * tip) / 100).toFixed(2)
  const tipPerPerson = (totalTip / people).toFixed(2)
  
  return (
    <>
      <label>
      Bill
      <input type="number" value={bill} onChange={event => { setBill(parseInt(event.target.value))}}/>
      </label>
      <label>
      Tip Percentage
      <input type="number" value={tip}  onChange={event => { setTip(parseInt(event.target.value))}}/>
      </label>
      <label>
      Number of People
      <input type="number" value={people} onChange={event => { setPeople(parseInt(event.target.value))}}/>
      </label>
      <p>Total Tip: {totalTip > 0 ? `$${totalTip}` : '-'}</p>
      <p>Tip Per Person: {tipPerPerson > 0 ? `$${tipPerPerson}` : '-'}</p>
    </>
  );
}