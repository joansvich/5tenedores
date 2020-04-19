import React, { useState } from 'react';

import firebase from 'firebase';

import { StyleSheet, View } from 'react-native';
import { Input, Icon, Button } from 'react-native-elements';
import { constants } from '../../constants/constants';
import { validateEmail } from '../../utils/Validation';
import Loading from '../Loading';

// import Toast from 'react-native-root-toast';

interface Props {
  navigation: any;
}

const RegisterForm = (props: Props) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [hideRepeatPassword, setHideRepeatPassword] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const [errorMessageEmail, setErrorMessageEmail] = useState('');
  const [errorMessagePassword, setErrorMessagePassword] = useState('');
  const [errorMessageRepeatPassword, setErrorMessageRepeatPassword] = useState('');

  const [isVisibleLoading, setIsVisibleLoading] = useState(false);

  const { navigation } = props;

  // const optionsToast = {
  //   duration: 2500,
  //   position: -100,
  //   shadow: true,
  //   animation: true,
  //   keyboardAvoiding: true,
  //   hideOnPress: true,
  //   backgroundColor: 'red',
  //   shadowColor: 'rgb(205, 0, 38)',
  //   delay: 0,
  // };

  const register = async () => {
    if (!email) {
      setErrorMessageEmail('No puede estar vacío');
    } else if (!validateEmail(email)) {
      setErrorMessageEmail('Introduce un formato correcto de correo');
    }
    if (!password) {
      setErrorMessagePassword('No puede estar vacío');
    }
    if (!repeatPassword) {
      setErrorMessageRepeatPassword('No puede estar vacío');
    }

    if (email && (password || repeatPassword)) {
      if (password !== repeatPassword) {
        setErrorMessagePassword('Las contraseñas no coinciden');
        setErrorMessageRepeatPassword('Las contraseñas no coinciden');
      }
      if (validateEmail(email) && password === repeatPassword) {
        setIsVisibleLoading(true);
        try {
          await firebase.auth().createUserWithEmailAndPassword(email, password);
          navigation.navigate('Mi cuenta');
        } catch (error) {
          console.log(error);
        }
        setIsVisibleLoading(false);
      }
    }
  };

  return (
    <View style={styles.fromContainer}>
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
      <Input
        placeholder="Repetir contrasenya"
        secureTextEntry={hideRepeatPassword}
        containerStyle={styles.inputForm}
        inputContainerStyle={
          errorMessageRepeatPassword.length > 0 && styles.inputErrorContainerStyle
        }
        errorMessage={errorMessageRepeatPassword}
        errorStyle={{ color: 'red' }}
        onChange={(e) => {
          setRepeatPassword(e.nativeEvent.text);
          if (errorMessageRepeatPassword.length > 0) {
            setErrorMessageRepeatPassword('');
          }
        }}
        rightIcon={
          <Icon
            type="material-community"
            name={hideRepeatPassword ? 'eye-outline' : 'eye-off-outline'}
            iconStyle={styles.iconRight}
            onPress={() => setHideRepeatPassword(!hideRepeatPassword)}
          />
        }
      />
      <Button
        title="Registrarse"
        containerStyle={styles.btnContainerRegister}
        buttonStyle={styles.btnRegister}
        onPress={register}
      />
      <Loading text={'Creando cuenta'} isVisible={isVisibleLoading} />
    </View>
  );
};

const styles = StyleSheet.create({
  fromContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  inputErrorContainerStyle: {
    borderColor: 'red',
  },
  inputForm: {
    width: '100%',
    marginTop: 10,
  },
  iconRight: {
    color: '#c1c1c1',
  },
  btnContainerRegister: {
    marginTop: 20,
    width: '95%',
  },
  btnRegister: {
    backgroundColor: constants.colorCorporative,
  },
});

export default RegisterForm;
