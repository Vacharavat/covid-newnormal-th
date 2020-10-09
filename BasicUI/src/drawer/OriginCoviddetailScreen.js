import React, { Component } from 'react';
import { Text, View, SafeAreaView,Image, TouchableOpacity, ScrollView } from 'react-native';
import {CustomHeader} from '../index'


export class OriginCoviddetailScreen extends Component{
    render(){
        return (
            <SafeAreaView style={{ flex: 1}}>
              <CustomHeader title='ต้นกำเนิดของไวรัส' navigation={this.props.navigation}/>
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>ต้นกำเนิดของไวรัส Screen</Text>
              </View>
            </SafeAreaView>
          );
    }
}