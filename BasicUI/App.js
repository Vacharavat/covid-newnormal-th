import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.bg}>
        <Text style={{color:'white', fontWeight:'bold', paddingLeft:10}}>WELCOME TO</Text>
        <Text style={{color:'white', fontWeight:'bold', paddingLeft:10, fontSize:25}}>COVID-19</Text>
        <Text style={{color:'white', fontWeight:'bold', paddingLeft:10, fontSize:25}}>NEW NORMAL TH</Text>
        <Text style={{color:'white', fontWeight:'bold', padding:10, fontSize:10}}>Update 2020-10-04</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b7b7ff',
  },
  bg: {
    paddingTop:20,
    flex: 0.3,
    backgroundColor: '#436bfc',
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
    justifyContent:'center',
  },
});
