import image from '../../public/img/breakingbadquotes.png';
import { useState, useEffect } from 'react';
const BreakingBadQuotes = () => {

    const [quote, setQuote] = useState('');

    useEffect(() => {
        const fetchQuote = async() => {
            //way 1

            fetch('https://api.breakingbadquotes.xyz/v1/quotes')
            .then(res => res.json())
            .then(data => {
                //if(Array.isArray(data) && data.length > 0) {
                    setQuote(data[0].quote);
                //}
            })

            //way 2
            /* try {
                const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
                const data = await res.json();

                if(Array.isArray(data) && data.length > 0) {
                    setQuote(data[0].quote);
                }
            } catch (error) {
                console.log('Error fetching quote', error);
            } */
        };
        fetchQuote();
    }, []);


    return (
        <div>
            <h1 style={{fontSize: '2.5rem'}}>Breaking Bad Quotes</h1>
            <p>{quote}</p>
            <img src={image} alt="breaking bad quotes" />
        </div>
    )
}

export default BreakingBadQuotes