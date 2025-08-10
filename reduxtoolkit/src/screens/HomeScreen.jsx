import { Alert, Button, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_USER } from '../utils/actionNames';
import { addUser, deleteUser } from '../redux/slices/userSlice';

const HomeScreen = ({ navigation }) => {

    // store'dan veri getir -> useSelector (seçici kullan)
    const { users, message } = useSelector(state => state)

    // store'a aksiyon yolla (bir şey söyle) -> dispatch (başlat)
    const dispatch = useDispatch();

    const handleSubmit = () => {

        const newUser = {
            name: "veli"
        }

        dispatch(addUser(newUser))
    }


    const handleDelete = (id) => {

        Alert.alert(
            'Silme İşlemi', // başlık kısmı
            'Kullanıcıyı silmek istediğinize emin misiniz?', // gövde kısmı
            [ // seçenekler kısmı
                {
                    text: "Evet",
                    onPress:()=>dispatch(deleteUser(id))
                },
                {
                    text:"Hayır",
                    onPress:()=>{return}
                }
            ] 
        )

    }

    



    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                {
                    users.map((user) => (
                        <TouchableOpacity
                            style={styles.userBox}
                            onPress={() => navigation.navigate(
                                'EditScreen',
                                { ...user }
                            )}
                        >
                            <View>
                                <Text style={styles.userText}>{user.name}</Text>
                                <Text>{user.id}</Text>
                            </View>

                            <View>

                                <TouchableOpacity style={styles.deleteBtn}
                                    onPress={() => handleDelete(user.id)}
                                >
                                    <Text style={styles.deleteText}>SİL</Text>
                                </TouchableOpacity>


                            </View>
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>

            <Button title='Kullanıcı Ekle' onPress={() => handleSubmit()} />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    userBox: {
        padding: 10,
        margin: 5,
        backgroundColor: "beige",
        borderWidth: 2,
        borderColor: "rgba(0,0,0,0.1)",
        borderRadius: 10,
        gap: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    userText: {
        fontSize: 20,
        textTransform: "capitalize",
    },

    deleteBtn: {
        backgroundColor: "red",
        padding: 10,
        borderRadius: 5
    },
    deleteText: {
        color: "white",
        fontSize: 18,
        fontWeight: 700
    }
})