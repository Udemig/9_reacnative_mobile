import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

const ProductCard = ({ item }) => {

    const [imgLoading, setImgLoading] = useState(true);

    const navigation = useNavigation()


    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('ProductPage', { id: item.id })}
            style={styles.card}>
            <View style={styles.imgBg}>
                {
                    imgLoading &&
                    <ActivityIndicator
                        size='large'
                        color='black'
                        style={styles.loadingStyle}
                    />
                }
                <Image 
                source={{ uri: item?.imageUrl }} 
                style={styles.img} 
                resizeMode='contain' 
                onLoadEnd={()=>setImgLoading(false)}
                />
            </View>
            <View style={styles.textContainer}>
                <Text style={{ flex: 1, fontWeight: 600, fontSize: 18 }}>{item.name}</Text>
                <Text style={{ flex: 3 }}>{item.description}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ProductCard

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        width: "90%",
        margin: "auto",
        borderWidth: 1,
        padding: 5,
        borderRadius: 5,
        marginVertical: 10
    },
    textContainer: {
        flexShrink: 1,
        padding: 5,
        width: "100%",
    },
    imgBg: {
        height: 100,
        width: 100,
        backgroundColor: "white",
        margin: 5,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "rgba(0,0,0,0.2)"
    },
    img: {
        padding: 10,
        width: "100",
        height: "100%"
    },
    loadingStyle: {
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: [
            { translateX: "-50%" },
            { translateY: "-50%" }
        ],
        zIndex: 20
    }
})