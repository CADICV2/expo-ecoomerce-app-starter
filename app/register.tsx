import { ImageBackground, Text, TextInput, View, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView, Keyboard, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { Link, router, Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";  // Importamos los iconos
import Cdd from '@/assets/images/CCDLOGOWHITE.svg';
import Logo from '@/assets/images/user-svgrepo-com.svg';
import Lock from '@/assets/images/lock-svgrepo-com.svg';
import Toast from "react-native-toast-message";

const SignInScreen = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [value, setValue] = useState('');
  const [password, setPassword] = useState('');
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const [formValues, setFormValues] = useState({
    nombres: '',
    apellidos: '',
    correo: '',
    password: '',
    confirmPassword: ''
  });

  const [focusedInput, setFocusedInput] = useState('');
  
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

  const handleLogin = () => {
    if (value ===correctUsername  && password === correctPassword) {
      router.push('/(tabs)');
      Toast.show({
        type: 'success',
        text1: 'Inicio de sesión exitoso',
        text2: 'Bienvenido de nuevo.',
        visibilityTime: 4000,
        position: 'top'
      });
    } else {
     
      Toast.show({
        type: 'error',
        text1: 'Error de autenticación',
        text2: 'Credenciales incorrectas. Inténtalo de nuevo.',
        visibilityTime: 4000,
        position: 'top'
      });
    }
  };

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
              <View className="h-[15%] flex justify-center items-center mt-6">
                
              </View>

              <View className={`h-[85%] bg-gray-100 p-6 rounded-tl-3xl ${keyboardVisible ? 'mt-10' : ''}`}>
                <View className="w-[90%] mx-auto">
                  <Text className="mb-10 text-4xl font-extrabold text-center">Registro</Text>

                  <View className="relative mb-6 bg-white border-white border-1 rounded-2xl">
                    <Logo
                      className={`absolute ${isFocused ? 'top-[3px] scale-50 left-[50px]' : 'top-2 left-16 scale-100'} transition-all`}
                      width={20}
                      height={20}
                    />
                    <Text
                      className={`absolute left-2 ${isFocused || value ? 'top-[1px] text-xs font-semibold p-1 text-gray-500' : 'top-2 text-base font-semibold text-gray-500'} transition-all`}
                    >
                     Nombres
                    </Text>
                    <TextInput
                      value={value}
                      onChangeText={(text) => setValue(text)}
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => setIsFocused(false)}
                      placeholder={isFocused || value ? '' : 'Ejemplo@gmail.com'}
                      className="h-16 px-2 pt-4"
                    />
                  </View>
                  <View className="relative mb-6 bg-white border-white border-1 rounded-2xl">
                    <Logo
                      className={`absolute ${isFocused ? 'top-[3px] scale-50 left-[50px]' : 'top-2 left-16 scale-100'} transition-all`}
                      width={20}
                      height={20}
                    />
                    <Text
                      className={`absolute left-2 ${isFocused || value ? 'top-[1px] text-xs font-semibold p-1 text-gray-500' : 'top-2 text-base font-semibold text-gray-500'} transition-all`}
                    >
                      Apellidos
                    </Text>
                    <TextInput
                      value={value}
                      onChangeText={(text) => setValue(text)}
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => setIsFocused(false)}
                      placeholder={isFocused || value ? '' : 'Ejemplo@gmail.com'}
                      className="h-16 px-2 pt-4"
                    />
                  </View>
                  <View className="relative mb-6 bg-white border-white border-1 rounded-2xl">
                    <Logo
                      className={`absolute ${isFocused ? 'top-[3px] scale-50 left-[50px]' : 'top-2 left-16 scale-100'} transition-all`}
                      width={20}
                      height={20}
                    />
                    <Text
                      className={`absolute left-2 ${isFocused || value ? 'top-[1px] text-xs font-semibold p-1 text-gray-500' : 'top-2 text-base font-semibold text-gray-500'} transition-all`}
                    >
                      Correo
                    </Text>
                    <TextInput
                      value={value}
                      onChangeText={(text) => setValue(text)}
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => setIsFocused(false)}
                      placeholder={isFocused || value ? '' : 'Ejemplo@gmail.com'}
                      className="h-16 px-2 pt-4"
                    />
                  </View>
               

                  <View className="relative mb-6 bg-white border-white border-1 rounded-2xl">
                    <Lock
                      className={`absolute ${isFocused2 ? 'top-[3px] scale-50 left-[70px]' : 'top-[6px] left-[93px] scale-100'} transition-all`}
                      width={20}
                      height={20}
                    />
                    <Text
                      className={`absolute left-2 ${isFocused2 || password ? 'top-[1px] text-xs font-semibold p-1 text-gray-500' : 'top-2 text-base font-semibold text-gray-500'} transition-all`}
                    >
                      Contraseña
                    </Text>
                    <TextInput
                      value={password}
                      onChangeText={(text) => setPassword(text)}
                      onFocus={() => setIsFocused2(true)}
                      onBlur={() => setIsFocused2(false)}
                      placeholder={isFocused2 || password ? '' : 'Cadic12314'}
                      className="h-16 px-2 pt-4"
                      secureTextEntry={!isPasswordVisible}
                    />
                    <TouchableOpacity
                      onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                      className="absolute transform -translate-y-1/2 right-4 top-1/2"
                    >
                      <Ionicons name={isPasswordVisible ? 'eye-off' : 'eye'} size={24} color="gray" />
                    </TouchableOpacity>
                  </View>

                  <View className="relative mb-6 bg-white border-white border-1 rounded-2xl">
                    <Lock
                      className={`absolute ${isFocused2 ? 'top-[3px] scale-50 left-[70px]' : 'top-[6px] left-[93px] scale-100'} transition-all`}
                      width={20}
                      height={20}
                    />
                    <Text
                      className={`absolute left-2 ${isFocused2 || password ? 'top-[1px] text-xs font-semibold p-1 text-gray-500' : 'top-2 text-base font-semibold text-gray-500'} transition-all`}
                    >
                      Confirmar Contraseña
                    </Text>
                    <TextInput
                      value={password}
                      onChangeText={(text) => setPassword(text)}
                      onFocus={() => setIsFocused2(true)}
                      onBlur={() => setIsFocused2(false)}
                      placeholder={isFocused2 || password ? '' : 'Cadic12314'}
                      className="h-16 px-2 pt-4"
                      secureTextEntry={!isPasswordVisible}
                    />
                    <TouchableOpacity
                      onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                      className="absolute transform -translate-y-1/2 right-4 top-1/2"
                    >
                      <Ionicons name={isPasswordVisible ? 'eye-off' : 'eye'} size={24} color="gray" />
                    </TouchableOpacity>
                  </View>

                  <TouchableOpacity
                  
                    className="p-4 py-6 bg-black rounded-l-xl rounded-br-xl"
                    onPress={handleLogin}
                  >
                    
                    <Text className="font-semibold text-center text-white">Iniciar Sesión</Text>
                  </TouchableOpacity>

                  <View className="flex flex-row justify-center my-6">
                    <Text>¿No tienes una cuenta ? </Text>
                    <Link href='/register'>
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

export default SignInScreen;
