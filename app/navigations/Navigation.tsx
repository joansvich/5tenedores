import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import RestaurantsScreenStacks from './RestaurantsStacks';
import TopRestaurantsScreenStacks from './TopRestaurantsStacks';
import SearchScreenStacks from './SearchStacks';
import MyAccountScreenStacks from './MyAccountStacks';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen
          name="Restaurantes"
          component={RestaurantsScreenStacks}
          options={{
            tabBarIcon: ({ focused, color, size }) => <Ionicons name="ios-restaurant" size={size} color={color} />,
          }}
        />
        <Tab.Screen
          name="Top restaurantes"
          component={TopRestaurantsScreenStacks}
          options={{
            tabBarIcon: ({ focused, color, size }) => <Ionicons name={focused ? 'md-star' : 'md-star-outline'} size={size} color={color} />,
          }}
        />
        <Tab.Screen
          name="Buscar"
          component={SearchScreenStacks}
          options={{
            tabBarIcon: ({ focused, color, size }) => <Ionicons name="ios-search" size={size} color={color} />,
          }}
        />
        <Tab.Screen
          name="Mi cuenta"
          component={MyAccountScreenStacks}
          options={{
            tabBarIcon: ({ focused, color, size }) => <Ionicons name="ios-home" size={size} color={color} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
