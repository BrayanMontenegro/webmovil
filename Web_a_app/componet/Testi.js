import React from "react";
import { View,Image,Text,StyleSheet } from "react-native";

function Testi(props){
    return(
        <View style={styles.testimonioContainer}>
        <Image source={props.foto} style={styles.imagen} />
        <View style={styles.textoContainer}>
          <Text style={styles.nombre}>{props.nombre}</Text>
          <Text style={styles.pais}>{props.país}</Text>
          <Text style={styles.cargo}>
            {props.cargo} en <Text style={styles.empresa}>{props.empresa}</Text>
          </Text>
          <Text style={styles.testimonio}>"{props.testimonio}"</Text>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    testimonioContainer: {
      flexDirection: 'row',
      backgroundColor: '#f8f8f8',
      borderRadius: 10,
      marginVertical: 10,
      padding: 15,
      alignItems: 'center',
    },
    imagen: {
      width: 150,
      height: 250,
      borderRadius: 30,
    },
    textoContainer: {
      flex: 1,
    },
    nombre: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
      alignSelf:'center',
    },
    pais: {
      fontSize: 14,
      color: '#6b6b6b',
      marginBottom: 5,
    },
    cargo: {
      fontSize: 14,
      color: '#333',
      marginBottom: 5,
    },
    empresa: {
      fontWeight: 'bold',
    },
    testimonio: {
      fontSize: 11,
      fontStyle: 'italic',
      color: '#555',
    },
  });
  
  export default Testi;
  