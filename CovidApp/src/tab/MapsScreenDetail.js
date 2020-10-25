import React, { Component } from 'react';
import { Text, View, SafeAreaView,Image, TouchableOpacity, ScrollView } from 'react-native';
import {CustomHeader} from '../index'
import Status from '../Status'

export class MapsScreenDetail extends Component{
    render(){
        return (
            <SafeAreaView style={{ flex: 1}}>
              <Status />
              <CustomHeader title='Maps Deatil' navigation={this.props.navigation}/>
              
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Maps Detaikl</Text>
              </View>
            </SafeAreaView>
          );
    }
}