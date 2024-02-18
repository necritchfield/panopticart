import { useState, useEffect } from 'react';
import { Text, StyleSheet, Button, Dimensions } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

function ScanItem({onScan, title}) {
    const [hasPermission, setHasPermission] = useState(null);
    //const [scanned, setScanned] = useState(false);
    const [showScanner, setShowScanner] = useState(false);
    //const [product, setProduct] = useState();

    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
        };

        getBarCodeScannerPermissions();
    }, [showScanner]);

/*     const handleBarCodeScanned = ({ type, data }) => {
        getItemInfo(data).then((product) => {
            setProduct({
                name: product.name,
                brand: product.brand,
                category: product.category,
                imageUrl: product.imageUrl
            });
            setScanned(true);
            setShowScanner(false);
        })
    }; */

    function openScannerHandler() {
        setShowScanner(true);
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <>
            {showScanner && 
            <BarCodeScanner
                onBarCodeScanned={onScan} style={[StyleSheet.absoluteFill, styles.scanner]}
            />}
            <Button title={title} onPress={openScannerHandler} />
        </>
    );
};

export default ScanItem;

const styles = StyleSheet.create({
    container: {
        
    },
    scanner: {
        flex: 1,
        alignItems: 'center',
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height
    }
})