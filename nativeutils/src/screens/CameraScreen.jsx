import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { generalStyles } from '../styles'
import { launchCamera } from 'react-native-image-picker';
import { request, RESULTS } from 'react-native-permissions';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CameraScreen = ({navigation}) => {

    const [photoUri, setPhotoUri] = useState('');

    useEffect(()=>{

        // IIFE => Immediately Invoked Function Expression
        // Anında Çağırılan Fonksiyon Gösterimi
        
        (async()=>{

            const localPhoto = await AsyncStorage.getItem('photo');

            setPhotoUri(localPhoto)

        })()


    },[])

    const handleCamera = async () => {

        const granted = await request('android.permission.CAMERA');

        if (granted === RESULTS.GRANTED) {
            launchCamera(
                {
                    mediaType: "photo"
                }
                ,
                async (response) => {
                    if (response.didCancel) {
                        Alert.alert('Resim çekimini iptal ettiniz.')
                    } else if (response.errorMessage) {
                        Alert.alert('Bir hata oluştu', response.errorMessage)
                    }
                    else {
                        const cameraPhoto = response.assets[0].uri;

                        setPhotoUri(cameraPhoto)

                        try {
                            await AsyncStorage.setItem('photo', cameraPhoto);
                        } catch (error) {
                            console.error(error)
                        }
                    }
                }
            )

        } else {
            Alert.alert('Kamera izni reddedildi.')
            return;
        }

    }


    return (
        <View style={{ flex: 1 }}>

            <View style={{ height: "60%" }}>
                <Image
                    source={{ uri: photoUri }}
                    style={{ width: 300, height: 300, borderWidth: 1, margin: "auto" }} />
            </View>


            <TouchableOpacity
                style={[generalStyles.btn, { backgroundColor: "white" }]}
                onPress={() => handleCamera()}
            >
                <Text style={[generalStyles.btnText]}>Kamerayı Aç</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[generalStyles.btn, { backgroundColor: "white" }]}
                onPress={() => navigation.navigate('Location')}
            >
                <Text style={[generalStyles.btnText]}>Lokasyona Git</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CameraScreen

const styles = StyleSheet.create({})