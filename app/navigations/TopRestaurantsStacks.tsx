import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TopRestaurants from '../screens/TopRestaurants';

const TopRestaurantsStack = createStackNavigator();

function TopRestaurantsScreenStacks() {
  return (
    <TopRestaurantsStack.Navigator>
      <TopRestaurantsStack.Screen name="Top restaurantes" component={TopRestaurants} />
    </TopRestaurantsStack.Navigator>
  );
}

export default TopRestaurantsScreenStacks;
