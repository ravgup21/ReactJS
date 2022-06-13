import React, { useState } from 'react'



console.log('render')
const BUTTON = () => {

    const [ count, setCount ] = useState(0)

  return (
    <div>
        <button class="btn btn-outline-primary" onClick={() => setCount((c) => c + 1)}>+</button>
        <button class="btn btn-success">Cart Items - {count}</button>
        <button class="btn btn-outline-danger" onClick={() => setCount((c) => c - 1)}>-</button>
    </div>
  )
}

export default BUTTON