import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRight2, Menu, Microphone2, ProfileAdd, SearchNormal } from 'iconsax-react-nativejs'
import { SafeAreaView } from 'react-native-safe-area-context'
import { verticalScale, horizontalScale, fontScale } from '../utils/dimensions'
import { AppColors } from '../utils/colors'
import { collection, getDocs } from '@react-native-firebase/firestore'
import { db } from '../../App'

const HomePage = ({ navigation }) => {

    useEffect(() => {

        const getData = async () => {

            try {
                const querySnapshot = await getDocs(collection(db, "contacts"))

                let tempContacts = []

                querySnapshot.forEach(async (doc) => {
                    tempContacts.push({ ...await doc.data(), id: doc.id })
                });

                console.log(tempContacts)
                setContacts(tempContacts);
            }
            catch (err) {
                console.log(err)
            }
        }

        getData();

    }, [])

    const [contacts, setContacts] = useState([]);




    return (
        <SafeAreaView style={styles.page}>
            <View style={styles.header}>
                {/* search input */}
                <View style={styles.inputContainer}>
                    <SearchNormal size={fontScale(24)} color={AppColors.GREEN} />
                    <TextInput style={styles.input} placeholder='Search for contacts' />
                    <Microphone2 size={fontScale(24)} color={AppColors.GREEN} />
                </View>
                {/* menu btn */}
                <Menu size={horizontalScale(23)} color="black" />
            </View>


            <View style={styles.middle}>
                <Text style={styles.middleText}>My Profile</Text>
                <ArrowRight2 size={fontScale(30)} color={AppColors.BLACK} />
            </View>


            <View style={styles.bottom}>

                <Text style={styles.favoriteText}>My favourites</Text>
                <FlatList
                    data={contacts}
                    renderItem={({ item, key }) => (
                        <TouchableOpacity
                            style={styles.card}
                            onPress={() =>
                                navigation.navigate('DetailPage', { id: item.id })
                            }
                        >

                            <Image source={{ uri: 'https://picsum.photos/100' }} style={styles.cardImg} />
                            <Text style={styles.cardName}>{item.name}</Text>

                        </TouchableOpacity>
                    )}
                    contentContainerStyle={{
                        gap: verticalScale(19)
                    }}
                />
            </View>

            <TouchableOpacity style={styles.floatBtn} onPress={() => navigation.navigate('AddPage')}>
                <ProfileAdd size={fontScale(50)} color={AppColors.WHITE} />
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default HomePage

const styles = StyleSheet.create({
    page: { flex: 1, backgroundColor: "#E5E5E5", gap: verticalScale(3) },
    header: {
        flex: 1,
        alignItems: "center",
        paddingLeft: horizontalScale(20),
        paddingRight: horizontalScale(27),
        flexDirection: "row",
        gap: horizontalScale(43),
        backgroundColor: AppColors.WHITE
    },
    middle: {
        paddingLeft: horizontalScale(37),
        paddingRight: horizontalScale(27),
        paddingTop: verticalScale(21),
        paddingBottom: verticalScale(20),
        backgroundColor: AppColors.WHITE,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"

    },
    bottom: {
        flex: 7,
        backgroundColor: AppColors.WHITE
    },
    inputContainer: {
        backgroundColor: "#E5E5E5",
        flexDirection: "row",
        flex: 1,
        paddingHorizontal: horizontalScale(15),
        paddingVertical: verticalScale(7),
        borderRadius: 35,
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.3)",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    input: {
        flex: 1,
        marginLeft: horizontalScale(7),
        fontSize: fontScale(18)
    },

    middleText: {
        fontSize: fontScale(18)
    },

    favoriteText: {
        paddingLeft: horizontalScale(37),
        paddingVertical: verticalScale(24),
        fontSize: fontScale(18),
    },
    card: {
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: horizontalScale(91),
        gap: horizontalScale(39),
    },
    cardImg: {
        width: horizontalScale(41),
        height: horizontalScale(41),
        borderRadius: 10000
    },
    cardName: {
        fontSize: fontScale(18)
    },
    floatBtn: {
        position: "absolute",
        bottom: verticalScale(50),
        right: horizontalScale(30),
        borderRadius: 1000,
        padding: horizontalScale(5),
        backgroundColor: AppColors.GREEN
    }
})