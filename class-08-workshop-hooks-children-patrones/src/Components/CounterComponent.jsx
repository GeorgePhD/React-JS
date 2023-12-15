import useCounter from "../hooks/useCounter.jsx";



const CounterComponent = () => {

    
    const {counter, addition, subtraction} = useCounter(0, 1)


    return (
        <> {/* counter would be the child */}
        <h2>Counter : {counter}</h2>
        <button onClick={addition}>+</button>
        <button onClick={subtraction}>-</button>
        </>
    )
}

export default CounterComponent