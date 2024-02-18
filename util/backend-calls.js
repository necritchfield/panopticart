import axios from 'axios';

const BACKEND_URL = 'https://shoppingapp-d56022f156a4.herokuapp.com/api/v1/';

export async function fetchLists() {

};

export async function fetchStores() {
    const response = await axios.get(BACKEND_URL + `stores`);
    return response.data;
};

export async function postItem(item) {
    const response = await axios.post(BACKEND_URL + `items/create`, item);
    return response;
}