import React, { useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

const MyCustomCarousel = () => {
  // Estado para controlar el índice de la imagen actual
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array de imágenes para el carrusel
  const images = [
    { id: '1', source: require('../assets/images/CCDLOGOWHITE.svg'), label: 'Imagen 1' },
    { id: '2', source: require('../assets/images/sale-banner.jpg'), label: 'Imagen 2' },
    { id: '3', source: require('../assets/images/images.jpg'), label: 'Imagen 3' },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <View style={styles.slide}>
            <Image source={item.source} style={styles.image} />
            <Text style={styles.imageText}>{item.label}</Text>
          </View>
        )}
        onMomentumScrollEnd={(event) => {
          const contentOffsetX = event.nativeEvent.contentOffset.x;
          const newIndex = Math.floor(contentOffsetX / styles.image.width);
          setCurrentIndex(newIndex); // Actualiza el índice cuando se termina el deslizamiento
        }}
        pagingEnabled
        snapToAlignment="center"
        style={styles.flatList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10, // Espaciado entre las imágenes
  },
  image: {
    width: 300,  // Ajusta el tamaño de la imagen
    height: 200, // Ajusta la altura de la imagen
    resizeMode: 'contain',  // Mantiene la proporción de la imagen
  },
  imageText: {
    color: '#fff',
    position: 'absolute',
    fontSize: 20,
    fontWeight: 'bold',
    bottom: 10,
  },
  flatList: {
    flexGrow: 0,
  },
});

export default MyCustomCarousel;
