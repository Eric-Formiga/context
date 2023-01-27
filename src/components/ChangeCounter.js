// 3 - alterando contexto

import { useContext,} from "react";
import { CounterContext } from "../context/CounterContext";

import React from 'react'

export default function ChangeCounter() {

    const { counter, setCounter } = useContext(CounterContext)


    return (
        <div>
            <button onClick={() => setCounter(counter + 1)} > Add value to counter</button> <br />
            <button onClick={() => setCounter(counter - 1 )} > Decrise value to counter</button> <br />
            <button onClick={() => setCounter(5)} > reset</button>
        </div>
    )
}
