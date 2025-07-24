import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { updateUser } from '../redux/slices/userSlice'

const EditScreen = ({ navigation,route }) => {

  const dispatch = useDispatch();

  // const route = useRoute(); eğer direkt sayfadaysak route'u prop olarak alabiliyoruz

  const { name, id } = route.params

  // text inputlar için state tutmak zorundayız ki güncelleyebilelim
  const [updateName, setUpdateName] = useState();

  // sayfa ilk yüklendiğinde varsayılan state'i, paramstan gelen name olarak ata
  useEffect(() => {
    setUpdateName(name)
  }, [])


  const handleSubmit = () => {

    // istediğimiz kullanıcıyı güncelleyen action'ı dispatchleyeceğiz.

    dispatch(updateUser({
      id,
      name:updateName
    }))

    navigation.goBack();

  }


  return (
    <View style={{ flex: 1 }}>
      <TextInput
        style={styles.input}
        value={updateName}
        onChangeText={(text) => setUpdateName(text)}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={()=>handleSubmit()}
      >
        <Text
          style={styles.btnText}
        >
          Güncelle
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default EditScreen

const styles = StyleSheet.create({
  input:{
    margin:20,
    padding:20,
    backgroundColor:"white",
    fontSize:20,
    borderWidth:2,
    borderColor:"rgba(0,0,0,0.15)",
    borderRadius:15
  },
  btn:{
    backgroundColor:"orange",
    width:200,
    marginHorizontal:"auto",
    padding:10,
    borderRadius:10,
    borderWidth:"2",
    borderColor:"rgba(0,0,0,0.1)"
  },
  btnText:{
    color:"white",
    fontSize:20,
    fontWeight:"bold",
    textAlign:"center"
  }
})