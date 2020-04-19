import React, { useRef } from 'react';

import { View, Text, StyleSheet, Image } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import RegisterForm from '../../Components/Account/RegisterForm';

interface Props {
  navigation: any;
}

const Register = (props: Props) => {
  const { navigation } = props;
  return (
    <KeyboardAwareScrollView>
      <Image
        source={require('../../../assets/img/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.viewForm}>
        <RegisterForm navigation={navigation} />
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: '100%',
    height: 150,
    marginTop: 20,
  },
  viewForm: {
    marginRight: 40,
    marginLeft: 40,
  },
});

export default Register;
