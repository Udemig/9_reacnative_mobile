import { View, Text, TouchableOpacity, Alert, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { launchImageLibrary } from 'react-native-image-picker'
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({navigation}) => {


    const [photoUri, setPhotoUri] = useState('');

    useEffect(()=>{

        // IIFE => Immediately Invoked Function Expression
        // Anında Çağırılan Fonksiyon Gösterimi
        
        (async()=>{

            const localPhoto = await AsyncStorage.getItem('photo');

            setPhotoUri(localPhoto)

        })()


    },[])


    const handleOpenLibrary = async () => {

        launchImageLibrary(
            //options
            {
                mediaType: "photo", // sadece fotoğraf seçmeye izin verdik
                selectionLimit: 1, // sadece 1 adet dosya seçmeye izin verdik
                includeBase64: false, // base64 formatında olmasın dedik
            },
            // resim seçildiğinde onunle ne yapacağız (callback)
            async (response) => {
                // kullanıcı iptal ederse
                if (response.didCancel) {
                    Alert.alert('Resim seçimini iptal ettiniz.')
                }
                // seçerken hata olursa (resim bozuksa vs.)
                else if (response.errorMessage) {
                    console.error("Resim seçerken hata:", response.errorMessage)
                    Alert.alert('Hata', error.message)
                }
                // iptal edilmeedi ve hata olmadıysa demek ki resim başarıyla seçilmiştir
                else {
                    const uri = response.assets[0].uri;
                    setPhotoUri(uri);

                    try {
                        await AsyncStorage.setItem('photo',uri);
                    } catch (error) {
                        console.error(error)
                    }
                }
            }

        )
    }


    return (
        <View style={{ flex: 1 }}>
            <View style={{margin:"auto"}}>
                <Image 
                source={{uri: photoUri}}
                style={{ minWidth: 300, minHeight: 200, borderWidth: 1 }} 
                />
            </View>
            <TouchableOpacity
                onPress={() => handleOpenLibrary()}
                style={{ margin: "auto", backgroundColor: "aquamarine", padding: 10, borderRadius: 10 }}
            >
                <Text style={{ fontSize: 20 }}>Resim Seç</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate('Camera')}
                style={{ margin: "auto", backgroundColor: "aquamarine", padding: 10, borderRadius: 10 }}
            >
                <Text style={{ fontSize: 20 }}>Kameraya Git</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen