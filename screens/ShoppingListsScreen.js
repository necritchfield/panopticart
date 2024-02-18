import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native';
import { useLayoutEffect, useContext } from 'react';
import { GlobalStyles } from '../constants/styles';
import { Ionicons } from '@expo/vector-icons';

import { ShoppingListContext } from '../store/list-context';

function ShoppingListsScreen({navigation}) {
    const listCtx = useContext(ShoppingListContext);
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                <Pressable style={({pressed}) => pressed && styles.pressed} onPress={listPressHandler}>
                    <Ionicons name="add-outline" color="white" size={24} />
                </Pressable>
                )
            }
        })
    }, [navigation]);

    function listPressHandler(itemId) {
        navigation.navigate("ManageShoppingList", {
            itemId: itemId
        })
    }

    function renderList(itemData) {
        return (
            <Pressable style={({pressed}) => pressed && styles.pressed} onPress={listPressHandler.bind(this, itemData.item.id)}>
                <View style={styles.listItemContainer}>
                    <Text>{itemData.item.list_name}</Text>
                    <Text>{itemData.item.num_entries}</Text>
                    <Text>{itemData.item.last_updated}</Text>
                </View>
            </Pressable>
        );
    }

    return (
        <View style={styles.rootContainer}>
            <FlatList data={listCtx.lists} renderItem={renderList} keyExtractor={(item) => item.id} />
        </View>
    )
};

export default ShoppingListsScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: GlobalStyles.colors.bg
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: GlobalStyles.colors.secondary
    },
    listItemContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'space-between',
        justifyContent: 'space-between',
        padding: 16,
        backgroundColor: GlobalStyles.colors.secondary,
    },
    pressed: {
        opacity: 0.7
    }
})