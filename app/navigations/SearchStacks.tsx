import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Search from '../screens/Search';

const SearchStack = createStackNavigator();

function SearchScreenStacks() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="Buscador" component={Search} />
    </SearchStack.Navigator>
  );
}

export default SearchScreenStacks;
