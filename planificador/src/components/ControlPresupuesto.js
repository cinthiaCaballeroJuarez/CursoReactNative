import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';

import globalStyles from '../styles';
import {formatearCantidad} from '../helpers';

//import {AnimatedCircularProgress} from 'react-native-circular-progress';
import CircularProgress from 'react-native-circular-progress-indicator'
const ControlPresupuesto = ({presupuesto, gastos, resetearApp}) => {
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);
  const [porcentaje, setPorcentaje] = useState(0);
  useEffect(() => {
    const totalGastado = gastos.reduce(
      (total, gasto) => Number(gasto.cantidad) + total,
      0)
    const totalDisponible = presupuesto - totalGastado;
    
    const nuevoPercentaje = (totalGastado * 100) / presupuesto;

    setTimeout(() => {
      setPorcentaje(nuevoPercentaje);
    },1500);
    
    setDisponible(totalDisponible);
    setGastado(totalGastado);
  }, [gastos]);


  return (
    <View style={styles.contenedor}>
    <View style={styles.centrarGrafica}>
        <CircularProgress
            value={ porcentaje }
            duration={1800}
            radius={150}
            valueSuffix={'%'}
            title='Gastado'
            inActiveStrokeColor='#F5F5F5'
            inActiveStrokeWidth={20}
            activeStrokeColor='#3b82f6'
            activeStrokeWidth={20}
            titleStyle={{ fontWeight: 'bold', fontSize: 20}}
            titleColor='#64748B'
        />
    </View>

      <View style={styles.contenedorTexto}>
        <Pressable onLongPress={resetearApp} style={styles.boton}>
            <Text style={styles.textoBoton}>Reiniciar App</Text>
          </Pressable>

        <Text style={styles.valor}>
          <Text style={styles.label}>Presupuesto: {''}</Text>

          {formatearCantidad(presupuesto)}
        </Text>

        <Text style={styles.valor}>
          <Text style={styles.label}>Disponible: {''}</Text>
          
          {formatearCantidad(disponible)}
        </Text>

        <Text style={styles.valor}>
          <Text style={styles.label}>Gastado: {''}</Text>
          
          {formatearCantidad(gastado)}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    ...globalStyles.contenedor,
  },
  centrarGrafica: {
    alignItems: 'center', //centrando imagen
  },
 boton: {
    backgroundColor: '#DB2777',
    padding: 10,
    marginBottom: 40,
    borderRadius: 5,
 },
  textoBoton: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  contenedorTexto: {
    marginTop: 30,
  },
  valor: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 10,
  },
  label: {
    fontWeight: '700',
    color: '#3B82F6',
  },
})

export default ControlPresupuesto