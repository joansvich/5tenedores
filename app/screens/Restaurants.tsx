import React from "react";
import { View, Text } from "react-native";

interface Props {}

const Restaurants = (props: Props) => {
  return (
    <View  style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Estamos en restaurantes</Text>
    </View>
  );
};

export default Restaurants;
