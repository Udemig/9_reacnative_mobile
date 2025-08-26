import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import api from '../utils/api'
import { useDispatch } from 'react-redux'
import { createProductThunk } from '../redux/slices/productSlice'

const CartPage = ({navigation}) => {

    useEffect(() => {
    }, [])

    // useEffect(() => {
    //     // MAP gibi fonksiyonlar senkron işlemlerde direkt olarak çalışmazlar, bunun için Promise.all kullanmamız gerekir
    //     const getAllItems = async () => {
    //         if (ids.length > 0) {
    //             try {
    //                 // bu bizim istekler dizimiz olacak
    //                 const requests = ids?.map((id) => api.get(`/products/${id}`))

    //                 // bu dizinin içindeki bütün elemanların çözümlenmesi için Promise.all kullanmamız lazım
    //                 const responses = await Promise.all(requests);

    //                 // üstteki bütün promisler cevaplandığında
    //                 // bunları maple

    //                 const data = responses.map((res) => res.data);

    //                 setCart(data)

    //             }
    //             catch (err) {
    //                 console.error(err)
    //             }
    //         }
    //     }

    //     getAllItems();
    // }, [ids])

    const dispatch = useDispatch();

    const handleSubmit = async () => {

        dispatch(createProductThunk({
            name,
            price,
            imageUrl: "https://picsum.photos/200",
            description: "yeni bir ürün"
        }))

        navigation.goBack();

    }

    const [name, setName] = useState();
    const [price, setPrice] = useState();


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

export default CartPage

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