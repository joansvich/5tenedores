import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Restaurants from "../screens/Restaurants";

const RestaurantsStack = createStackNavigator();

function RestaurantsScreenStacks() {
  return (
    <RestaurantsStack.Navigator>
      <RestaurantsStack.Screen name="Restaurantes" component={Restaurants} />
    </RestaurantsStack.Navigator>
  );
}

export default RestaurantsScreenStacks;
