import { Alert, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { fontScale, horizontalScale, verticalScale } from '../utils/dimensions'
import { AppColors } from '../utils/colors'
import { ArchiveTick, ArrowDown, ArrowDown2, ArrowLeft2, Mobile, Signpost, Simcard1, User } from 'iconsax-react-nativejs'
import { addDoc, collection, doc, getDoc, updateDoc } from '@react-native-firebase/firestore'
import { db } from '../../App'
import { launchImageLibrary } from 'react-native-image-picker'
import axios from 'axios'

const EditPage = ({ navigation,route }) => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [home, setHome] = useState('');
    const [image, setImage] = useState(null);

    const {id} = route.params;

    useEffect(() => {

        const getData = async () => {

            try {
                const ref = doc(db, "contacts", id)

                const snapshot = await getDoc(ref);

                const document = snapshot.data()

                setName(document.name);
                setPhone(document.phone);
                setMobile(document.mobile);
                setEmail(document.email);
                setImage(document.image);
                setHome(document.home);

            }
            catch (err) {
                console.log(err)
            }
        }

        getData();

    }, [])

    const handleSubmit = async () => {
        const inputs = [name, phone, mobile, email, home];

        if (inputs.some((input) => input.trim().length == 0)) {
            Alert.alert('Hata', "Formda boş alan olamaz.")
            return
        }

        try {
            const docRef = doc(db, 'contacts', id);

            await updateDoc(docRef,{ name,phone,mobile,email,home,image})

            Alert.alert('Başarılı',"Kullanıcı güncellendi.")

            navigation.navigate('HomePage')

        }
        catch (err) {
            console.error(err)
            Alert.alert('Hata', `Bir hata oluştu: \n ${err.message}`)
        }
    }

    const pickImage = async () => {

        try {
            await launchImageLibrary({
                mediaType: 'photo',
                selectionLimit: 1
            },
                async (res) => {
                    if (res.didCancel) {
                        Alert.alert('Fotoğraf seçimini iptal ettiniz.')
                    }
                    else if (res.errorCode || res.errorMessage) {
                        Alert.alert('Hata', `${res?.errorCode}: ${res.errorMessage}`)
                    }
                    else {
                        try {

                            // cloudinary'e yüklemek için form oluşturuyoruz çünkü düz json ile dosya yüklenemez, ancak formdata ile yüklenir
                            const form = new FormData();

                            // formdataya file değeri olarak resmimizin yolunu, türünü ve ismini içeren bir obje veriyoruz
                            form.append('file', {
                                uri: res.assets[0].uri,
                                type: res.assets[0].type,
                                name: res.assets[0].fileName
                            })

                            // oluşturduğumuz resim yükleme presetini de upload_preset ismiyle veriyoruz
                            form.append('upload_preset', 'mobile_upload')

                            // post ile resmi cloudinary'e yüklüyoruz
                            const response = await axios.post('https://api.cloudinary.com/v1_1/dgb1bomm8/upload', form)

                            console.log(response?.data?.secure_url)
                            // cloudinary'den gelen cevabın secure_url yani https kullanan linkini de image olarak ayarlıyoruz ki kullanıcıyı kaydettiğimizde resmi de kaydolsun.
                            setImage(response?.data?.secure_url);

                        }
                        catch (err) {
                            console.log(err)
                        }
                    }
                }
            )
        }
        catch (err) { console.error(err) }

    }


    return (
        <SafeAreaView>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <ArrowLeft2 size={fontScale(35)} color={AppColors.GREEN} />
                </TouchableOpacity>
                <Text style={styles.headerText}>Edit contact</Text>
                <ArchiveTick size={fontScale(35)} color={AppColors.GREEN} onPress={handleSubmit} />
            </View>
            <TouchableOpacity onPress={pickImage}>
                <Image
                    source={image ? { uri: image } : require('../assets/images/addcontact.png')}
                    style={{ width: "100%", height: verticalScale(259) }}
                    resizeMode='stretch'
                />
            </TouchableOpacity>
            <View style={styles.bottom}>
                <View style={styles.infoCard}>
                    <Simcard1 size={fontScale(30)} color={AppColors.GREEN} />
                    <View style={styles.textCtn}>
                        <Text style={{
                            fontSize: fontScale(24),
                            height: verticalScale(32)
                        }}>Saving into</Text>
                        <Text style={{
                            color: AppColors.GREEN,
                            fontSize: fontScale(18),
                            height: verticalScale(24)
                        }}>SIM Card</Text>
                    </View>
                    <ArrowDown2 style={{ marginLeft: "auto" }} size={fontScale(35)} color={AppColors.GREEN} />
                </View>

                <View style={[styles.infoCard, styles.form]}>
                    <View style={styles.iconContainer}>
                        <User style={styles.icon} size={fontScale(30)} color={AppColors.GREEN} />
                        <Mobile style={styles.icon} size={fontScale(30)} color={AppColors.GREEN} />
                        <Signpost style={styles.icon} size={fontScale(30)} color={AppColors.GREEN} />
                    </View>

                    <View style={styles.inputsContainer}>
                        <TextInput value={name} onChangeText={setName} style={styles.input} placeholder='Name' />
                        <TextInput value={phone} onChangeText={setPhone} style={styles.input} placeholder='Phone' />
                        <TextInput value={mobile} onChangeText={setMobile} style={styles.input} placeholder='Mobile' />
                        <TextInput value={email} onChangeText={setEmail} style={styles.input} placeholder='Email' />
                        <TextInput value={home} onChangeText={setHome} style={styles.input} placeholder='Home' />
                    </View>
                    <View style={{ flexDirection: "row", height: "100%", paddingTop: verticalScale(20) }}>
                        <ArrowDown2 color={AppColors.GREEN} />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default EditPage;

const styles = StyleSheet.create({
    header: {
        height: verticalScale(80),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: horizontalScale(37)
    },
    headerText: {
        flex: 1,
        paddingLeft: horizontalScale(24),
        fontSize: fontScale(24),
        fontWeight: "bold"
    },
    middle: {
        height: verticalScale(259),
        width: "100%",
    },
    infoCard: {
        marginHorizontal: horizontalScale(31),
        paddingHorizontal: horizontalScale(24),
        marginTop: verticalScale(-28),
        height: verticalScale(66),
        borderRadius: horizontalScale(15),
        backgroundColor: AppColors.WHITE,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        flexDirection: "row",
        alignItems: "center"
    },
    textCtn: {
        marginLeft: horizontalScale(34)
    },
    form: {
        marginTop: verticalScale(24),
        height: verticalScale(223),
    },
    iconContainer: {
        height: "100%",
        justifyContent: "space-between",
        paddingVertical: verticalScale(50),
    },
    icon: {
        width: horizontalScale(25),
        height: verticalScale(30)
    },

    inputsContainer: {
        paddingLeft: horizontalScale(32),
        gap: verticalScale(9),
        flex: 1,
        paddingTop: verticalScale(35),
        paddingBottom: verticalScale(28),
    },
    input: {
        fontSize: fontScale(18),
        borderBottomWidth: verticalScale(1),
        borderColor: AppColors.GREEN,
        width: "100%",
        paddingBottom: verticalScale(4)
    }
})