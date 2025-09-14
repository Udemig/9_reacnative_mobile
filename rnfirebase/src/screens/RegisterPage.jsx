import { Alert, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { fontScale, horizontalScale, verticalScale } from '../utils/dimensions'
import { AppColors } from '../utils/colors'
import { getAuth, createUserWithEmailAndPassword } from '@react-native-firebase/auth'
import { useDispatch } from 'react-redux'
import { loginUser, registerUser } from '../redux/slices/authSlice'
const RegisterPage = ({ navigation }) => {

    const [email, setEmail] = useState('furkan@example.com');
    const [pass, setPass] = useState('furkan123');
    const [confirmPass, setConfirmPass] = useState('furkan123');

    const dispatch = useDispatch();

    const handleSubmit = async () => {
        // bu dispatch işlemi başarılı mı yoksa hatalı mı nasıl anlayacağız?

        // thunk dispatchinin arkasına yapıştırılan unwrap, 
        // * eğer dispatch başarılı ise hiçbir şey yapmaz(hata yok)
        // ! eğer dispatch başarısız ise hata fırlatır

        // dolayısıyla .unwrapli bir thunkı try catch ile sarmalayıp hata yoksa bizi ana sayfaya götür, hata varsa hatayı bize göster diyebiliriz.
        try {

            if(pass !== confirmPass) throw Error('Şifreleriniz uyuşmuyor.')

            await dispatch(registerUser({ email, pass })).unwrap();

            navigation.navigate('HomePage');
        }
        catch (err) {
            Alert.alert(err.message);
            console.error(err)
        }
    }


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, justifyContent: "center" }}>
                <View style={styles.inputWrapper}>
                    <Text style={styles.label}>E-posta</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='E-posta'
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>
                <View style={styles.inputWrapper}>
                    <Text style={styles.label}>Şifre</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Şifre'
                        value={pass}
                        onChangeText={setPass}
                        secureTextEntry />
                </View>

                <View style={styles.inputWrapper}>
                    <Text style={styles.label}>Şifre Doğrulama</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Şifre'
                        value={confirmPass}
                        onChangeText={setConfirmPass}
                        secureTextEntry />
                </View>

                <TouchableOpacity style={styles.btn} onPress={() => handleSubmit()}>
                    <Text style={styles.btnText}>Kaydol</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default RegisterPage

const styles = StyleSheet.create({
    inputWrapper: {
        marginHorizontal: 'auto',
        width: horizontalScale(300)
    },
    label: {
        marginTop: verticalScale(30),
        fontSize: fontScale(20),
        marginBottom: verticalScale(10)
    },
    input: {
        borderWidth: 2,
        borderColor: 'rgba(0,0,0,0.4)',
        padding: horizontalScale(10),
        borderRadius: horizontalScale(10)
    },
    btn: {
        marginHorizontal: "auto",
        marginTop: verticalScale(20),
        width: horizontalScale(200),
        backgroundColor: AppColors.GREEN,
        padding: horizontalScale(10),
        borderRadius: horizontalScale(10),
        borderWidth: 2,
        borderColor: 'rgba(0,0,0,0.2)'
    },
    btnText: {
        textAlign: "center",
        textTransform: "capitalize",
        color: AppColors.WHITE
    }

})