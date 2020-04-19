import React, { useState } from 'react';
import { SocialIcon } from 'react-native-elements';
import * as firebase from 'firebase';
import Loading from '../Loading';
import * as Google from 'expo-google-app-auth';
import Toast from 'react-native-root-toast';
import { googleApi } from '../../utils/social';

interface Props {
  navigation: any;
}

const LoginGoogle = (props: Props) => {
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

  const signInWithGoogle = async () => {
    setIsLoading(true);
    try {
      const response = await Google.logInAsync({
        iosClientId: googleApi.IOS_CLIENT_ID,
        androidClientId: googleApi.ANDROID_CLIENT_ID,
        scopes: ['profile', 'email'],
      });

      if (response.type === 'success') {
        const credentials = await firebase.auth.GoogleAuthProvider.credential(response.idToken);
        await firebase.auth().signInWithCredential(credentials);
        navigation.navigate('Mi cuenta');
        return response.accessToken;
      } else {
        Toast.show('Inicio de sesión cancelado.', optionsToast);
      }
    } catch (e) {
      Toast.show(
        'Error accediendo a Facebook. Por favor, inténtelo de nuevo más tarde',
        optionsToast,
      );
    }
    setIsLoading(false);
  };

  return (
    <>
      <SocialIcon
        title="Iniciar sesión con Google"
        type="google"
        button
        onPress={signInWithGoogle}
      />
      <Loading isVisible={isLoading} text="Iniciando sesión..." />
    </>
  );
};

export default LoginGoogle;
