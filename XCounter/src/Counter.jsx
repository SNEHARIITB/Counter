import {useState} from "react";

const Counter = () =>{

    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count+1);
    }
    const handleDecrement = () => {
        setCount(count-1);
    }

   return(
    <>
    <h1>Counter App</h1>
    <p>Count: {count}</p>
    <button onClick={handleIncrement}>Increment</button>
    <button onClick={handleDecrement}>Decrement</button>
    </>
   ); 
}
export default Counter;