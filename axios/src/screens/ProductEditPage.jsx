import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { updateProduct } from '../redux/slices/productSlice';

const ProductEditPage = ({ route, navigation }) => {

    const {product} = route.params;

    const [name, setName] = useState(product.name);
    const [price, setPrice] = useState(String(product.price));

    const dispatch = useDispatch();

    const handleSubmit = async () => {

        dispatch(updateProduct({
            id: product.id,
            name,
            price
        }))

        navigation.goBack();

    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 9 }}>
                <View>
                    <Text style={styles.label}>Ürün İsmi</Text>
                    <TextInput value={name} onChangeText={setName} style={styles.input} />
                </View>
                <View>
                    <Text style={styles.label}>Ürün Fiyatı</Text>
                    <TextInput value={price} onChangeText={setPrice} style={styles.input} />
                </View>
            </View>

            <View style={{ flex: 1 }}>
                <TouchableOpacity style={styles.btn}
                    onPress={handleSubmit}
                >
                    <Text>Yayınla</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default ProductEditPage

const styles = StyleSheet.create({
    input: {
        borderWidth: 2,
        width: "80%",
        marginHorizontal: "auto",
        marginVertical: 30,
        padding: 10,
        borderRadius: 20,
        backgroundColor: "white",
        borderColor: "rgba(0,0,0,0.12)",
        outlineWidth: 2,
        outlineOffset: 1,
        outlineColor: "rgba(0,0,0,0.3)"
    },
    label: {
        textAlign: "center",
        marginTop: 20
    },
    btn: {
        backgroundColor: "rgb(130,230,250)",
        margin: "auto",
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 10
    }
})