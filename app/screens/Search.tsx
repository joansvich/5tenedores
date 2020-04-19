import React from "react";
import { View, Text } from "react-native";

interface Props {}

const Search = (props: Props) => {
  return (
    <View  style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Estamos en la búsqueda</Text>
    </View>
  );
};

export default Search;
