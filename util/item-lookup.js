import axios from 'axios';

const API_KEY = '79bfe399a5fc48a1a6a196bfe748f1b47379a17f7836a8e479a6054cf4fb2c2e';
const PRODUCT_API_URL = 'https://go-upc.com/api/v1/code/'

export async function getItemInfo(upc) {
    try {
        const response = await axios.get(PRODUCT_API_URL + `${upc}?key=${API_KEY}&format=true`);
        return response.data.product;
        // const prod = {
        //     name: 'no',
        //     brand: 'no',
        //     category: 'no',
        //     imageUrl: 'nope'
        // };
        // return prod;
    }
    catch {(error) => {
        console.log(error);
        const errprod = {
            name: 'no',
            brand: 'no',
            category: 'no',
            imageUrl: 'nope'
        }
        return errprod;
    }}
    
};