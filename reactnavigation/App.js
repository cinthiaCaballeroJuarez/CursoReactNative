import 'react-native-gesture-handler';
import React from 'react';
import {

  StyleSheet,
  Text,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Inicio from './Views/Inicio';
import Nosotros from './Views/Nosotros';


const Stack = createStackNavigator();

const App = () => {
  
  return (
  <>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Inicio"
       options={{
          title: 'Componenete Principal',
          headerTitleAlign: 'center',
          headerStyle: { // estilos de la barra del menu
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: { // estilos del titulo de la barra del menu
            fontWeight: 'bold',
          }
        }}
        
     >
        <Stack.Screen 
          name="Inicio"
          component={Inicio}
             //screenOptions={{}} // es igual que el option pero aqui actua de manera general para todos los componentes
      
        />
        <Stack.Screen 
          name="Nosotros"
          component={Nosotros}
          options={({ route }) => ({
            title: route.params.clienteId,

          })}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  </>
  );
};

const styles = StyleSheet.create({

});

export default App;
