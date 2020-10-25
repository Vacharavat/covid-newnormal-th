import React, { Component } from 'react';
import { Text, View, SafeAreaView,Image, TouchableOpacity, ScrollView, Button, Linking } from 'react-native';
import {CustomHeader} from '../index'
import Color from '../constants/colors';
import { Card } from 'react-native-elements'


export class InfoScreenDetail extends Component{
    render(){
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: Color.primary}}>
              <CustomHeader title='Information Deatil' navigation={this.props.navigation}/>
              <ScrollView>
                <Card>
                    <Card.Title>กระทรวงมหาดไทย (ศบค.มท.)</Card.Title>
                    <Card.Divider/>
                    <View style={{ flex:1,flexDirection:'row', alignContent:'center', justifyContent:'center' }}>
                        <Image source={require('../image/department1.png')} style={{width: 100, height: 100, marginBottom: 10}} />
                    </View>
                    <Button title='VIEW NOW' onPress={()=> Linking.openURL('http://www.moicovid.com/')} />
                </Card>
                <Card>
                    <Card.Title>กระทรวงสาธารณสุข</Card.Title>
                    <Card.Divider/>
                    <View style={{ flex:1,flexDirection:'row', alignContent:'center', justifyContent:'center' }}>
                        <Image source={require('../image/department2.png')} style={{width: 100, height: 100, marginBottom: 10}} />
                    </View>
                    <Button title='VIEW NOW' onPress={ ()=> Linking.openURL('https://www3.dmsc.moph.go.th/')}/>
                </Card>
                <Card>
                    <Card.Title>World Health Organization (WHO)</Card.Title>
                    <Card.Divider/>
                    <View style={{ flex:1,flexDirection:'row', alignContent:'center', justifyContent:'center' }}>
                        <Image source={require('../image/department3.png')} style={{width: 100, height: 100, marginBottom: 10}} />
                    </View>
                    <Button title='VIEW NOW' onPress={ ()=> Linking.openURL('https://www.who.int/') }/>
                </Card>
              </ScrollView>
            </SafeAreaView>
          );
    }
}