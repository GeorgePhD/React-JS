import { useState } from "react";



const UseCounter = (inicialValue = 0, paso = 1) => {

    const [counter, setCounter] = useState(inicialValue)
    const addition = () => {
        setCounter((prevCount) => prevCount + paso);
        
    }
    const subtraction = () => {
        if(counter > 0) {
            setCounter((prevCount) => prevCount - paso);
        }
    }


    return {
        counter,
        addition,
        subtraction
    }
}

export default UseCounter