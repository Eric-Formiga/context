// import { CounterContext } from "../context/CounterContext"

// import { useContext } from "react"

import { useCounterContext } from "../hooks/useCounterContext"

import { useTitleColorContext } from "../hooks/useTitleColorContext"

export const Products = () => {
  const {counter} = useCounterContext()

  // 5 - contex mais complexo
const {color} = useTitleColorContext()
  return (
    <div>       
     <h1 style={{color: color}}>Products</h1>
      <p>Valor do contador: {counter}</p>
      </div>
  )
}
