import { FlatList, View, Text } from "react-native";


function ListProductDetails({ itemId }) {
    function renderProductDetails() {}

    return (
        <View>
            {/* <FlatList data={} renderItem={renderProductDetails} keyExtractor={item => item.id} /> */}
            <Text>{itemId}</Text>
        </View> 
    )
}

export default ListProductDetails;