import { StatusBar } from 'expo-status-bar';
import { StyleSheet,ScrollView, Image, Text, View } from 'react-native';
import Testi from './componet/Testi';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.logocont}>
        <Image source={require('./assets/logo.png')} style={styles.logo} />
      </View>

      <Text style={styles.titulo}>Las personas se dejan llevar por su pasión y acaban tomando decisiones absurdas...
      pero sin la pasión, las personas no pueden enamorarse</Text>
      
      <ScrollView style={styles.scrollView}>
       <Testi
       nombre="Eve"
       país="Japon"
       cargo="Cantante de Pop japones"
       empresa="Tokio"
       foto={require('./assets/ya.jpg')}
       testimonio="Esta sociedad se desease de aquellos que no apuestan en grande y de aquellos que no saben cuando parar. No hay ninguna persona en la tierra que no apueste. Lo que odian no es apostar, lo que odian es perder y la ruina.">
       </Testi>
       <Testi
       nombre="Elizabeth"
       país="Reino unido"
       cargo="Contadora Publica"
       empresa="Inglaterra"
       foto={require('./assets/ye.jpg')}
       testimonio="¿Puedes imaginar una visión futura de ti mismo donde seas mas fuerte? ¿O crees que en el peor de los casos puedes dar la vida para resolverlo todo? Morir para ganar y arriesgar la vida para ganar son cosas totalmente diferentes, dalo todo, aspira a mas.">
       </Testi>
       <Testi
       nombre="Oreki Hotaru"
       país="Japon"
       cargo="Desarollador de Software"
       empresa="Tokio"
       foto={require('./assets/yu.jpg')}
       testimonio="Al descubrir a los hechiceros me di cuenta de que eran un asco, al trabajar en cierta empresa me di cuenta que trabajar era un asco, así que simplemente elegí lo que se me daba mejor.">
       </Testi>
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    height: 80,
    width: '100%',
    resizeMode: 'contain'
  },

  logocont:{
    width: '100%',
   
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },

  titulo:{
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  scrollView: {
    width: '100%',
  },
});
