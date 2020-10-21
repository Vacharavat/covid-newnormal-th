import React, { Component } from 'react';
import { Text, View, SafeAreaView,Image, TouchableOpacity, ScrollView } from 'react-native';
import {CustomHeader} from '../index'


export class NewNormalScreen extends Component{
    render(){
        return (
            <SafeAreaView style={{ flex: 1}}>
              <CustomHeader title='New Normal' isHome={true} navigation={this.props.navigation}/>
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>New Normal</Text>
                <TouchableOpacity
                style={{marginTop:20}}
                onPress = {() => this.props.navigation.navigate('NewNormalDetail')}
                >
                  <Text>Go New Normal Detail</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={{marginTop:20}}
                onPress = {() => this.props.navigation.navigate('NewNormal1')}
                >
                  <Text>Go New Normal 1</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={{marginTop:20}}
                onPress = {() => this.props.navigation.navigate('NewNormal2')}
                >
                  <Text>Go New Normal 2</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={{marginTop:20}}
                onPress = {() => this.props.navigation.navigate('NewNormal3')}
                >
                  <Text>Go New Normal 3</Text>
                </TouchableOpacity>

              </View>
            </SafeAreaView>
          );
    }
}