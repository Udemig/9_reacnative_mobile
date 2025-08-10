import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native';
import { getSingleProduct } from '../sqlCommands';
import { db } from '../db';

const UpdateProduct = ({ route, navigation }) => {

    const { id } = route.params;

    const [product, setProduct] = useState();

    const [title, setTitle] = useState();
    const [price, setPrice] = useState();

    const getProduct = useCallback(() => {
        getSingleProduct(id, setProduct)
    }, [id])
    
    useFocusEffect(getProduct)



    const handleUpdate = () => {

        db.transaction(tx=>

            tx.executeSql(
                'UPDATE products SET title = ?, price = ? WHERE id = ?',
                [title,price,id],
                ()=>{
                    console.log('Ürün güncellendi.')
                    navigation.goBack();
                },
                (_,error)=>{
                    console.log("Hata oluştu", error)
                    Alert.alert('Hata oluştu.',"Bilinmeyen hata.")
                }
            )
        )
    }

    return (
        <>
            <View style={{ flex: 8 }}>
                <Text style={styles.label}>Başlık</Text>
                <TextInput
                    style={styles.input}
                    value={title}
                    defaultValue={product?.title}
                    onChangeText={setTitle} />

                <Text style={styles.label}>Fiyat</Text>
                <TextInput
                    style={styles.input}
                    value={price}
                    defaultValue={String(product?.price)}
                    onChangeText={setPrice} />


            </View>

            <View style={{ flex: 2 }}>
                <TouchableOpacity
                    style={{ margin: 'auto', padding: 10, backgroundColor: "red" }}
                    onPress={()=>handleUpdate()}
                >
                    <Text style={{
                        color: "white",
                        fontSize: 20
                    }}>Güncelle</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default UpdateProduct

const styles = StyleSheet.create({
    label: {
        marginHorizontal: 30,
        marginTop: 30,
        fontSize: 20
    },
    input: {
        backgroundColor: "white",
        marginHorizontal: 30,
        marginVertical: 10,
        borderWidth: 2,
        borderColor: 'rgba(0,0,0,0.1)',
        padding: 10,
        borderRadius: 10,
        fontSize: 16
    }
})