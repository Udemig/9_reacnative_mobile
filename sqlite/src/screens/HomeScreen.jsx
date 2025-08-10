import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { db } from '../db.js'
import { useFocusEffect } from '@react-navigation/native';


const HomeScreen = ({ navigation }) => {

    const [products, setProducts] = useState();


    const getProducts = useCallback(() => {

        console.log("get products çalıştı")

        db.transaction(tx =>

            tx.executeSql(
                'SELECT * FROM products;',
                [],
                (_, { rows }) => {
                    let data = [];

                    for(let i = 0; i < rows.length; i++){
                        data.push(rows.item(i));
                    }

                    setProducts(data)
                },

                (_, error) => {
                    console.log(error)
                }
            )

        )
    },[])


    // sayfalar arası geçişte yine çalışmasını istediğimiz fonksiyonlarda kullanırız.
    useFocusEffect(getProducts)


    return (
        <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 25, textAlign: "center", marginTop: 20 }}>Ürünler</Text>


            <View style={{ flex: 1 }}>
                <FlatList
                data={products}
                renderItem={({item})=>(
                    <TouchableOpacity
                        onPress={()=>navigation.navigate('Details',{id:item.id})}
                    >
                        <Text style={{fontSize:20,marginVertical:20}}>{item.title}</Text>
                    </TouchableOpacity>
                )}
                />
            </View>


            <View style={{ flex: 1, position: "relative" }}>
                <TouchableOpacity
                    style={{ position: "absolute", right: 30, bottom: 50 }}
                    onPress={() => navigation.navigate('Create')}
                >
                    <Text>Ürün Oluştur</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})