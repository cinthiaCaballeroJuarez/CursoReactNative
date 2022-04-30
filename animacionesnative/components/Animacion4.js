import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, Animated} from 'react-native';

const Animacion4 = () => {
  const [animacion] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animacion, {
      toValue: 360, // AL VALOR AL QUE LLEGA
      duration: 500, // TIEMPO DE LA ANIMACION
      useNativeDriver: false,
    }).start(); // INICIA LA ANIMACION
  }, []);

  const interpolacion = animacion.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  });

  const estiloAnimacion = {
    transform: [{rotate: interpolacion}],
  };

  return (
    <View>
      <Animated.View
       style={[styles.caja, estiloAnimacion]}
       >
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  caja: {
    width: 100,
    height: 100,
    backgroundColor: 'cornflowerblue',
  },
});
export default Animacion4;
