import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Settings from '../components/Settings'
import { useRoute } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'

const CounterScreen = () => {


  // use selector => store'da tutulan verileri çekmeye yarayan fonksiyon
  const { theme, fontSize } = useSelector(state => state.themeReducer);

  const {counter} = useSelector(state=>state.counterReducer);

  //useDispatch => store'da tutulan verileri güncellemeye yarayan fonksiyon
  const dispatch = useDispatch();




  return (
    <View>
      <Settings />
      <Text style={{ fontSize: fontSize }}>
        {
          theme == "light" ? "şuan açık renk modundayız" : "şuan koyu renk modundayız"
        }
      </Text>
      <Text>
        Şuan uygulama {fontSize}px font boyutu kullanıyor.
      </Text>

      <Text style={{ fontSize: 30, textAlign: "center" }}>Sayaç: {counter}</Text>

      <View style={{ flexDirection: "row", justifyContent: "center", gap: 20 }}>
        <TouchableOpacity
          onPress={() => dispatch({
            type: "DECREMENT"
          })}
        >
          <Text style={styles.icon}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => dispatch({
            type: "INCREMENT"
          })}
        >
          <Text style={styles.icon}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CounterScreen

const styles = StyleSheet.create({
  icon: {
    fontSize: 50
  }
})