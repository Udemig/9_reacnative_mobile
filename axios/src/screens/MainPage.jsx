import { ActivityIndicator, Alert, FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import api from '../utils/api';

const MainPage = ({ navigation }) => {

    const [products, setProducts] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const getData = async () => {

            api
                .get('/products')
                .then((res) => setProducts(res.data))
                .catch(err => console.error(err))
                .finally(() => setLoading(false))

        }

        getData();

    }, [])

    if (loading) return <View style={styles.container}><ActivityIndicator size='large' /></View>

    return (
        <SafeAreaView>
            <FlatList
                data={products}
                renderItem={({ item, index }) => {

                    console.log(item)

                    return (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('ProductPage', {id: item.id, products, setProducts})}
                            style={styles.card}>
                            <View key={item.id} style={styles.imgBg}>
                                <Image source={{ uri: item?.image }} style={styles.img} resizeMode='contain' />
                            </View>
                            <View style={styles.textContainer}>
                                <Text>{item.title}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </SafeAreaView>
    )
}

export default MainPage

const styles = StyleSheet.create({
    imgBg: {
        height: 100,
        width: 100,
        backgroundColor: "white",
        margin: 5,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "rgba(0,0,0,0.2)"
    },
    img: {
        padding: 10,
        width: "100%",
        height: "100%"
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    card: {
        flexDirection: "row",
        width: "90%",
        margin: "auto",
        borderWidth: 1,
        padding: 5,
        borderRadius: 5,
        marginVertical: 10
    },
    textContainer: {
        flexShrink: 1,
        padding: 5,
        width: "100%",
    }
})