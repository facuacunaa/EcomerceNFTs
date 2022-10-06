import { useState } from "react";

const Counter = () => {
    const initial = 0 
    let [Stock , setCount ] = useState(initial)


const decrement = () => {
    
        setCount(Stock -1)
    
}
const increment = () => {
    if (Stock < 10){
    setCount (Stock + 1)
    }
}



return (
    <div>
       <h1>{Stock}</h1>
       <button onClick={decrement}> - </button>
       <button onClick={increment}> + </button>
       <button >agregar al carrito</button>
    </div>
)
}

export default Counter