import { useState } from "react"

export function Counter(){

  const [counter, setCounter] = useState(0)

  function increment (){
    setCounter(counter +1)
  }

  return(
    <section>
      <h1>{counter}</h1>
      <button onClick={increment}>Incremment</button>
    </section>
  )
}