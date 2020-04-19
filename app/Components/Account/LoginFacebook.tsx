import React, { useState } from 'react';
import { SocialIcon } from 'react-native-elements';
import * as Facebook from 'expo-facebook';
import * as firebase from 'firebase';
import { facebookApi } from '../../utils/social';
import Loading from '../Loading';
import Toast from 'react-native-root-toast';

interface Props {
  navigation: any;
}

const LoginFacebook = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const { navigation } = props;

  const optionsToast = {
    duration: Toast.durations.LONG,
    position: Toast.positions.BOTTOM,
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 0,
  };

  const login = async () => {
    setIsLoading(true);
    try {
      await Facebook.initializeAsync(facebookApi.application_id);
      const response: Facebook.FacebookLoginResult = await Facebook.logInWithReadPermissionsAsync({
        permissions: facebookApi.permissions,
      });
      if (response.type === 'success') {
        const credentials = await firebase.auth.FacebookAuthProvider.credential(response.token);
        await firebase.auth().signInWithCredential(credentials);
        navigation.navigate('Mi cuenta');
      } else if (response.type === 'cancel') {
        Toast.show('Inicio de sesión cancelado.', optionsToast);
      } else {
        Toast.show(
          'Error accediendo a Facebook. Por favor, inténtelo de nuevo más tarde',
          optionsToast,
        );
      }
    } catch (error) {
      Toast.show(
        'Error accediendo a Facebook. Por favor, inténtelo de nuevo más tarde',
        optionsToast,
      );
    }
    setIsLoading(false);
  };

  return (
    <>
      <SocialIcon title="Iniciar sesión con Facebook" type="facebook" button onPress={login} />
      <Loading isVisible={isLoading} text="Iniciando sesión..." />
    </>
  );
};

export default LoginFacebook;
