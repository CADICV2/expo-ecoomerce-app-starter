import { SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import Carrusel from '@/components/carrusel'



type Props = {}

const HomeScreen = (props: Props) => {
  const categories = [
    { id: 1, name: 'Gestion', active: true },
    { id: 2, name: 'Ingenieria', active: false },
    { id: 3, name: 'Mineria', active: false },
  ]

  const popularCourses = [
    {
      id: 1,
      title: 'Ingenieria Nuclear',
      lessons: 12,
      rating: 4.8,
      image: '/placeholder.svg?height=100&width=100',
    },
    {
      id: 2,
      title: 'Estabilidad de taludes',
      lessons: 28,
      rating: 4.9,
      image: '/placeholder.svg?height=100&width=100',
    },
  ]

 
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
    <ScrollView contentContainerStyle={{}}>
    <View className={`flex-1 bg-black pt-12`}>
      {/* Header */}
      <View className={`flex-row justify-between items-center px-4 mb-6`}>
        <View>
          <Text className={`text-lg font-bold text-white`}>Hola Cadic!</Text>
          <Text className={`text-2xl font-bold text-white`}>Radasdasdasdasd</Text>
        </View>
        <Image
          source={{ uri: '/placeholder.svg?height=40&width=40' }}
          className={`w-10 h-10 rounded-full`}
        />
      </View>

      {/* Search Bar */}
      <View className={`px-4 mb-6`}>
        <View className={`flex-row items-center bg-gray-100 rounded-xl px-4 py-2`}>
        <Ionicons name="search" size={30} color="black" />
          <TextInput
            placeholder="Buscar..."
            className={`flex-1 ml-2 text-base`}
            placeholderTextColor="#666"
          />
        </View>
      </View>

      {/* Categories */}
      <View className={`mb-6`}>
        <Text className={`px-4 text-lg font-bold mb-3 text-white`}>Categorias</Text>
          <View className='flex flex-row w-[90%] p-2 mx-auto '>
             {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              className={`${category.active ? 'bg-blue-500 border-blue-500' : 'border-gray-300'} mr-3 px-6 py-2 rounded-full border`}
            >
              <Text
                className={`${category.active ? 'text-white' : 'text-gray-600'} text-sm font-medium`}
              >
                {category.name}
              </Text>
            </TouchableOpacity>
          ))}
          </View>
         
        
      </View>

      {/* Featured Course */}
      <View className={`px-4 mb-6 flex flex-row justify-center`}>
        
          <Carrusel  />
        
      </View>

      {/* Popular Courses */}
      <View className={`px-4`}>
        <Text className={`text-lg font-bold mb-4 text-white`}>Cursos</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          {popularCourses.map((course) => (
            <TouchableOpacity
              key={course.id}
              className={`bg-gray-50 p-4 rounded-xl mb-4 flex-row justify-between items-center`}
            >
              <View className={`flex-1`}>
                <Text className={`text-lg font-bold mb-1`}>{course.title}</Text>
                <Text className={`text-sm text-gray-500 mb-2`}>{course.lessons} Clases</Text>
                <View className={`flex-row items-center`}>
                  <Text className={`text-yellow-500 mr-1`}>{course.rating}</Text>
                  <Text className={`text-yellow-500`}>★</Text>
                </View>
              </View>
              <Image
                source={{ uri: course.image }}
                className={`w-20 h-20 rounded-xl`}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
    </ScrollView>
    </SafeAreaView>
    
  )
}

export default HomeScreen
