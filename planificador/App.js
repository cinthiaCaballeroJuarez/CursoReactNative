import React, {useState, useEffect} from 'react';

import {
  ScrollView, 
  StyleSheet, 
  View, 
  Alert, 
  Pressable, 
  Image,
  Modal
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from './src/components/Header';
import NuevoPresupuesto from './src/components/NuevoPresupuesto';
import ControlPresupuesto from './src/components/ControlPresupuesto';
import FormularioGasto from './src/components/FormularioGasto';
import { geneararId} from './src/helpers';
import ListadoGastos from './src/components/ListadoGastos';
import Filtro from './src/components/Flitro';

const App = () => {
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [presupuesto, setPresupuesto] = useState(0);
  const [gastos, setGastos] = useState([]);
  const [modal, setModal] = useState(false);
  const [gasto, setGasto] = useState({});
  const [filtro, setFiltro] = useState('');
  const [gastosFiltrados, setGastoFiltrados] = useState([]);

  useEffect(() => {
    const obtenerPresupuestoStorage = async ()=>{
      try {
        const presupuestoStorage = await AsyncStorage.getItem('planificador_presupuesto') ?? 0
        console.log(presupuestoStorage);
        if (presupuestoStorage > 0){
          setPresupuesto(presupuestoStorage);
          setIsValidPresupuesto(true);
        }
      } catch (error) {
        console.log(error)
      }
    }
    obtenerPresupuestoStorage()
  } , []);

//almacenando presupuesto storage
  useEffect(() => {
    if(isValidPresupuesto){
      const guardarPresupuesto = async () => {
          try {
          await AsyncStorage.setItem(
            'planificador_presupuesto',
            presupuesto,
          );
          } catch (error) {
            
          }
      }
      guardarPresupuesto();
    }
  } , [isValidPresupuesto]);

  useEffect(() => {
    const obtenerGastosStorage = async ()=>{
      try {
        const gastosStorage = await AsyncStorage.getItem('planificador_gastos') ?? '[]'
      ;
        setGastos(gastosStorage ? JSON.parse(gastosStorage) : []); 
      } catch (error) {
        console.log(error)
      }
    }
    obtenerGastosStorage()
  } , []);

//almacenado gastos en el storage
  useEffect(() => {
    const guardarGastosStorage = async () =>{
      try {
        await AsyncStorage.setItem(
          'planificador_gastos',
          JSON.stringify(gastos)
        );
      } catch (error) {
        console.log(error)
      }
    }
    guardarGastosStorage();
  } , [gastos]);


  const handleNuevoPresupuesto = (presupuesto) => {
    if (Number(presupuesto) > 0){
      setIsValidPresupuesto(true);
    }else{
      Alert.alert('Error', 'El presupuesto  no puede ser 0 o menor', [
        {text: 'OK'},
      ]);
    }
  }
  
  const handleGasto = gasto =>{
    if ([gasto.nombre, gasto.categoria, gasto.cantidad].includes('')){ // obtenemos lo svalors del lado derecho de los objetos
      Alert.alert('Error', 'Todos los campos son obligatorios');

      return
    }
    if (gasto.id){
      const gastosActualizados = gastos.map(gastoState =>
        gastoState.id === gasto.id ? gasto : gastoState,
      );

      setGastos(gastosActualizados);
    }else{
         //añadir al nuevo gasto al state
      gasto.id = geneararId();
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto])
    }

    setModal(!modal)
  };
const eliminarGasto = id =>{
  Alert.alert(
    'Desea eliminara gasto',
     '¿Estas seguro de eliminar el gasto?',
     [
       {text: 'No', style: 'cancelar'}, 
       {text: 'Si eliminar', 
       onPress: () => {
         const gastosActualizados = gastos.filter(gastoState => 
          gastoState.id !== id);
         setGastos(gastosActualizados);
         setModal(!modal);
         setGasto({});
       
        }}
    ],
   
  )
}

const resetearApp = () =>{
    Alert.alert(
      'Desea resetear la app', 
      'Esto eliminara presupuesto y gasto',
     [
      {text: 'No', style: 'cancelar'},
       {text: 'Si eliminar', 
       onPress: async () => {
         try {
           await AsyncStorage.clear();
           setIsValidPresupuesto(false);
            setPresupuesto(0);
            setGastos([]);
         } catch (error) {
           console.log(error)
         }    
         }},     
    ],
   
  )
}

  return (
    <View style={styles.contenedor}>
      <ScrollView>
      <View style={styles.header}>
        <Header />

        {isValidPresupuesto ? 
         (
         
          <ControlPresupuesto 
              presupuesto={presupuesto}
              gastos={gastos}
              resetearApp={resetearApp}
          />
          
         
         ) : (
          <NuevoPresupuesto
              presupuesto={presupuesto}
              setPresupuesto={setPresupuesto}
              handleNuevoPresupuesto={handleNuevoPresupuesto}
          />
          ) }

      </View>

      {isValidPresupuesto &&(
          <>
            <Filtro 
              filtro={filtro}
              setFiltro={setFiltro}
              gastos={gastos}
              setGastoFiltrados={setGastoFiltrados}
            />
            
            <ListadoGastos 
              gastos={gastos} 
              setModal={setModal}
              setGasto={setGasto}
              filtro={filtro}
              gastosFiltrados={gastosFiltrados}
            />
          </>
      )}

  </ScrollView>

      {modal && (
        <Modal 
          animationType="slide" 
          visible={modal}
          onRequestClose={() => {
            setModal(!modal);
          }}
          >
          <FormularioGasto 
            setModal={setModal}
            handleGasto={handleGasto}
            gasto={gasto}
            setGasto={setGasto}
            eliminarGasto={eliminarGasto}
          />
        </Modal>
      )}
   
      {isValidPresupuesto && (
        <Pressable 
        style={styles.Pressable}
        onPress={() => setModal(!modal)}>
          <Image
            style={styles.imagen} 
            source={require('./src/img/nuevo-gasto.png')}
          />

        </Pressable>
      )}
    
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#F5FCFF',
    flex: 1,
  },
  header: {
    backgroundColor: '#3B82F6',
    minHeight: 400
  },
  Pressable:{
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  imagen: {
    width: 60,
    height: 60, 
  },
});

export default App;
