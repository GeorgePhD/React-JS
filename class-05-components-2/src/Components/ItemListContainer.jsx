import ItemList from "./ItemList"

const ItemListContainer = () => {

    const products = [
        {name: 'zapatillas', price: 100, description: 'item description'},
        {name: 'helado', price: 200, description: 'item description'},
        {name: 'ampolleta', price: 300, description: 'item description'},
        {name: 'poleron', price: 400, description: 'item description'},
        {name: 'buzo', price: 500, description: 'item description'},
        {name: 'pantalon', price: 600, description: 'item description'},
        {name: 'camisa', price: 700, description: 'item description'},
        {name: 'remera', price: 800, description: 'item description'},
        {name : 'sudadera', price: 900, description: 'item description'},
        {name: 'helado', price: 1000, description: 'item description'},
        {name: 'ampolleta', price: 1100, description: 'item description'},
        {name: 'poleron', price: 1200, description: 'item description'}
    ]

    return (
        <div>
            <h2>ItemListContainer</h2>
            <p>this is the container component</p>
            <ItemList 
            //Props 
            products={products}/>
        </div>
    )
}

export default ItemListContainer