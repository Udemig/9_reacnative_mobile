import { Alert, PermissionsAndroid, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { generalStyles } from '../styles'
import { PERMISSIONS, request, RESULTS } from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';

const LocationScreen = () => {

    const [location, setLocation] = useState('0,0');
    const [permission, setPermission] = useState(false);

    const askForPermission = async () => {

        if (Platform.OS == "android") {
            if (granted !== RESULTS.GRANTED) {
                Alert.alert('izin gerekli', 'lütfen android konum izni veriniz.')
                return;
            }

            setPermission(true);

        } else {

            const res = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);

            if (res !== RESULTS.GRANTED) {
                Alert.alert('İzin gerekli', 'Lütfen IOS konum izni veriniz.')
                return;
            }

            setPermission(true);

        }



    }




    const handleLocation = async () => {

        // ÖNCE KULLANICIDAN KONUM İZNİ İSTE
        askForPermission();



        // KULLANICI KONUM İZNİ VERDİYSE JEOLOKASYON VERİSİNİ İŞLE



        // 1) react native'in orijinal jeolokasyon servisi
        // navigator.geolocation.getCurrentPosition();
        // eski sürümlerde vardı ama yeni RN sürümlerinde (0.78>) kaldırıldı

        Geolocation.getCurrentPosition(
            // success calback => başarılıysa neler olacak
            position => setLocation(`${position.coords.latitude},${position.coords.longitude}`),

            // error callback => hata alırsak ne olacak?
            error => Alert.alert('Hata', error.message),

            //ayarlar
            { enableHighAccuracy: true, timeout: 15000 }

        )


    }


    return (
        <View style={{ flex: 1 }}>
            <Text
                style={[generalStyles.btnText, { marginHorizontal: "auto", marginTop: 50 }]}>
                {location}
            </Text>
            <TouchableOpacity
                style={[generalStyles.btn]}
                onPress={() => handleLocation()}
            >
                <Text style={[generalStyles.btnText]}>Konumu Al</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LocationScreen

const styles = StyleSheet.create({})