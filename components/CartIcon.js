import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { CartContext } from '../screens/CartContext';

export function CartIcon({navigation}) {
  const {getItemsCount} = useContext(CartContext);

  const nav=()=>{
    navigation.navigate('Cart');
  }
  return (
    <TouchableOpacity onPress={nav}>
    <View style={styles.container}>

      <Text style={styles.text} 
     
      >Cart ({getItemsCount()})</Text>
    </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    backgroundColor: 'orange',
    height: 32,
    padding: 12,
    borderRadius: 32 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});