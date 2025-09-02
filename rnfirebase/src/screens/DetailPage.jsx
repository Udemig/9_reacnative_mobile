import { Alert, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { fontScale, horizontalScale, verticalScale } from '../utils/dimensions'
import { AppColors } from '../utils/colors'
import { ArchiveTick, ArrowDown, ArrowDown2, ArrowLeft2, Mobile, Signpost, Simcard1, User } from 'iconsax-react-nativejs'
import { addDoc, collection, doc, getDoc } from '@react-native-firebase/firestore'
import { db } from '../../App'
import { launchImageLibrary } from 'react-native-image-picker'

const DetailPage = ({ navigation, route }) => {

    const [user, setUser] = useState();

    const { id } = route.params;

    useEffect(() => {

        const getUser = async () => {
            const dataRef = doc(db, 'contacts', id)

            const query = await getDoc(dataRef);

            setUser(query.data())
        }

        getUser();

    }, [])



    return (
        <SafeAreaView>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <ArrowLeft2 size={fontScale(35)} color={AppColors.GREEN} />
                </TouchableOpacity>
                <Text style={styles.headerText}>Contact Details</Text>
            </View>
            <Image
                source={require('../assets/images/addcontact.png')}
                style={{ width: "100%", height: verticalScale(259) }}
                resizeMode='stretch'
            />
            <View style={styles.bottom}>

                <View style={[styles.infoCard, styles.form]}>
                    <View style={styles.iconContainer}>
                        <User style={styles.icon} size={fontScale(30)} color={AppColors.GREEN} />
                        <Mobile style={styles.icon} size={fontScale(30)} color={AppColors.GREEN} />
                        <Signpost style={styles.icon} size={fontScale(30)} color={AppColors.GREEN} />
                    </View>

                    <View style={styles.inputsContainer}>
                        <Text style={styles.input}>{user?.name}</Text>
                        <Text style={styles.input}>{user?.phone}</Text>
                        <Text style={styles.input}>{user?.mobile}</Text>
                        <Text style={styles.input}>{user?.email}</Text>
                        <Text style={styles.input}>{user?.home}</Text>
                    </View>
                    <View style={{ flexDirection: "row", height: "100%", paddingTop: verticalScale(20) }}>
                        <ArrowDown2 color={AppColors.GREEN} />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default DetailPage

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