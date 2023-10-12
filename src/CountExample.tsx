import "./CountExample.css"
import {useState} from "react";

// Boiler Plate = immer der gleiche Code
export default function CountExample() {

    // counter = state name = counter, golfTracker
    // set + name = setCounter , setGolfTracker
    const [counter, setCounter]
        = useState(0)

    // FUNKTIONEIRT NICHT IN REACT (zum verändern)
    // const = unveränderbar
    // let = darf sich verändern
    // let counter = 0;

    function incrementCounter() {
        // FUNKTIONEIRT NICHT IN REACT
        // console.log("counter vorher; " + counter)
        // counter++
        // console.log("counter nachher; " + counter)

        const newCounter = counter + 1
        setCounter(newCounter)
    }

    return (
        <>
            <button onClick={incrementCounter}>
             counter:  {counter}
            </button>
        </>
    )
}