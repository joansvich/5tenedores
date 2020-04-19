import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Avatar } from 'react-native-elements';
import * as firebase from 'firebase';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';

interface Props {
  userInfo: any;
}

const InfoUser = (props: Props) => {
  const {
    userInfo: { uid, displayName, email, photoURL },
  } = props;

  const changeAvatar = async () => {
    try {
      const resultPermission = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      const resultPermissionCamera = resultPermission.permissions.cameraRoll.status;
      console.log(resultPermissionCamera);
      if (resultPermissionCamera === 'denied') {
        // necesario aceptar permisos
      } else {
        const result = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
          aspect: [4, 3],
        });
      }
    } catch (error) {}
  };

  return (
    <View style={styles.viewUserInfo}>
      <Avatar
        rounded
        size="large"
        showEditButton
        onEditPress={changeAvatar}
        containerStyle={styles.userInfoContainerAvatar}
        source={{
          uri: photoURL
            ? photoURL
            : 'https://api.adorable.io/avatars/285/nice.png',
        }}
      />
      <View>
        <Text style={styles.displayName}>{displayName ? displayName : 'Anónimo'}</Text>
        <Text style={styles.displayName}>{email ? email : 'Social Login'}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewUserInfo: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    paddingTop: 30,
    paddingBottom: 30,
  },
  userInfoContainerAvatar: {
    marginRight: 20,
  },
  displayName: {
    fontWeight: 'bold',
  },
});

export default InfoUser;
