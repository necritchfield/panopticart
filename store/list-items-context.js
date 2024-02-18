import { createContext, useReducer } from 'react';

const SHOPPING_LIST_ITEMS = [
    {
        id: 1,
        list_id: 1,
        product_id: 9780824835927
    },
    {
        id: 2,
        list_id: 1,
        product_id: 2
    },
    {
        id: 3,
        list_id: 1,
        product_id: 3
    },
    {
        id: 4,
        list_id: 2,
        product_id: 1
    },
]

export const ShoppingListItemsContext = createContext({
    listItems: [],
    addListItem: ({list_id, product_id}) => {},
    updateListItem: (id, {list_id, product_id}) => {},
    deleteListItem: (id) => {}
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

function ShoppingListItemsContextProvider({children}) {
    const [listState, dispatch] = useReducer(listReducer, SHOPPING_LIST_ITEMS);

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
    return <ShoppingListItemsContext.Provider value={value}>{children}</ShoppingListItemsContext.Provider>
    
}


export default ShoppingListItemsContextProvider;