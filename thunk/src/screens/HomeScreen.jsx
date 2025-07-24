import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../redux/slices/userSlice'

const HomeScreen = () => {

    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(fetchUsers());

    }, [])

    const { users, error, isLoading } = useSelector(state => state.users)


    return (
        <View style={{flex:1, justifyContent:"center",alignItems:"center"}}>
            {
                isLoading
                    ? <ActivityIndicator size={'large'}/>
                    : error ?
                    <Text>Bir hata oluştu.</Text>
                    :
                    users.map((user,key)=>(
                        <Text key={key}>
                            {user.username}
                        </Text>
                    ))
            }
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})