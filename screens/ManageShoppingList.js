import { useContext } from 'react';
import { View, Text, FlatList, Image, StyleSheet, Button } from "react-native";

import ListForm from '../components/ManageLists/ListForm';
import ListProductDetails from '../components/ManageLists/ListProductDetails';
import ScanItem from '../components/ScanItem';

import { ShoppingListContext } from '../store/list-context';
import { ShoppingListItemsContext } from '../store/list-items-context';

import { Ionicons } from '@expo/vector-icons';

function ManageShoppingList({ navigation, route }) {
    const listCtx = useContext(ShoppingListContext);
    const listItemsCtx = useContext(ShoppingListItemsContext);

    const item = {
        upc: 9780824835927,
        name: 'Remembering The Kanji 1',
        brand: 'Heisig',
        category: "Books",
        imageUrl: 'https://go-upc.s3.amazonaws.com/images/56129967.jpeg',
        input: true
    };

    function confirmHandler(listData) {
        listCtx.addList(listData);
        navigation.goBack();
    };

    function renderListItems(itemData) {
        return (
            <View style={styles.container}>
                <Image source={{uri: item.imageUrl}} style={styles.image} />
                <Text style={styles.name}>{item.name}</Text>
                <Ionicons name='trash' size={24} color='red' />
            </View>
        )
    }

    return (
        <>
            <View style={styles.rootContainer}>
                <Text style={styles.listName}>Your List</Text>
            </View>
            <View>
                <FlatList data={listItemsCtx.lists} renderItem={renderListItems} keyExtractor={(item) => item.id} />
                <ScanItem title='Add Item' />
                <Button title='Fetch Best Price' color='green' />
                <Button title='Delete List' color='red' />
            </View>
        </>
    )
};

export default ManageShoppingList;

const styles = StyleSheet.create({
    rootContainer: {
        alignItems: 'center'
    },
    container: {
        flexDirection: 'row',
        margin: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    name: {
        fontWeight: 'bold',
        fontSize: 14
    },
    image: {
        width: 80,
        height: 80
    },
    listName: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 12
    }
})