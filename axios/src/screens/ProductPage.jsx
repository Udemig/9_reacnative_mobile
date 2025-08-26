import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native';
import api from '../utils/api';
import { useDispatch } from 'react-redux';
import { deleteProduct, deleteProductThunk } from '../redux/slices/productSlice';


const ProductPage = ({ navigation, route }) => {

  const { id } = route.params;

  const [product, setProduct] = useState(null);
  const [imgLoading, setImgLoading] = useState(false);

  const dispatch = useDispatch();

  const handleDelete = async () => {
    // bunu böyle bırakırsak sadece geçici hafızadan(redux) ürünü sileriz ama refresh attığımızda ürün geri gelir
    dispatch(deleteProductThunk({ id }));

    // o zaman buna çözüm olarak, bir thunk yazarız, thunkın başarılı olması durumunda ise yukarıdaki actionı dispatchleriz.

    navigation.goBack();
  }

  // sayfalar arası geçiş de dahil olmak üzere her türlü tekrar edilmesini istediğimiz işlemler için useFocusEffect içerisinde useCallback kullanırız. Bu sayede güncelleme yapıp bu sayfaya geri döndüğümüzde, güncel veri ile karşılaşırız.
  useFocusEffect(
    useCallback(() => {

      const getProduct = async () => {

        console.log("istek atılan ID: ", id)

        api.get(`/products/${id}`)
          .then((res) => { console.log(res.data); setProduct(res.data) })
          .catch(err => console.error(err))

      }

      getProduct();
    }, [id])
  )

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 2, marginTop: 30, position: "relative" }}>
        {
          imgLoading &&
          <ActivityIndicator
            size='large'
            color='black'
            style={styles.loadingStyle}
          />
        }
        <Image
          source={{ uri: product?.imageUrl }}
          style={{ height: "100%" }}
          resizeMode='contain'
          onLoadStart={() => setImgLoading(true)}
          onLoadEnd={() => setImgLoading(false)}
        />
      </View>
      <View style={{ flex: 4 }}>
        <Text style={styles.title} numberOfLines={2}>{product?.name}</Text>
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
        <TouchableOpacity
          onPress={() => navigation.navigate('ProductEditPage', { product })}
          style={[styles.btn, { backgroundColor: "blue" }]}
        >
          <Text style={{
            color: "white",
            fontWeight: 600
          }}>Update</Text>
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
    paddingHorizontal: 10,
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