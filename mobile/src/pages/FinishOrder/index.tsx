import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'

export default function FinishOrder() {
  return (
    <View style={styles.container}>
      <Text style={styles.alert}>Vamos finalizar o pedido?</Text>
      <Text style={styles.title}>MESA 30</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>Finalizar pedido</Text>
        <Feather name='shopping-cart' size={20} color="#1d1d2e" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1d1d2e',
    paddingVertical: '5%',
    paddingHorizontal: '4%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  alert: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 12
  },
  title: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 12
  },
  button: {
    backgroundColor: '#3fffa3',
    flexDirection: 'row',
    width: '65%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4
  },
  textButton:{
    fontSize: 18,
    marginRight: 8,
    fontWeight: 'bold',
    color: '#1d1d2e'
  }

})