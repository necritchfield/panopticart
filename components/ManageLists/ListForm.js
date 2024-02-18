import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

function ListForm({ onSubmit }) {
    const [listName, setListName] = useState('');
    
    function inputChangedHandler(enteredName) {
        setListName(enteredName);
    };


    function submitHandler() {
        const listData = {
            list_name: listName,
            last_updated: new Date(Date.now()).toString(),
            num_entries: 0
        }
        onSubmit(listData);
    }

    return (
        <View style={styles.form}>
            <Text>Your Shopping List</Text>
            <View style={styles.inputsRow}>
                <Text>List Name</Text>
                <TextInput style={styles.rowInput} onChangeText={inputChangedHandler} />
            </View>
            <Button title="Submit" onPress={submitHandler}/>
        </View>
    );
}

export default ListForm;

const styles = StyleSheet.create({
    form: {
        marginTop: 40,
        backgroundColor: GlobalStyles.colors.bg,
    },
    inputsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowInput: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 6
    },
});