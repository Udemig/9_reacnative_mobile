import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAuth, onAuthStateChanged } from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import {setUser,clearUser} from '../redux/slices/authSlice.js'

// * AUTH(GİRİŞ YAPILMA DURUMU) VAR MI YOK MU KONTROL EDEN ARA KOMPONENT

const AuthWatcher = ({ children }) => {
    const navigation = useNavigation();

    const dispatch = useDispatch();

    useLayoutEffect(()=>{

        const auth = getAuth();

        // onAuthStateChanged => çıkış yapılma durumlarını dinleyen, ve yapılmadıysa bize kullanıcının giriş yapmış olduğu bilgisini saklayan fonksiyon
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            if(currentUser){
                // eğer currentUser varsa yani kullanıcı giriş yapmışsa onu anasayfaya yönlendir, giriş yapmasın
                dispatch(setUser(currentUser));
                navigation.navigate('HomePage')
            } else{
                // eğer currentUser yoksa yani kullanıcı giriş yapmamışsa onu LoginPage'e yönlendir
                dispatch(clearUser());
                navigation.navigate('LoginPage');
            }
        })
        // uygulamayı kapadığımızda vs. kullanıcı dinleyicisi çalışmaya devam etmesin
        return unsubscribe;

    },[dispatch])

    return children;
}

export default AuthWatcher

const styles = StyleSheet.create({})