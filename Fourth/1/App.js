import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.bg}>
          <Text style={{color:'white', fontWeight:'bold', paddingLeft:10}}>WELCOME TO</Text>
          <Text style={{color:'white', fontWeight:'bold', paddingLeft:10, fontSize:25}}>COVID-19</Text>
          <Text style={{color:'white', fontWeight:'bold', paddingLeft:10, fontSize:25}}>NEW NORMAL TH</Text>
          <Text style={{color:'white', fontWeight:'bold', padding:10, fontSize:10}}>Update 2020-10-04</Text>
        </View>


        <View style={styles.bigbox}>
          <View style={styles.box1}>
            <Text style={{color:'#3a3a3c', fontWeight:'bold', padding:8}}>Confirmed</Text>
            <Text style={{fontSize:25, color:'#3a3a3c', fontWeight:'bold', paddingLeft:8}}>3427</Text>
            <Text style={{fontSize:10,color:'#3a3a3c', fontWeight:'normal', padding:8}}>(+5)</Text>
          </View>
          <View style={styles.box1}>
          <Text style={{color:'#34C759', fontWeight:'bold', padding:8}}>Recovered</Text>
            <Text style={{fontSize:25, color:'#3a3a3c', fontWeight:'bold', paddingLeft:8}}>3227</Text>
            <Text style={{fontSize:10,color:'#3a3a3c', fontWeight:'normal', padding:8}}>(+5)</Text>
          </View>
        </View>
        <View style={styles.bigbox}>
          <View style={styles.box1}>
          <Text style={{color:'#5AC8FA', fontWeight:'bold', padding:8}}>Hospitalized</Text>
            <Text style={{fontSize:25, color:'#3a3a3c', fontWeight:'bold', paddingLeft:8}}>92</Text>
            <Text style={{fontSize:10,color:'#3a3a3c', fontWeight:'normal', padding:8}}>(+5)</Text>
          </View>
          <View style={styles.box1}>
          <Text style={{color:'#FF313A', fontWeight:'bold', padding:8}}>Deaths</Text>
            <Text style={{fontSize:25, color:'#3a3a3c', fontWeight:'bold', paddingLeft:8}}>58</Text>
            <Text style={{fontSize:10,color:'#3a3a3c', fontWeight:'normal', padding:8}}>(+5)</Text>
          </View>
        </View>


        <View style={styles.symtomps}>
        <Text style={{color:'white', fontWeight:'bold', paddingLeft:10, fontSize:18}}>Symptomps</Text>
        <View style={{flexDirection:'row',justifyContent:'center', }}>
          <View style={styles.box2}></View>
          <View style={styles.box2}></View>
          <View style={styles.box2}></View>
        </View>
        </View>

        <View style={styles.preventions}>
        <Text style={{color:'white', fontWeight:'bold', paddingLeft:10, fontSize:18}}>Preventions</Text>
        <View style={{flexDirection:'row',justifyContent:'center', }}>
          <View style={styles.box2}></View>
          <View style={styles.box2}></View>
          <View style={styles.box2}></View>
        </View>
        </View>

        <View style={styles.details}>
        <Text style={{color:'white', fontWeight:'bold', paddingLeft:10, fontSize:18}}>Covid 19</Text>
        <View style={{flexDirection:'row',justifyContent:'center', }}>
          <View style={styles.box3}></View>
        </View>
        </View>
        <StatusBar style="auto" />
      </View>
    );
  }}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b7b7ff',
  },
  bg: {
    paddingTop:20,
    flex: 0.3,
    //height:220,
    backgroundColor: '#436bfc',
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
    justifyContent:'center',
  },
  bigbox:{
    top:-40,
    flexDirection:'row',
    justifyContent:'center',

  },
  box1:{
    backgroundColor:'white',
    width: '40%', 
    height: 100,
    margin:8,
    borderRadius:10
  },
  symtomps:{
    top:-40,
    flex:0.2,
    
  },
  preventions:{
    top:-30,
    flex:0.2,
    
  },
  box2:{
    backgroundColor:'white',
    width: '24%', 
    height: 100,
    margin:8,
    borderRadius:10,
  },
  details:{
    top:-20,
    flex:0.2,
  },
  box3:{
    backgroundColor:'white',
    width: '90%', 
    height: 120,
    margin:8,
    borderRadius:10,
  },


});
