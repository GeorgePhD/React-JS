import '../styles/itemlist.css'
import PropTypes from 'prop-types';


const ItemList = ({ products }) => {

    //mapping products
    return (
        <>
        <h2>ItemList brought from a map()</h2>
        <div className='grid-container'>
            {products.map((product) => (
                <div className='grid-products' key={product.name}>
                    <h3>{product.name}</h3>
                    <p>${product.price}</p>
                    <p>{product.description}</p>
                </div>
            ))}
        </div>
        </>
    );
};


ItemList.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            // Add any other properties your product object might have
        })
    ).isRequired,
};




export default ItemList