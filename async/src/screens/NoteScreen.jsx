import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const NoteScreen = ({navigation}) => {

  // state geçici hafızadır, sadece içinde bulunduğu component ekranda olduğu sürece hafızada veri tutabilir. componentDidUnmount olduğunda bütün veri kaybolur.

  const [note,setNote] = useState('');

  const {id} = useRoute().params;

  const handleNoteSave = async () => {

    try {
      await AsyncStorage.setItem('secondnote',note);
      console.log('not başarıyla kaydedildi.')
      navigation.navigate('MainScreen')
    } catch (error) {
      console.log(error)
    }

  }

  

  return (
    <View>
      {/* <Text>{id} no'lu not ekranındasınız.</Text> */}
      <TextInput style={styles.input}
      value={note}
      onChangeText={(text)=>setNote(text)}
      />

      <Text style={{textAlign:"center", fontSize:20, marginTop:50}}>
        {note}
      </Text>

      <TouchableOpacity 
      style={styles.button}
      onPress={()=>handleNoteSave()}
      >
        <Text>Kaydet</Text>
      </TouchableOpacity>
    </View>
  )
}

export default NoteScreen

const styles = StyleSheet.create({
  input:{
    borderWidth:1,
    padding:10,
    margin:"auto",
    width:200
  },
  button:{
    backgroundColor:"red",
    paddingHorizontal:15,
    paddingVertical:10,
    borderRadius:10,
    marginHorizontal:"auto"
  }
})