import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { userNotFoundImg } from '../utils/constants';

const ImageLoader = ({ style, source, resizeMode }) => {

    const [loading, setLoading] = useState(true);

    return (
        <View style={{ position: "relative" }}>
            {
                // source.uri var mı diye sorgulamak aslında resmi internetten mi çekiyorum yoksa lokal resim mi diye sorgulamakla aynı şeydir.

                // çünkü lokal resimleri .uri yöntemiyle değil, require ile çekeriz o yüzden require ile çekiyorsak .uri undefined olur. 
                (loading && source?.uri) && (
                    <ActivityIndicator
                        size='large'
                        color='black'
                        style={{
                            position: "absolute",
                            zIndex: 10,
                            top: "50%",
                            left: "50%",
                            transform: [
                                { translateX: "-50%" },
                                { translateY: "-50%" }
                            ]
                        }}
                    />
                )
            }
            <Image
                style={[style]}
                source={source?.uri ? source : userNotFoundImg}
                resizeMode={resizeMode}
                onLoadStart={() => setLoading(true)}
                onLoadEnd={() => setLoading(false)}
                onError={() => setUserImage}
            />
        </View>
    )
}

export default ImageLoader

const styles = StyleSheet.create({})