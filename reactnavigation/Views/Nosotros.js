import React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native'

const Nosotros = ({navigation, route}) => {

    console.log(route.params);
    const {clienteId, totalpagar} = route.params;
    
    const volver = () =>{
        navigation.navigate('Inicio'); // me direcciona a la pestaña de inicio
        //navigation.goBack(); // me direcciona a la pestaña anterior
        //navigation.push('Inicio'); // me direcciona a la pestaña de inicio
    
    }

    return (
        <View style={styles.contenedor}>
            <Text>Nosotros</Text>
            <Button 
                title="Volver"
                onPress={ () => volver() }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
export default Nosotros