"use client";

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button className='btn btn-primary' onClick={handleClick}>
      クリックした回数: {count}
    </button>
  );
}