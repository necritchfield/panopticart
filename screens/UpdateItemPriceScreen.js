import { View, Text, StyleSheet, Button } from 'react-native';
import { useEffect, useState } from 'react';
import ScanItem from '../components/ScanItem';
import { GlobalStyles } from '../constants/styles';
import { getItemInfo } from '../util/item-lookup';
import ProductDetails from '../components/ProductDetails';


function UpdateItemPriceScreen({ navigation }) {
    const [product, setProduct] = useState();
    const [scanned, setScanned] = useState(false);

    function handleBarCodeScanned({type, data}) {
        // getItemInfo(data).then((prod) => {
        //     setProduct({
        //         name: prod.name,
        //         brand: prod.brand,
        //         category: prod.category,
        //         imageUrl: prod.imageUrl
        //     });
        //     console.log(prod);
        //     navigation.navigate('Product Details', {
        //         name: prod.name,
        //         brand: prod.brand,
        //         category: prod.category,
        //         imageUrl: prod.imageUrl,
        //         input: false
        //     });
        // });
        navigation.navigate('Product Details', {
            upc: 9780824835927,
            name: 'Remembering The Kanji 1 - 6th Edition By James W Heisig (Paperback)',
            brand: 'Heisig',
            category: "Books",
            imageUrl: 'https://go-upc.s3.amazonaws.com/images/56129967.jpeg',
            input: true
        });
    }

    return (
        <View style={styles.rootContainer}>
            <Text>Logging a price is simple!</Text>
            <Text>1. Tap 'Scan Item'</Text>
            <Text>2. Scan a product barcode</Text>
            <Text>3. Enter the item price, select store</Text>
            <Text>4. And tap log price!</Text>
            <Text>Your price will then be logged in our system and used to calculate best deals!</Text>
            {/* {!scanned && <ScanItem onScan={handleBarCodeScanned} />} title='Scan Item' */}
            <Button title={'Scan item'} onPress={handleBarCodeScanned} />
        </View>
    )
};

export default UpdateItemPriceScreen;

const styles = StyleSheet.create({
    rootContainer: {
        backgroundColor: GlobalStyles.colors.bg,
        alignItems: 'center',
        marginTop: 24
    },
    titleText: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    
})