import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Settings = () => {

    // store'da tutulan verileri değiştirmek için "dispatch" fonksiyonunu kullanarak bir action göndeririz, bu eylemin type değerine göre Reducer'ımız neler yapacağına karar verir.

    const { theme } = useSelector(state => state)

    const dispatch = useDispatch();

    return (
        <View>
            <Button title='Tema Değiştir'
                onPress={() => {

                    dispatch({ 
                        type: 
                        theme == "dark" ? "SETLIGHTTHEME" : 'SETDARKTHEME' 
                    })

                }} />
        </View>
    )
}

export default Settings

const styles = StyleSheet.create({})