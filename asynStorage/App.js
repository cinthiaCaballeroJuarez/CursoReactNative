import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [inputTexto, guardarInputTexto] = useState('');
  const [nombreStorage, guardarNombreStorage] = useState('');

  useEffect(() => {

    obtenerDatosStorage();
  }, []);

  //GUARDAR DATOS
  const guardarDatos = async () => {
    try {
      await AsyncStorage.setItem('nombre', inputTexto);
      guardarNombreStorage(inputTexto); //actualizar el estado en tiempo real
    } catch (error) {
      console.log(error);
    }
  };

  //obtener datos del storage
  const obtenerDatosStorage = async () => {
    try {
      const nombre = await AsyncStorage.getItem('nombre');
      guardarNombreStorage(nombre);
    } catch (error) {
      console.log(error);
    }
  };

  //PARA ELIMINAR DATOS
  const eliminarDatos = async () => {
    try {
      await AsyncStorage.removeItem('nombre');
      guardarNombreStorage('');
    } catch (error) {
      console.log(error);
    }
      
  }
  

  return (
    <>
      <View style={styles.contenedor}>
        {nombreStorage ?  <Text>Hola: {nombreStorage}</Text> : null}
       
        <TextInput
          placeholder="Ingrese su nombre"
          style={styles.input}
          onChangeText={texto => guardarInputTexto(texto)}
        />

        <Button title="Guardar" color="#333" onPress={() => guardarDatos()} />
        
        {nombreStorage ? (
           <TouchableHighlight 
           onPress={ ()=> eliminarDatos()}
           style={styles.btnEliminar}>
             <Text style={styles.textoEliminar}>Eliminar Nombre &times;</Text>
           </TouchableHighlight>
        ) : null }
        
       
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:20
  },
  input: {
    borderColor: '#666',
    borderBottomWidth: 1,
    width: 300,
    height: 40,
    marginBottom: 20,
  },
  btnEliminar: {
    backgroundColor: 'red',
    marginTop: 20,
    marginBottom: 20,
    padding: 10,
  },
  textoEliminar: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    width: 300,
  },
});

export default App;
