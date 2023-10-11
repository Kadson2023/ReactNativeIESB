import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { Avatar, Card, IconButton } from 'react-native-paper'
import Api from '../../services/Api'

export default function Home(props) {

  const navigation = props.navigation
  const [restaurante, setRestaurante] = useState([])

  useEffect(() => {

    Api.get('/restaurantes')
      .then(response => {
        setRestaurante(response.data)
      })
      .catch(error => {
        console.error("ERRO", error)
      })
  }, [])

  return (
    <View>
      <FlatList
        data={restaurante}
        renderItem={({ item }) => {
          return (
            <Card onPress={() => {
              navigation.navigate('Detalhes', { id: item.id })
            }}>
              <Card.Title
                title={item.nome}
                subtitle={item.tipo_cozinha}
                left={() => <Avatar.Image size={48} source={{ uri: item.imagem }} />}
                right={() => <IconButton icon="chevron-right" />}
              />
            </Card>
          )
        }}
      />
    </View >
  )
}

const styles = StyleSheet.create({})