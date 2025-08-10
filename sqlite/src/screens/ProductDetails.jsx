import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import { db } from '../db';
import { useFocusEffect } from '@react-navigation/native';
import { getSingleProduct } from '../sqlCommands';

const ProductDetails = ({ route, navigation }) => {

    const { id } = route.params;

    const [product, setProduct] = useState();

    const getProduct = useCallback(() => {
        getSingleProduct(id, setProduct)
    }, [id])


    useFocusEffect(getProduct)


    const handleDelete = () => {
        db.transaction(tx =>
            tx.executeSql(
                'DELETE FROM products WHERE id = ?',
                [id],
                () => {
                    navigation.goBack();
                    Alert.alert('Başarılı', 'Ürün başarıyla silindi.')
                },
                (_, error) => console.log(error)
            )
        )
    }


    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 7, gap: 30 }}>
                <Text style={{ fontSize: 20 }}>
                    {product?.title}
                </Text>
                <Text style={{ fontSize: 20 }}>
                    {product?.price}
                </Text>
            </View>

            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btn}
                    onPress={() => handleDelete()}
                >
                    <Text style={styles.btnText}>SİL</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}
                    onPress={() => navigation.navigate('Update',{id})}
                >
                    <Text style={styles.btnText}>DÜZENLE</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ProductDetails

const styles = StyleSheet.create({
    btnContainer: {
        flexDirection: "row",
        height: 200,
        justifyContent: "center",
        alignItems: "center",
        gap: 40
    },
    btn: {
        backgroundColor: "rgb(100,100,150)",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20
    },
    btnText: {
        color: "white"
    }
})