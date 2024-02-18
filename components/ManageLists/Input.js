import { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { GlobalStyles } from '../../constants/styles';
import { fetchStores, postItem } from '../../util/backend-calls';

function Input({ upc }) {
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState();
    const [value, setValue] = useState(null);
    const [price, setPrice] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const [storesList, setStoresList] = useState([]);

    useEffect(() => {
        async function getStores() {
            setIsFetching(true);
            try {
                const stores = await fetchStores();
                setStoresList(stores);
            }
            catch (error) {
                setError('Could not fetch stores');
            }
        };
        getStores();
    }, []);

    function onChangePriceHandler(enteredValue) {
        setPrice(enteredValue);
    }

    function submitHandler() {
        const data = {
            price: parseInt(price),
            is_on_sale: 0,
            price_update_date: new Date().toISOString(),
            store: parseInt(value),
            product_upc: parseInt(upc),
            update_user: 1
        }
        postItem(data).then(response => console.log(response));
        //console.log(data);
    };

    return (
        <View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Price:</Text>
                <TextInput keyboardType='decimal-pad' style={styles.inputBox} onChangeText={onChangePriceHandler} />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Store:</Text>
                <Dropdown 
                    style={styles.dropdown}
                    data={storesList}
                    labelField='store_name'
                    valueField='id'
                    placeholder={!isFocus ? 'Select store' : '...'}
                    searchField='search'
                    onChange={(item) => {
                        setValue(item.id);
                        setIsFocus(false);
                    }}
                    onChangeText={() => {}}
                />
            </View>
            <View style={styles.inputContainer}>
                <Button title="Submit" onPress={submitHandler} />
            </View>
        </View>
    )
}

export default Input;

const styles = StyleSheet.create({
    inputContainer: {
        width: 200,
        marginHorizontal: 4,
        marginVertical: 8,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    label: {
        textAlign: 'center'
    },
    inputBox: {
        padding: 6,
        borderRadius: 6,
        fontSize: 18,
        backgroundColor: 'white',
        borderWidth: 1,
        maxWidth: 150,
        flex: 1
    },
    dropdown: {
        maxWidth: 150,
        height: 50,
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        flex: 1
    }
})