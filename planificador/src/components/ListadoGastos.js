import React from 'react';
import { Text, View, StyleSheet} from 'react-native';

import Gasto from './Gasto';

const ListadoGastos = (
  {
  gastos, 
  setModal, 
  setGasto, 
  filtro,
  gastosFiltrados
}) => {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Gastos</Text>

      {filtro
        ? gastosFiltrados.map(gasto => (
            <Gasto
              key={gasto.id}
              gasto={gasto}
              setModal={setModal}
              setGasto={setGasto}
        />
      ))
    
        : gastos.map(gasto => (
            <Gasto
              key={gasto.id}
              gasto={gasto}
              setModal={setModal}
              setGasto={setGasto}
            />
      ))
    }

      {(gastos.length === 0 
      || (gastosFiltrados.length === 0 && !!filtro))
         && 
         (<Text style={styles.noGastos}>
          No hay Gastos</Text>)}
     

    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    marginVertical: 30,
    marginBottom: 100,
    },
  titulo: {
    color: '#64748B',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '700',
    marginTop: 20,
    },
  noGastos: {
    marginVertical: 15,
    textAlign: 'center',
    fontSize: 15,
},
})

export default ListadoGastos