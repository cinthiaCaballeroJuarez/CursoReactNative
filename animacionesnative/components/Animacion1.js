
import React, {useState, useEffect} from 'react'
import {Text,View,StyleSheet, Animated} from 'react-native'

const Animacion1 = () => {

    const [animacion] = useState(new Animated.Value(0));

    useEffect(() => {
      Animated.timing(animacion, {
        toValue: 450, // AL VALOR AL QUE LLEGA
        duration: 500, // TIEMPO DE LA ANIMACION
        useNativeDriver: false,
      }).start(); // INICIA LA ANIMACION
    }, []);


  return (
   <Animated.View
    style={{
        opacity:animacion
    }}
   >
       <Text style={styles.texto}>Animacion1</Text>
   </Animated.View>
  )
}

const styles = StyleSheet.create({
    texto: {
        fontSize: 30,
        textAlign: 'center',
    },
})
export default Animacion1