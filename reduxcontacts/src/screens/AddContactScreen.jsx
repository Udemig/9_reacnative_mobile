import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { vh, vw } from '../utils/screenSize'
import { useDispatch } from 'react-redux';

const AddContactScreen = ({navigation}) => {

  const [name, setName] = useState();
  const [phone, setPhone] = useState();

  const dispatch = useDispatch();


  const handleSubmit = () => {

    // ismin başındaki ve sonundaki boşluklar kaldırıldıktan sonra uzunluğu 0'dan küçükse hata ver
    if(name.trim().length<=0){
      Alert.alert('HATA','İsim kutusu boş bırakılamaz.');
      return;
    }

    if(phone.trim().length<11){
      Alert.alert('HATA','Telefon no. kutusu boş bırakılamaz.');
      return;
    }

    // türü (type) yeni kullanıcı ekle olan ve payloadu (verisi) yeni eklemek istediğim kullanıcının ismini ve telefon numarasını içeren bir action yolla
    dispatch({ type: "ADD_CONTACT", payload: {name,phone} })

    Alert.alert(
      'BAŞARILI', // alertin başlığı
      'Kişilerinize başarıyla eklendi.', //alertin içeriği
      [
        {
          text: "TAMAM",
          onPress:()=>navigation.reset({
            routes: [{name: 'Home'}],
            index: 0
          })
        }  //alertin butonlarını içeren dizi
      ] 
    )
  }

  return (
    <View style={styles.container}>
      <View style={{ flex: 8 }}>
        <Text style={styles.label}>İsim</Text>

        <TextInput
          style={styles.input}
          onChangeText={(text) => setName(text)}
        />


        <Text style={styles.label}>Telefon</Text>

        <TextInput
          style={styles.input}
          onChangeText={(text) => setPhone(text)}
        />
      </View>

      <View style={{ flex: 2 }}>
        <TouchableOpacity style={styles.addButton}
          onPress={() => handleSubmit()}
        >
          <Text
            style={styles.btnText}
          >KİŞİ EKLE</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default AddContactScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  label: {
    width: vw(90),
    marginHorizontal: "auto",
    marginTop: 20
  },
  input: {
    width: vw(90),
    marginHorizontal: "auto",
    marginVertical: 10,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "rgba(0,0,0,0.2)"
  }
  ,
  addButton: {
    backgroundColor: "rgb(100,205,100)",
    height: vh(5),
    width: vw(50),
    margin: "auto",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "rgba(0,0,0,0.2)"
  },
  btnText: {
    fontSize: 18,
    fontWeight: "700",
    color: "white",

  }
})