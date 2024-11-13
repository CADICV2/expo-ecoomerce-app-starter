import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import Toast, { ToastConfigParams } from 'react-native-toast-message';
import { View, Text } from 'react-native';
import 'react-native-reanimated';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  // Configuración personalizada del Toast
  const customToastConfig = {
    error: ({ text1, text2 }:ToastConfigParams<any>) => (
      <View style={{
        height: 60,
        width: '90%',
        backgroundColor: '#ff4d4d',
        borderRadius: 8,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
      }}>
        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>{text1}</Text>
        <Text style={{ color: '#fff', fontSize: 14 }}>{text2}</Text>
      </View>
    ),
    success: ({ text1, text2 }:ToastConfigParams<any>) => (
      <View style={{
        height: 60,
        width: '90%',
        backgroundColor: '#4BB543',
        borderRadius: 8,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
      }}>
        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>{text1}</Text>
        <Text style={{ color: '#fff', fontSize: 14 }}>{text2}</Text>
      </View>
    ),
  };

  return (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="register" options={{ presentation: 'modal' }} />
        <Stack.Screen name="login" options={{ presentation: 'modal' }} />
      </Stack>
      {/* Configuración global del Toast con customToastConfig */}
      <Toast config={customToastConfig} />
    </>
  );
}
