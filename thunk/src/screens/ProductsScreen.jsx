import { Alert, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { fetchProducts } from '../redux/slices/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const ProductsScreen = () => {


    const navigation = useNavigation();

    const dispatch = useDispatch();

    const { items, favorites, isLoading, error } = useSelector(state => state.products)

    useEffect(() => {

        // store'da belirlenen bir eylemi çalıştırmak için kesinlikle dispatch kullanmak zorundayız

        dispatch(fetchProducts())

    }, [])


    return (
        <View
            style={{ flex: 1, padding: 10 }}
        >
            <FlatList
                data={items}
                numColumns={2}
                renderItem={({ item, index }) => (
                    <TouchableOpacity

                        onPress={() => navigation.navigate('ProductDetails',{id:item.id})}

                        key={index} style={styles.productCard}>
                        <View style={styles.imgContainer}>
                            <Image
                                source={{ uri: item.image }}
                                style={styles.img}
                                resizeMode='contain'
                            />
                        </View>
                        <View style={styles.textContainer}>
                            {/* title */}
                            <Text
                                numberOfLines={1}
                                style={styles.titleText}
                            >
                                {item.title}
                            </Text>
                            {/* fiyat */}
                            <Text style={styles.priceText}>{item.price}$</Text>
                        </View>
                        <View>
                            {/* rating icons*/}
                            <Text>{item.rating.rate}</Text>
                            {/* rating count */}
                            <Text>{item.rating.count}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default ProductsScreen

const styles = StyleSheet.create({
    productCard: {
        flex: 1,
        height: "auto",
        backgroundColor: "rgb(200,200,200)",
        paddingVertical: 20,
        paddingHorizontal: 15,
        borderRadius: 20,
        margin: 10,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.3)'
    },
    imgContainer: {
        width: 150,
        height: 150,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.3)',
        borderRadius: 15,
        padding: 5
    },
    img: {
        width: "100%",
        height: "100%"
    },
    textContainer: {
        gap: 10,
        marginVertical: 10
    },
    titleText: {
        fontSize: 15,
        fontWeight: "bold"
    },
    priceText: {
        fontSize: 15,
        textAlign: "center",
        color: "rgb(50,200,50)",
        fontWeight: "bold"
    }
})