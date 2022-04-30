import React, { useReducer } from 'react';

import firebase from '../../firebase'; // LLAMANDO LA CONFIGURACION DE FIREBASE
import FirebaseReducer from './firebaseReducer';
import FirebaseContext from './firebaseContext';

import { OBTENER_PRODUCTOS_EXITO} from '../../types';
import _ from 'lodash';

const FirebaseState = props => {

    // Crear state inicial
    const initialState = {
        menu: []
    }

    // useReducer con dispatch  para ejecutar las funciones
    const [ state, dispatch ] = useReducer(FirebaseReducer, initialState);

    // Función que se ejecuta para traer los productos
    const obtenerProductos = () => {
         //console.log('desdefirebaseStete');

        // consultar firebase
        firebase.db
            .collection('productos')
            .where('existencia', '==', true) // traer solo los que esten en existencia
            .onSnapshot(manejarSnapshot);

        function manejarSnapshot(snapshot) {
            let platillos = snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            });

            // Ordenar por categoria con lodash
            platillos = _.sortBy(platillos, 'categoria');

            // console.log(platillos)

            // Tenemos resultados de la base de datos
            dispatch({
                type: OBTENER_PRODUCTOS_EXITO,
                payload: platillos //los datos que se van a pasar al reducer el que se encarga de llenar el menu[]
            });
        }
    }


    return (
        <FirebaseContext.Provider
            value={{ // PASANDO LOS VALORES AL MENU PRINCIPAL
                menu: state.menu, 
                firebase, // PASANDO LA CONFIGURACION DE FIREBASE
                obtenerProductos // PASANDO LA FUNCION PARA TRAER LOS PRODUCTOS
            }}
        >
            {props.children} 
        </FirebaseContext.Provider>
    )
}

export default FirebaseState;