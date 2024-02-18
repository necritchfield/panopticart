import { createContext, useReducer } from 'react';

const SHOPPING_LISTS = [
    {
        id: 1,
        list_name: "list 1",
        last_updated: '2023-12-25',
        num_entries: 4
    },
    {
        id: 2,
        list_name: "list 2",
        last_updated: '2023-12-10',
        num_entries: 3
    }
]

const PRODUCTS = [
    {
        id: 1,
        product_name: 'banana',
        category: 'fruit'
    },
    {
        id: 2,
        product_name: 'apple',
        category: 'fruit'
    },
    {
        id: 3,
        product_name: 'ice cream',
        category: 'dessert'
    },
]

export const ShoppingListContext = createContext({
    lists: [],
    addList: ({list_name, last_updated, num_entries}) => {},
    updateList: (id, {list_name, last_updated, num_entries}) => {},
    deleteList: (id) => {}
});

function listReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            const id = new Date().toString() + Math.random().toString();
            return [{ ...action.payload, id: id }, ...state]
        case 'UPDATE':
            return state;
        case 'DELETE':
            return state.filter((list) => list.id !== action.payload);
        default:
            return state;
    }
}

function ShoppingListContextProvider({children}) {
    const [listState, dispatch] = useReducer(listReducer, SHOPPING_LISTS);

    function addList(listData) {
        dispatch({type: 'ADD', payload: listData});
    }
    function setLists() {}

    function updateList() {}

    function deleteList() {}

    const value = {
        lists: listState,
        addList: addList,
        updateList: updateList,
        deleteList: deleteList
    }
    return <ShoppingListContext.Provider value={value}>{children}</ShoppingListContext.Provider>
    
}

export default ShoppingListContextProvider;