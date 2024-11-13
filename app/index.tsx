import { ImageBackground, Text, TextInput, View, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView, Keyboard, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { Link, router, Stack } from "expo-router";
import { AntDesign, Entypo, FontAwesome5, Ionicons } from "@expo/vector-icons";  // Importamos los iconos
import Cdd from '@/assets/images/CCDLOGOWHITE.svg';
import Logo from '@/assets/images/user-svgrepo-com.svg';
import Lock from '@/assets/images/lock-svgrepo-com.svg';
import Toast from "react-native-toast-message";
import { Colors } from "@/constants/Colors";


const WelcomeScreen = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [value, setValue] = useState('');
  const [password, setPassword] = useState('');
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  const correctUsername = "User@gmail.com";
  const correctPassword = "12345";

  // 895505781096-iad4815g3pev8k14veqcr79o5pl9jbhi.apps.googleusercontent.com

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => setKeyboardVisible(true)
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => setKeyboardVisible(false)
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  // const handleLogin = () => {
  //   if (value === correctUsername && password === correctPassword) {
  //     router.push('/(tabs)');
  //     Toast.show({
  //       type: 'success',
  //       text1: 'Inicio de sesión exitoso',
  //       text2: 'Bienvenido de nuevo.',
  //       visibilityTime: 4000,
  //       position: 'top'
  //     });
  //   } else {

  //     Toast.show({
  //       type: 'error',
  //       text1: 'Error de autenticación',
  //       text2: 'Credenciales incorrectas. Inténtalo de nuevo.',
  //       visibilityTime: 4000,
  //       position: 'top'
  //     });
  //   }
  // };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <ImageBackground
        source={require('@/assets/images/images.jpg')}
        className="flex-1"
        resizeMode="cover"
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          className="flex-1"
        >
          <ScrollView contentContainerStyle={{ flexGrow: 1 }} bounces={false}>
            <View className="justify-center flex-1">
              <View className="h-[30%] flex justify-center items-center mt-6">
                <Cdd
                  className={` aspect-[1] rounded-l-xl rounded-br-xl p-4 ${keyboardVisible ? 'mt-10' : ''}`}
                  width={150}
                  height={150}
                />
              </View>

              <View className={`h-[70%] bg-gray-100 p-6 rounded-tl-[70px] ${keyboardVisible ? 'mt-10' : ''}`}>
                <View className="w-[90%] mx-auto">
                  <Text className="mb-2 text-3xl font-extrabold text-center">Bienvenido a CCD</Text>
                  <Text className="mb-10 text-sm font-semibold text-center text-gray-400">Tu espacio para aprender y crecer.</Text>


                  <Link href="/login" asChild>
                    <TouchableOpacity className="p-4 py-6 my-2 bg-black rounded-l-xl rounded-br-xl">
                      <Text className="font-semibold text-center text-white">Iniciar Sesión</Text>
                    </TouchableOpacity>
                  </Link>
                  <Link href="/register" asChild>
                  <TouchableOpacity
                    className="p-4 py-6 my-2 bg-black my m rounded-l-xl rounded-br-xl"

                  >
                    <Text className="font-semibold text-center text-white">Registrarse</Text>
                  </TouchableOpacity>
                  </Link>
                  <Text className="mt-4 font-semibold text-center text-gray-400">- O inicia sesión con -</Text>
                  <View
                    className="flex flex-row justify-between py-6 my-2 rounded-l-xl rounded-br-xl"

                  >
                    <TouchableOpacity className="p-4 mr-3 bg-black m rounded-xl">
                      <AntDesign name="google" size={24} color={Colors.white} />
                    </TouchableOpacity>
                    <TouchableOpacity className="p-4 mr-3 bg-black m rounded-xl">
                      <FontAwesome5 name="facebook" size={24} color={Colors.white} />
                    </TouchableOpacity>
                    <TouchableOpacity className="p-4 mr-3 bg-black m rounded-xl">
                      <Entypo name="linkedin-with-circle" size={24} color={Colors.white} />
                    </TouchableOpacity>
                    <TouchableOpacity className="p-4 mr-3 bg-black m rounded-xl">
                      <AntDesign name="apple-o" size={24} color={Colors.white} />
                    </TouchableOpacity>
                  </View>

                  
                  <View className="flex flex-row justify-center my-6">
                    <Text>¿No recuerdas tu contraseña? </Text>
                    <Link href='/login'>
                      <Text className="font-extrabold text-gray-500">Ingresa Aquí</Text>
                    </Link>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </ImageBackground>
    </>
  );
};

export default WelcomeScreen;
