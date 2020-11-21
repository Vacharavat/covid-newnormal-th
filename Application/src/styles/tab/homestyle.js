import { StyleSheet } from "react-native";
import Color from "../../constants/colors";

const HomeStyles = StyleSheet.create({
  // HomeScreen
  safeareaview: {
    flex: 1,
    backgroundColor: Color.primary,
  },
  container: {
    flex: 1,
    backgroundColor: Color.secondary,
  },

  //{/* Background Color */}
  //TopPage
  topblock: {
    // flex: ,
    height: 130,
    backgroundColor: Color.primary,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: "center",
    //backgroundColor:'red'
  },
  //Text Topblock
  welcome:{
    color:Color.white, 
    fontWeight:'bold', 
    paddingLeft:15
  },
  txtcovid:{
    color:Color.white, 
    fontWeight:'bold', 
    paddingLeft:15, 
    fontSize:23,
  },
  txtsubcovid:{
    color:Color.white, 
    fontWeight:'bold', 
    paddingLeft:15, 
    fontSize:25,
  },

  //Block and More
  container1:{
    flexDirection:'row', 
    flex:0.3, 
    justifyContent:'center',
  },
  txtupdate:{
    color:Color.white, 
    fontWeight:'bold', 
    paddingLeft:15, 
    paddingTop:5, 
    fontSize:11,
  },
  txtviewall:{
    top:5, 
    color:Color.white, 
    fontSize:15, 
    textDecorationLine:'underline',
    right:0
  },

  //{/* Statistic block1 */}
  bigstatblock: {
    // top: -30,
     flexDirection: 'row',
     justifyContent: 'center',
     //backgroundColor:'yellow'
   },
   //{/* Substatistic block1 */}
  statblock: {
    flex:1,
    backgroundColor: 'white',
    width: '43%',
    height: 100,
    margin: 7,
    borderRadius: 10,
    //backgroundColor:'green',
  },
  txtconfirm:{
    color:Color.gray, 
    fontWeight:'bold', 
    padding:8
  },
  txtrecovered:{
    color:Color.green, 
    fontWeight:'bold', 
    padding:8
  },
  txtHospitalized:{
    color:Color.skyblue, 
    fontWeight:'bold', 
    padding:8
  },
  txtDeath:{
    color:Color.red, 
    fontWeight:'bold', 
    padding:8},
   // Text Stat
   txtstats:{
    fontSize:25, 
    color:Color.gray, 
    fontWeight:'bold', 
    paddingLeft:8,
   // backgroundColor:'pink'
  },
  // Subtext Stat
  subtxtstats:{
    fontSize:12, 
    color:Color.gray, 
    fontWeight:'normal', 
    padding:8,
  },
  //Symtompblock
  symtompsblock: {
    flex: 0.5,
    //backgroundColor:'blue',
    paddingTop:10
  },
  //Preventblock
  preventionsblock: {
    flex: 0.5,
   // backgroundColor:'purple',
    paddingTop:10
  },
  //Block preventions, symtomp details
  subdetail: {
    backgroundColor: 'white',
    width: 100,
    height: 100,
    margin: 8,
    borderRadius: 10,
    flex:1,
    //backgroundColor:'red',
    top:10
  },
  subdetail2: {
    //backgroundColor: '#000000',
    width: 100,
    height: 100,
    margin: 8,
    borderRadius: 10,
    flex:1,
    //backgroundColor:'red',
    top:10
  },
  // Title Name : Systomps && Prevention
  headtitle:{
    color:Color.white, 
    fontWeight:'bold', 
    paddingLeft:10, 
    fontSize:20,
  },
  // Button More : Systomps && Prevention
  buttonmore:{
    color:Color.primary, 
    fontSize:15, 
    textDecorationLine:'underline', 
    top:5,
    right:-15
  },
  // Image Block
  imageblock:{
    flex:0.75, 
    //backgroundColor:'red', 
    justifyContent:'center', 
    alignItems:'center'
  },
  // Image
  imagedetail:{
    width:65,
    height:65,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
  },
  // Detail image block
  subimageblock:{
    flex:0.25, 
    justifyContent:'center', 
    alignItems:'center'
  },
  subimagetext:{
    fontWeight:'bold',
    color: Color.primary,
    fontSize:12.5
  },
});

export default HomeStyles;
