// import React, { Component } from 'react';
// import { Text, View, SafeAreaView,Image, TouchableOpacity, ScrollView } from 'react-native';
// import { CustomHeader } from '../index'
// import Color from '../constants/colors'


// export class SymptompsScreenDetail extends Component{
//     render(){
//         return (
//             <SafeAreaView style={{ flex: 1, backgroundColor:Color.primary}}>
//               <CustomHeader title='Symptomps' navigation={this.props.navigation}/>
//               <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//                 <Text>SymptompsScreenDetail</Text>
//               </View>
//             </SafeAreaView>
//           );
//     }
// }
import React, { Component } from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import {CustomHeader} from '../index'
import Color from '../constants/colors'
import { Card } from 'react-native-elements'
import Status from '../Status'
export class SymptompsScreenDetail extends Component{
    render(){
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: Color.primary}}>
                <Status />
              <CustomHeader title='Symptoms' navigation={this.props.navigation}/>
             
              <ScrollView>
                <Card>
                    <Card.Title>1. Fever</Card.Title>
                    <Card.Divider/>
                    <View style={{ flex:1,flexDirection:'row', alignContent:'center', justifyContent:'center' }}>
                        <Image source={require('../image/symptomps1.png')} style={{width: 100, height: 100,}} />
                    </View>
                    <Text style={{textAlign:'center', margin:10}}>
                        มีไข้ 37.5&#8451; ขึ้นไป
                    </Text>
                </Card>
                <Card>
                    <Card.Title>2. Cough</Card.Title>
                    <Card.Divider/>
                    <View style={{ flex:1,flexDirection:'row', alignContent:'center', justifyContent:'center' }}>
                        <Image source={require('../image/symptomps3.png')} style={{width: 100, height: 100,}} />
                    </View>
                    <Text style={{textAlign:'center', margin:10}}>
                        มีไอ
                    </Text>
                </Card>
                <Card>
                    <Card.Title>3. Sore throat</Card.Title>
                    <Card.Divider/>
                    <View style={{ flex:1,flexDirection:'row', alignContent:'center', justifyContent:'center' }}>
                        <Image source={require('../image/symptomps4.png')} style={{width: 100, height: 100,}} />
                    </View>
                    <Text style={{textAlign:'center', margin:10}}>
                        มีอาการเจ็บคอ
                    </Text>
                </Card>
                <Card>
                    <Card.Title>4. Runny nose</Card.Title>
                    <Card.Divider/>
                    <View style={{ flex:1,flexDirection:'row', alignContent:'center', justifyContent:'center' }}>
                        <Image source={require('../image/symptomps6.png')} style={{width: 100, height: 100,}} />
                    </View>
                    <Text style={{textAlign:'center', margin:10}}>
                        มีน้ำมูกไหล
                    </Text>
                </Card>
                <Card>
                    <Card.Title>5. Diarrhea</Card.Title>
                    <Card.Divider/>
                    <View style={{ flex:1,flexDirection:'row', alignContent:'center', justifyContent:'center' }}>
                        <Image source={require('../image/symptomps8.png')} style={{width: 100, height: 100,}} />
                    </View>
                    <Text style={{textAlign:'center', margin:10}}>
                        มีอาการท้องเสีย
                    </Text>
                </Card>
                <Card>
                    <Card.Title>6. Tired</Card.Title>
                    <Card.Divider/>
                    <View style={{ flex:1,flexDirection:'row', alignContent:'center', justifyContent:'center' }}>
                        <Image source={require('../image/symptomps2.png')} style={{width: 100, height: 100,}} />
                    </View>
                    <Text style={{textAlign:'center', margin:10}}>
                        หายใจเร็ว หอบ เหนื่อย
                    </Text>
                </Card>
                <Card>
                    <Card.Title>7. Ache</Card.Title>
                    <Card.Divider/>
                    <View style={{ flex:1,flexDirection:'row', alignContent:'center', justifyContent:'center' }}>
                        <Image source={require('../image/symptomps5.png')} style={{width: 100, height: 100,}} />
                    </View>
                    <Text style={{textAlign:'center', margin:10}}>
                        ปวดกล้ามเนื้อ
                    </Text>
                </Card>
                <Card>
                    <Card.Title>8. Blood-Tinged Sputum</Card.Title>
                    <Card.Divider/>
                    <View style={{ flex:1,flexDirection:'row', alignContent:'center', justifyContent:'center' }}>
                        <Image source={require('../image/symptomps7.png')} style={{width: 100, height: 100,}} />
                    </View>
                    <Text style={{textAlign:'center', margin:10}}>
                        เสมหะเป็นเลือด
                    </Text>
                </Card>
              </ScrollView>
            </SafeAreaView>
          );
    }
}