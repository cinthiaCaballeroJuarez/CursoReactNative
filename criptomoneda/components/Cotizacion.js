import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const Cotizacion = ({resultado}) => {
  if (Object.keys(resultado).length === 0) return null;
  return (
    <View style={styles.resultado}>

      <Text style={[styles.texto, styles.precio]}>
        <Text style={styles.span}>{resultado.PRICE}</Text>
      </Text>

      <Text style={styles.texto}>Precio más alto del día: {' '} 
        <Text style={styles.span}>{resultado.HIGHDAY}</Text>
      </Text>

      <Text style={styles.texto}>Precio más bajo del día: {' '}
        <Text style={styles.span}>{resultado.LOWDAY}</Text>
      </Text>

      <Text style={styles.texto}>Variación últimas 24 horas: {' '} 
        <Text style={styles.span}>{resultado.CHANGEPCT24HOUR} %</Text>
      </Text>

      <Text style={styles.texto}>Ultima actualización: {' '} 
        <Text style={styles.span}>{resultado.LASTUPDATE}</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
   resultado: {
     backgroundColor: '#5E49E2',
     padding: 20,
      marginTop: 20,
   },
   texto: {
      color: '#fff',
      fontSize: 18,
      fontFamily: 'Lato-Regular',
  
   },
   precio: {
      fontSize: 38,
   },
   span: {
      fontFamily: 'Lato-Black',
   }

});

export default Cotizacion;