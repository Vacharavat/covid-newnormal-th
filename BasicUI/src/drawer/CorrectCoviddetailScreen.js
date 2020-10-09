import React, { Component } from 'react';
import { Text, View, SafeAreaView,Image, TouchableOpacity, ScrollView } from 'react-native';
import {CustomHeader} from '../index'


export class CorrectCoviddetailScreen extends Component{
    render(){
        return (
            <SafeAreaView style={{ flex: 1}}>
              <CustomHeader title='การตรวจ' navigation={this.props.navigation}/>
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>การตรวจ Screen</Text>
              </View>
            </SafeAreaView>
          );
    }
}