import { useState } from 'react'
import './App.css'

function Hello() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="container">
        <h1>Hello MRCET</h1>
        <p>Thank you for visiting MRCET</p>
        <button>start</button>
        {/* <p>Visitor count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increase Count</button> */}
      </div>
    </>
  )
}

export default Hello;