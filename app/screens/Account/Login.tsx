import React, { useState } from 'react';

import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { Divider } from 'react-native-elements';

import CreateAccount from '../../Components/Account/CreateAccount';
import LoginForm from '../../Components/Account/LoginForm';
import LoginFacebook from '../../Components/Account/LoginFacebook';
import { constants } from '../../constants/constants';
import LoginGoogle from '../../Components/Account/LoginGoogle';

interface Props {
  navigation: any;
}

const Login = (props: Props) => {
  return (
    <ScrollView>
      <Image
        source={require('../../../assets/img/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.viewContainer}>
        <LoginForm navigation={props.navigation} />
        <CreateAccount navigation={props.navigation} />
      </View>
      <Divider style={styles.divider} />
      <View style={styles.viewContainer}>
        <LoginFacebook navigation={props.navigation} />
        <LoginGoogle navigation={props.navigation} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: '100%',
    height: 150,
    marginTop: 20,
  },
  viewContainer: {
    marginRight: 40,
    marginLeft: 40,
  },
  divider: {
    backgroundColor: constants.colorCorporative,
    margin: 40,
  },
});

export default Login;
