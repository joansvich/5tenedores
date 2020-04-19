import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { constants } from '../../constants/constants';

interface Props {
  navigation: any;
}

const CreateAccount = (props: Props) => {
  const { navigation } = props;
  return (
    <Text style={styles.textRegister}>
      ¿Aún no tienes una cuenta? 
      <Text style={styles.btnRegister} onPress={() => navigation.navigate('Registro')}>
        Regístrate
      </Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  textRegister: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  btnRegister: {
    color: constants.colorCorporative,
    fontWeight: 'bold',
  },
});

export default CreateAccount;
