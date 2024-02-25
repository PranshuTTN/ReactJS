import { useState } from 'react';


function Product(params) {
    const [itemName, setItemName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [productList, setProductList] = useState([]);

    const newItem = (e) => {
        e.preventDefault();
        const product = {
            itemName : itemName,
            price : price,
            description : description
        };
        setProductList(prevList => [...prevList,product]);
        setItemName('');
        setPrice('');
        setDescription('');
    }

    const removeItem = (index) => {
        setProductList(prevList => {
            const newList = [...prevList];
            newList.splice(index, 1);
            return newList;
        });
    }

    return (
        <>
            <form action="">
                <label htmlFor="itemName">Item Name</label>
                <input type="text" name="itemName" value={itemName}
                onChange={(e) => setItemName(e.target.value)}/>
                <br />
                <label htmlFor="price">Item Name</label>
                <input type="text" name="price" value={price} 
                onChange={(e) => setPrice(e.target.value)}/>
                <br />
                <label htmlFor="description">Item Name</label>
                <input type="text" name="description" value={description} 
                onChange={(e) => setDescription(e.target.value)}/>
                <br />
                <button type="submit" onClick={newItem}>Add Product</button>
            </form>
            <h3>Item List</h3>
            <ul>
                {productList.map((item,index) => (
                    <div key={index}>
                        <li><p>Item Name: </p>{item.itemName}
                        <br />
                        <p>Price: </p>{item.price}
                        <br />
                        <p>Description: </p>{item.description}
                        </li>
                        <button onClick={() => removeItem(index)}>Remove</button>
                        <br /><br />
                    </div>
                ))}
            </ul>
        </>
    );
}

export default Product;