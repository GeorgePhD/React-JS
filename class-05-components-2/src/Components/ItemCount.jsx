import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import '../styles/itemcount.css';
const ItemCount = () => {

    const  [counter, setCounter] = useState(0);
    const addition = () => {
        setCounter(counter+1)
        console.log('+1')
    }
    const subtraction = () => {
        if(counter > 0) {
            setCounter(counter-1)
        console.log('-1')
        }
        
    }
    const addedToCart = () => {
        
        console.log('added to cart')
    }
    return (
        <div>
            <Button variant="primary" onClick={addition}>+</Button>{' '}
            <span>{counter}</span>{' '}
            <Button variant="primary" onClick={subtraction}>-</Button>{' '}
            <Button variant="primary" onClick={addedToCart}>add it!</Button>{' '}
        </div>
    )
}

export default ItemCount