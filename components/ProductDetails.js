import { View, ScrollView, Text, Image, StyleSheet, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { GlobalStyles } from '../constants/styles';
import Input from './ManageLists/Input';

function ProductDetails({ route }) {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.productContainer}>
                <Text style={styles.name}>{route.params.name}</Text>
                <Text style={styles.category}>{route.params.category}</Text>
                <Text style={styles.brand}>{route.params.brand}</Text>
                <Image style={styles.image} source={{uri: route.params.imageUrl}} />
                {route.params.input && <Input upc={route.params.upc} />}
            </View>
        </TouchableWithoutFeedback>
    )
}

export default ProductDetails;

const styles = StyleSheet.create({
    productContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: GlobalStyles.colors.bg
    },
    image: {
        width: 200,
        height: 300
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    category: {
        fontSize: 14
    },
    brand: {
        fontSize: 14
    }
})