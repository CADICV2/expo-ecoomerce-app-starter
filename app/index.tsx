import { ImageBackground, Text, TextInput, View, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView, Keyboard, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { Link, router, Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";  // Importamos los iconos
import Google from '@/assets/images/CCDLOGOWHITE.svg';
import Logo from '@/assets/images/user-svgrepo-com.svg';
import Lock from '@/assets/images/lock-svgrepo-com.svg';


const WelcomeScreen = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [value, setValue] = useState('');
  const [password, setPassword] = useState('');
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  const handleLogin = () => {
    console.log('Intento de inicio de sesión con:', { value, password });
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true); // Cuando el teclado se abre, ajustamos el estado.
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false); // Cuando el teclado se cierra, restauramos el estado.
      }
    );

    // Limpiar los listeners cuando el componente se desmonte
    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

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
            <View className="flex-1 justify-center">
              {/* Contenedor del Logo - ocupa el 30% de la pantalla */}
              <View className="h-[30%] flex justify-center items-center mt-6">
                <Google
                  className={` aspect-[1]  rounded-l-xl rounded-br-xl    p-4 ${keyboardVisible ? 'mt-10' : ''} `}
                  width={150}
                  height={150}
                />
              </View>

              {/* Contenedor de Login */}
              <View className={`h-[70%] bg-gray-100 p-6 rounded-tl-3xl ${keyboardVisible ? 'mt-10' : ''}`}>
                <View className="w-[90%] mx-auto">
                  <Text className="text-4xl text-center font-extrabold mb-10">Login</Text>

                  {/* Campo Usuario */}
                  <View className="relative mb-6 bg-white border-white border-1 rounded-2xl">
                    <Logo
                      className={`absolute  ${isFocused ? ' top-[3px] scale-50  left-[50px] ' : 'top-2 left-16 scale-100'} transition-all`}
                      width={20}
                      height={20}
                    />
                    <Text
                      className={`absolute left-2 ${isFocused || value ? 'top-[1px] text-xs font-semibold p-1 text-gray-500' : 'top-2 text-base font-semibold text-gray-500'} transition-all`}
                    >
                      Usuario
                    </Text>
                    <TextInput
                      value={value}
                      onChangeText={(text) => setValue(text)}
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => setIsFocused(false)}
                      placeholder={isFocused || value ? '' : 'Ejemplo@gmail.com'}
                      className="h-16  px-2 pt-4"
                    />
                  </View>

                  {/* Campo Contraseña */}
                  <View className="relative mb-6 bg-white border-white border-1 rounded-2xl ">
                    <Lock
                      className={`absolute  ${isFocused2 ? ' top-[3px] scale-50  left-[70px] ' : 'top-[6px] left-[93px] scale-100'} transition-all`}
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
                      className="h-16  px-2 pt-4"
                      secureTextEntry={!isPasswordVisible}
                    />
                    {/* Icono de Ojo para ver la contraseña */}
                    <TouchableOpacity
                      onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2"
                    >
                      <Ionicons name={isPasswordVisible ? 'eye-off' : 'eye'} size={24} color="gray" />
                    </TouchableOpacity>
                  </View>

                  {/* Botón de Iniciar Sesión */}

                  <TouchableOpacity
                    className="bg-black rounded-l-xl rounded-br-xl p-4 py-6"
                    onPress={() => {
                      router.push('/(tabs)'); // Navega a la pantalla de los tabs
                    }}
                  >
                    <Text className="text-white text-center font-semibold">Iniciar Sesión</Text>
                  </TouchableOpacity>

                  {/* Enlace para registrarse */}
                  <View className="flex flex-row justify-center my-6">
                    <Text>¿No recuerdas tu contraseña? </Text>
                    <Link href='/signup'>

                      <Text className="text-gray-500 font-extrabold">Ingresa Aquí</Text>
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

// export default WelcomeScreen;
