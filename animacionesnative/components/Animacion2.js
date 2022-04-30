import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Animated} from 'react-native';

const Animacion2 = () => {
  const [animacion] = useState(new Animated.Value(14));

  useEffect(() => {
    Animated.timing(animacion, {
      toValue: 450, // AL VALOR AL QUE LLEGA
      duration: 1000, // TIEMPO DE LA ANIMACION
      useNativeDriver: false,
    }).start(); // INICIA LA ANIMACION
  }, []);

  return (
    <Animated.View
      style={[
        styles.caja,
        {
          width: animacion,
          height: animacion,
        },
      ]}>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  caja: {
    width: 50,
    height: 50,
    backgroundColor: 'cornflowerblue',
  },
});
export default Animacion2;
