import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native';
import api from '../utils/api';


const ProductPage = ({ navigation, route }) => {

  const { id, products, setProducts } = route.params;

  const [product, setProduct] = useState(null);

  const handleDelete = async () => {
    api
      .delete(`/products/${id}`)
      .then((res) => {
        setProducts(products.filter((item) => item.id !== id))
        navigation.goBack();
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {

    const getProduct = async () => {

      api.get(`/products/${id}`)
        .then((res) => {console.log(res.data); setProduct(res.data)})
        .catch(err => console.log(err))

    }

    getProduct();

  },[])

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 2, marginTop: 30 }}>
        <Image source={{ uri: product?.image }} style={{ width: "100%", height: "100%" }} resizeMode='contain' />
      </View>
      <View style={{ flex: 4 }}>
        <Text style={styles.title} numberOfLines={2}>{product?.title}</Text>
        <Text style={styles.desc}>{product?.description}</Text>
      </View>
      <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
        <TouchableOpacity
          onPress={() => handleDelete()}
          style={styles.btn}
        >
          <Text style={{
            color: "white",
            fontWeight: 600
          }}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ProductPage

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    marginTop: 20,
    fontWeight: 700,
    fontSize: 24,
    paddingHorizontal: 10
  },
  desc: {
    marginTop: 20,
    fontWeight: 400,
    fontSize: 14,
    paddingHorizontal: 10
  },
  btn: {
    backgroundColor: "rgba(219, 78, 78, 1)",
    margin: "auto",
    padding: 15,
    borderRadius: 10
  }
})