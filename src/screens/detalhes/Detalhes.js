import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Avatar, Card, Text } from "react-native-paper";
import Api from "../../services/Api";

export default function Detalhes(props) {
  const [detalhes, setDetalhes] = useState();
  const restauranteid = props.route.params.id;
  const navigation = props.navigation;

  useEffect(() => {
    Api.get("/restaurantes/" + restauranteid)
      .then((response) => {
        setDetalhes(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar detalhes", error);
      });
  }, []);
  return (
    <View>
      {detalhes ? (
        <Card
          onPress={() => {
            navigation.navigate("Detalhes", detalhes);
          }}
        >
          <Card.Title
            title={detalhes.nome}
            subtitle={detalhes.tipo_cozinha}
            left={() => (
              <Avatar.Image size={48} source={{ uri: detalhes.imagem }} />
            )}
          />
          <Card.Cover source={{ uri: detalhes.imagem }} />
          <Card.Content>
            <View>
              <Text>Nome: {detalhes.nome}</Text>
            </View>
            <View>
              <Text>Tipo de Cozinha: {detalhes.tipo_cozinha}</Text>
            </View>
            <View>
              <Text>Endereço: {detalhes.endereco}</Text>
            </View>
            <View>
              <Text>
                Horário de Funcionamento: {detalhes.horario_funcionamento}
              </Text>
            </View>
          </Card.Content>
        </Card>
      ) : (
        <Text>carregando</Text>
      )}
    </View>
  );
}
