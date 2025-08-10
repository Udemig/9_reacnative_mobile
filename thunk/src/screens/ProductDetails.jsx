import { Alert, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../redux/slices/productSlice';

const ProductDetails = ({ route }) => {

  const dispatch = useDispatch();

  const { id } = route.params;

  const { items,favorites } = useSelector((state) => state.products);

  const isFavorite = favorites.includes(id)


  const [product, setProduct] = useState(null);

  useEffect(() => {

    const foundItem = items.find(item => item.id === id)

    setProduct(foundItem);

  }, [])


  useEffect(()=>{

    console.log(favorites)

  },[favorites])

  const handleFavorite = (id) => {

    // favoriye ekleme komutunu çalıştır

    dispatch(toggleFavorite(id))


  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.imgContainer}>
        <Image
          source={{ uri: product?.image }}
          style={styles.img}
          resizeMode='contain'
        />
        <Text style={styles.priceText}>
          {product?.price}$
        </Text>

        <Text 
        style={[styles.priceText, styles.favText]}
        onPress={()=>handleFavorite(product.id)}
        >
          {isFavorite?'ÇIKAR':'FAVORI'}
        </Text>
      </View>
      <Text
        style={styles.title}
        numberOfLines={1}
        ellipsizeMode='middle'
      >
        {product?.title}
      </Text>

      <Text style={styles.description}>
        {product?.description}
      </Text>
    </View>
  )
}

export default ProductDetails

const styles = StyleSheet.create({

  imgContainer: {
    position: "relative"
  },
  priceText: {
    position: "absolute",
    right: 40,
    bottom: 0,
    padding: 15,
    fontSize: 20,
    backgroundColor: "greenyellow",
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20
  },
  favText: {
    left: 40,
    right: 'auto',
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 0,
    borderBottomRightRadius:0,
    borderTopRightRadius:20,
    backgroundColor:"red",
    color:"white"
  },
  img: { height: 300, width: "80%", padding: 10, backgroundColor: "white", marginHorizontal: "auto", borderRadius: 20, marginTop: 20, borderWidth: 2, borderColor: 'rgba(0,0,0,0.2)' },
  title: {
    width: "80%",
    marginHorizontal: "auto",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 20
  },
  description: {
    marginHorizontal: "auto",
    width: "80%",
    fontSize: 17
  }
})