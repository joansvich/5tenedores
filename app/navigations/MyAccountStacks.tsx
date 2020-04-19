import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MyAccount from '../screens/Account/MyAccount';
import Login from '../screens/Account/Login';
import Register from '../screens/Account/Register';

const MyAccountStack = createStackNavigator();

function MyAccountScreenStacks() {
  return (
    <MyAccountStack.Navigator>
      <MyAccountStack.Screen name="Mi cuenta" component={MyAccount} />
      <MyAccountStack.Screen name="Login" component={Login} />
      <MyAccountStack.Screen name="Registro" component={Register} />
    </MyAccountStack.Navigator>
  );
}

export default MyAccountScreenStacks;
