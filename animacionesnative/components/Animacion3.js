import React, {useState, useEffect} from 'react'
import {Text,View,StyleSheet, Animated} from 'react-native'

const Animacion3 = () => {

    const [animacion] = useState(new Animated.Value(0))

    useEffect(() => {
        Animated.timing(animacion, {
            toValue: 1, // AL VALOR AL QUE LLEGA
            duration: 500, // TIEMPO DE LA ANIMACION
            useNativeDriver: true
        }).start() // INICIA LA ANIMACION
    }, [])


  return (
   <View>
       <Animated.Text style={styles.texto}>Animacion 3</Animated.Text>
   </View>
  )
}

const styles = StyleSheet.create({
    texto: {
        fontSize: 30,
        textAlign: 'center',
    },
})
export default Animacion3
