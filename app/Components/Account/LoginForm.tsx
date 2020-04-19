import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Icon, Button } from 'react-native-elements';
import firebase from 'firebase';

import { constants } from '../../constants/constants';
import { validateEmail } from '../../utils/Validation';
import Loading from '../Loading';

interface Props {
  navigation: any;
}

const Login = (props: Props) => {
  const { navigation } = props;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [isVisibleLoading, setIsVisibleLoading] = useState(false);

  /* VALIDACIÓN FORMS */

  const [errorMessageEmail, setErrorMessageEmail] = useState('');
  const [errorMessagePassword, setErrorMessagePassword] = useState('');

  /* ---------------- */

  const login = async () => {
    if (!email) {
      setErrorMessageEmail('No puede estar vacío');
    } else if (!validateEmail(email)) {
      setErrorMessageEmail('Introduce un email válido');
    }
    if (!password) {
      setErrorMessagePassword('No puede estar vacío');
    }

    if (email && password && validateEmail(email)) {
      setIsVisibleLoading(true);
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        navigation.navigate('Mi cuenta');
      } catch (error) {
        if (error.code === 'auth/user-not-found') {
          setErrorMessageEmail('El usuario no existe');
        } else if (error.code === 'auth/wrong-password') {
          setErrorMessagePassword('La contraseña no es correcta');
        }
      }
      setIsVisibleLoading(false);
    }
  };

  return (
    <View style={styles.formContainer}>
      <Input
        placeholder="Correo electronico"
        containerStyle={styles.inputForm}
        inputContainerStyle={errorMessageEmail.length > 0 && styles.inputErrorContainerStyle}
        errorMessage={errorMessageEmail}
        errorStyle={{ color: 'red', borderColor: 'red' }}
        onChange={(e) => {
          setEmail(e.nativeEvent.text);
          if (errorMessageEmail.length > 0) {
            setErrorMessageEmail('');
          }
        }}
        rightIcon={<Icon type="material-community" name="at" iconStyle={styles.iconRight} />}
      />
      <Input
        placeholder="Contrasenya"
        secureTextEntry={hidePassword}
        containerStyle={styles.inputForm}
        inputContainerStyle={errorMessagePassword.length > 0 && styles.inputErrorContainerStyle}
        errorMessage={errorMessagePassword}
        errorStyle={{ color: 'red' }}
        onChange={(e) => {
          setPassword(e.nativeEvent.text);
          if (errorMessagePassword.length > 0) {
            setErrorMessagePassword('');
          }
        }}
        rightIcon={
          <Icon
            type="material-community"
            name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
            iconStyle={styles.iconRight}
            onPress={() => setHidePassword(!hidePassword)}
          />
        }
      />
      <Button
        title="Iniciar sesión"
        containerStyle={styles.btnContainerLogin}
        buttonStyle={styles.btnLogin}
        onPress={login}
      />
      <Loading isVisible={isVisibleLoading} text="Iniciando sesión" />
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  inputForm: {
    width: '100%',
    marginTop: 20,
  },
  iconRight: {
    color: '#c1c1c1',
  },
  btnContainerLogin: {
    marginTop: 20,
    width: '95%',
  },
  btnLogin: {
    backgroundColor: constants.colorCorporative,
  },
  inputErrorContainerStyle: {
    borderColor: 'red',
  },
});

export default Login;
