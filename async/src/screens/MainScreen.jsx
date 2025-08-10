import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const MainScreen = () => {

  const navigation = useNavigation();

  const [latestNote,setLatestNote] = useState();
  const [secondNote,setSecondNote] = useState();

  useEffect(()=>{

    //sayfa ilk yüklendiğinde async storage'dan en son kaydedilmiş notu çek

    const getNote = async () => {
        const sonNot = await AsyncStorage.getItem('note');
        const ikinciNot = await AsyncStorage.getItem('secondnote');

        setLatestNote(sonNot);
        setSecondNote(ikinciNot);
    }

    getNote();

  },[])

  const deleteAllNotes = async () => {

    try {
      // await AsyncStorage.clear() Fazla sert, genelde kullanılması önerilmez.

      // await AsyncStorage.removeItem('note'); tekil not silme yöntemi
      
      // multiRemove => daha çok önerilen, sadece verdiğimiz keyleri silen metod

      await AsyncStorage.multiRemove(['note','secondnote']);

      Alert.alert('bütün notlar silindi')
      // setLatestNote('')
    } catch (error) {
      Alert.alert(error.message)
    }
    
  }


  return (
    <View style={{flex:1, alignItems:"center",justifyContent:"center"}}>

      <View>
        <Text style={{fontSize:25,marginBottom:30}}>En Son Kaydedilen Not:</Text>
        <Text style={{fontSize:20, textAlign:"center",marginBottom:30}}>{latestNote}</Text>
      </View>

      <View>
        <Text style={{fontSize:25,marginBottom:30}}>İkinci Not:</Text>
        <Text style={{fontSize:20, textAlign:"center",marginBottom:30}}>{secondNote}</Text>
      </View>

      <TouchableOpacity 
      style={styles.button}
      onPress={()=>navigation.navigate('NoteScreen',{id:25})}
      >
        <Text style={{color:"white"}}>Not Ekranına Git</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      style={styles.button}
      onPress={()=>deleteAllNotes()}
      >
        <Text style={{color:"white"}}>Notları Temizle</Text>
      </TouchableOpacity>
    </View>
  )
}

export default MainScreen

const styles = StyleSheet.create({
  button:{
    backgroundColor:"red",
    paddingHorizontal:15,
    paddingVertical:10,
    borderRadius:10,
    marginVertical:10
  }
})