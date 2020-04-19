import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import { Button } from 'react-native-elements';
import firebase from 'firebase';
import InfoUser from '../../Components/Account/InfoUser';

interface Props {}

const UserLogged = ({}: Props) => {
  const [userInfo, setUserInfo] = useState<any>({});
  useEffect(() => {
    (async () => {
      const user = await firebase.auth().currentUser;
      setUserInfo(user && user.providerData[0]);
    })();
  }, []);

  return (
    <View>
      <InfoUser userInfo={userInfo} />
      <Button title="Cerrar sesión" onPress={() => firebase.auth().signOut()} />
    </View>
  );
};

export default UserLogged;
