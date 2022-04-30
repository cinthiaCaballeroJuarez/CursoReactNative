import React, {useEffect} from 'react'
import {Text, View, StyleSheet} from 'react-native';
import globalStyles from '../styles';
import {Picker} from '@react-native-picker/picker';

const Filtro = ({filtro,setFiltro, gastos, setGastoFiltrados}) => {

  useEffect(()=>{
    if(filtro === ''){
      setGastoFiltrados([])
    }else{
      const gastosFiltrados = gastos.filter( gasto => gasto.categoria === filtro)
      console.log(gastosFiltrados)
      setGastoFiltrados(gastosFiltrados)
    }
  },[filtro])

  return (
    <View style={styles.contenedor}>
      <Text style={styles.label}>Filtrar gastos</Text>
   
      <Picker
        selectedValue={filtro}
        onValueChange={(valor)=>{
          setFiltro(valor)
        }}
      >
        <Picker.Item label="--seleccione" value="" />
        <Picker.Item label="Ahorro" value="ahorro" />
        <Picker.Item label="Comida" value="comida" />
        <Picker.Item label="Casa" value="casa" />
        <Picker.Item label="Gastos Varios" value="gastos varios" />
        <Picker.Item label="Ocio" value="ocio" />
        <Picker.Item label="Salud" value="salud" />
        <Picker.Item label="Suscripciones" value="suscripciones" />
        </Picker>
   </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    ...globalStyles.contenedor,
    transform: [{translateY: 0}],
    marginTop: 50,
    },
    label: {
backgroundColor: '#fff',
    },
})
export default Filtro