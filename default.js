import { productData } from "./constants/data.js";
import Product from "./model/product-schema.js";


const DefaultData = async() =>{
    try {
        await Product.insertMany(productData);
        console.log('Data import successfully');
    } catch (error) {
        console.log('Error while inserting default data', error.message);
    }
}

export default DefaultData;