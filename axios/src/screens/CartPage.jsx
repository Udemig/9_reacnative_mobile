import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import api from '../utils/api'

const CartPage = () => {

    const [ids, setIDs] = useState([]);
    const [cart,setCart] = useState([]);

    useEffect(() => {

        const getIDs = async () => {
            api
                .get('/carts')
                .then(res => {
                    setIDs(res.data[4].products.map((item) => item.productId))
                    console.log(ids)
                })
                .catch(err => console.log(err))
        }

        getIDs();
    }, [])

    useEffect(() => {
        // MAP gibi fonksiyonlar senkron işlemlerde direkt olarak çalışmazlar, bunun için Promise.all kullanmamız gerekir
        const getAllItems = async () => {
            if (ids.length > 0) {
                try {
                    // bu bizim istekler dizimiz olacak
                    const requests = ids?.map((id) => api.get(`/products/${id}`))

                    // bu dizinin içindeki bütün elemanların çözümlenmesi için Promise.all kullanmamız lazım
                    const responses = await Promise.all(requests);

                    // üstteki bütün promisler cevaplandığında
                    // bunları maple

                    const data = responses.map((res) => res.data);

                    setCart(data)

                }
                catch (err) {
                    console.error(err)
                }
            }
        }

        getAllItems();
    }, [ids])

    return (
        <View>
            <FlatList
                data={cart}
                renderItem={({ item, index }) => (
                    <View>
                        <Image source={{ uri: item?.image }} style={{ height: 100 }} />
                    </View>
                )}
            />
        </View>
    )
}

export default CartPage

const styles = StyleSheet.create({})