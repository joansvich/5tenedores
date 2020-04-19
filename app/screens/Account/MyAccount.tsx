import React, { useState, useEffect } from 'react';
import * as firebase from 'firebase';

import { View, Text } from 'react-native';
import Loading from '../../Components/Loading';

import UserGuest from './UserGuest';
import UserLogged from './UserLogged';

interface Props {
  navigation: any;
}

const MyAccount = (props: Props) => {
  const [login, setLogin] = useState<boolean | null>(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      !user ? setLogin(false) : setLogin(true);
    });
  }, []);

  if (login === null) {
    return <Loading isVisible={true} text={'Cargando ...'} />;
  } else {
    return login ? <UserLogged /> : <UserGuest navigation={props.navigation} />;
  }
};

export default MyAccount;
