import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { db } from '../db';

const CreateProduct = () => {


    const [title, setTitle] = useState();
    const [price, setPrice] = useState();

    const createListing = () => {

        db.transaction(tx =>

            tx.executeSql("INSERT INTO products (title, price) VALUES (?,?)",
                [title,Number(price)],
                (_, result) => { console.log("Not eklendi: ", result) },
                (_, error) => { console.log("Ekleme hatası: ", error) }
            )

        )

    }


    return (
        <>
            <View style={{ flex: 8 }}>
                <Text style={styles.label}>Başlık</Text>
                <TextInput style={styles.input} value={title} onChangeText={setTitle}/>

                <Text style={styles.label}>Fiyat</Text>
                <TextInput style={styles.input} value={price} onChangeText={setPrice}/>


            </View>

            <View style={{ flex: 2 }}>
                <TouchableOpacity
                    style={{ margin: 'auto', padding: 10, backgroundColor: "red" }}
                    onPress={() => createListing()}
                >
                    <Text style={{
                        color: "white",
                        fontSize: 20
                    }}>Oluştur</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default CreateProduct

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