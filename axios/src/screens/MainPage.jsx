import { ActivityIndicator, FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import api from '../utils/api';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/slices/productSlice';
import ProductCard from '../components/ProductCard';

const MainPage = ({ navigation }) => {

    // HAFIZADAN(REDUX STORE) VERİ ÇEKMEK İÇİN USESELECTOR

    const { products, loading, error } = useSelector(state => state.product);


    // HAFIZADAKİ VERİYİ GÜNCELLEMEK İÇİN İSE DISPATCH



    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(getProducts())

    }, [])

    // tekrardan istek atma fonksiyonu
    const refetch = async () => dispatch(getProducts())


    if (error) {
        return (
            <View style={styles.container}>
                <Text style={{ color: "red", fontSize: 20 }}>{error.message}</Text>
                <TouchableOpacity onPress={refetch} >
                    <Text>Tekrar Dene</Text>
                </TouchableOpacity>
            </View >
        )
    }
    if (loading) {
        return <View style={styles.container}><ActivityIndicator size='large' /></View>
    }

    return (
        <SafeAreaView>
            <FlatList
                data={products}
                ListEmptyComponent={() => (<View><Text>Hiç ürün bulunamadı.</Text></View>)}
                renderItem={({ item, index }) => <ProductCard item={item}/> }
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
        width: "100",
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