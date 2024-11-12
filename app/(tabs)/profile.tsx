import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const ProfileScreen = () => {
  const router = useRouter();

  const goToRootIndex = () => {
    // Navegar fuera del stack de pestañas al index principal
    router.replace({ pathname: '/login' });
  };

  return (
    <View style={styles.container}>
      <Text>Pantalla de Perfil</Text>
      <Button title="Salir de Tabs y regresar al inicio" onPress={goToRootIndex} />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
