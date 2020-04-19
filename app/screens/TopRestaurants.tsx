import React from "react";
import { View, Text } from "react-native";

interface Props {}

const TopRestaurants = (props: Props) => {
  return (
    <View  style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Estamos en TopRestaurants</Text>
    </View>
  );
};

export default TopRestaurants;
