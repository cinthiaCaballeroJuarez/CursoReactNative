
import React from 'react';
import {
View,
Image,
Text,
StyleSheet,
ScrollView,
} from 'react-native';

const App = () =>  {

  return (
  <>
    <ScrollView>
        <View style={{ flexDirection: 'row'}}>
          <Image 
            style={styles.banner}
            source={require('./img/bg.jpg')}
          />
        </View>

        <View style={styles.contenedor}>
          <Text style={styles.titulo}>Que hacer en Paris</Text>
          <ScrollView
           horizontal={true}
          >
            
            <View>
              <Image 
                style={styles.ciudad}
                source={require('./img/actividad1.jpg')}
            />
            </View>

            <View>
              <Image 
                  style={styles.ciudad}
                source={require('./img/actividad2.jpg')}
            />
            </View>

            <View>
              <Image 
               style={styles.ciudad}
                source={require('./img/actividad3.jpg')}
            />
            </View>

            <View>
              <Image 
                 style={styles.ciudad}
                source={require('./img/actividad4.jpg')}
            />
            </View>       

            <View>
              <Image 
                 style={styles.ciudad}
                source={require('./img/actividad5.jpg')}
            />
            </View>

          </ScrollView>

          <Text style={styles.titulo}>Los Mejores A lojamientos</Text>
          <View>
            <View>
              <Image 
                  style={styles.mejores}
                  source={require('./img/mejores1.jpg')}
              />
              </View>

              <View>
              <Image 
                  style={styles.mejores}
                  source={require('./img/mejores2.jpg')}
              />
              </View>

              <View>
              <Image 
                  style={styles.mejores}
                  source={require('./img/mejores3.jpg')}
              />
              </View>
          </View>

          <Text style={styles.titulo}>Hospedajes en los angeles</Text>
          <View
            style={styles.listado}
          >
          <View
              style={styles.listadoItem}
          >
              <Image 
                  style={styles.mejores}
                  source={require('./img/hospedaje1.jpg')}
              />
              </View>

              <View style={styles.listadoItem}>
              <Image 
                  style={styles.mejores}
                  source={require('./img/hospedaje2.jpg')}
              />
              </View>

              <View style={styles.listadoItem}>
              <Image 
                  style={styles.mejores}
                  source={require('./img/hospedaje3.jpg')}
              />
              </View>

              <View style={styles.listadoItem}>
              <Image 
                  style={styles.mejores}
                  source={require('./img/hospedaje4.jpg')}
              />
              </View>

          </View>

        
        </View>

    </ScrollView>
   
  </>
 
  );
};

const styles = StyleSheet.create({
  banner:{
    height: 200,
    flex: 1,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 20,
  },
  contenedor: {
    marginHorizontal: 10,
  },
  ciudad: {
    width: 200,
    height: 250,
    marginRight: 10,
  },
  mejores: {
    width: '100%', // que tome todo el acho sin necesidad deun flexdirection
    height: 200,
    marginVertical: 5,
  },
  listado:{
    flexDirection: 'row',
    flexWrap: 'wrap', // para desbordar hacia abaj
    justifyContent: 'space-between',
  },
  listadoItem:{
    flexBasis: '49%' // para darle tamaño
  },
});

export default App;
