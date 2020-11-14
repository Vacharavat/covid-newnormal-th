import { StyleSheet, Dimensions } from "react-native";
import Color from "../../constants/colors";

    let screenWidth = Dimensions.get("window").width;
    let screenHeight = Dimensions.get("window").height;
const DrawerStyles = StyleSheet.create({
    safeview:{
        flex: 1, 
        backgroundColor: "#e3b33b"
    },
    container:{ 
        backgroundColor: "#ebc870", 
        flex: 1, width: screenWidth, 
        height:screenHeight 
    },
  topblock: {
    height: 60,
    backgroundColor: "#b38719",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderRadius: 10,
    padding: 10,
  },
  toptext: {
    fontSize: 18,
    fontWeight: "bold",
    color: Color.white,
    alignContent: "center",
  },
  blockcovid: {
    height: 100,
    margin: 10,
    borderRadius: 10,
    flexDirection: "row",
  },
  block: {
    //height: 100,
    margin: 10,
    borderRadius: 10,
    flexDirection: "row",
  },
  image: {
    flex: 0.25,
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },
  image2: {
    flex: 0.25,
    justifyContent: "center",
    alignItems: "center",
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
  imagedetail: {
    width: "70%",
    height: "70%",
  },
  detail: {
    padding: 10,
    flex: 0.75,
    backgroundColor: "#f5e3b8",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    height:100
    
  },
  detail2: {
    padding: 10,
    flex: 0.75,
    backgroundColor: "#f5e3b8",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  subdetail: {
    textAlign: 'center',
    fontSize: 16,
    // alignContent: "center",
    color: "#503c0b",
    fontWeight: "bold",
    // alignItems:'center',
    // justifyContent:'center',
  
  },
  detailbox:{
    flex:1,backgroundColor: "#f5e3b8",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    padding:10,
    height:200,
    margin:5
  },
  subdetailbox: {
    fontSize: 16,
    color: "#503c0b",
    fontWeight: "bold",
  },
  viewimage:{
    flex: 1,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
  },
  detailbox1:{
    flex:1,backgroundColor: "#f5e3b8",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    padding:10,
    height:400,
    margin:5
  },
  detailbox2:{
    flex:1,backgroundColor: "#f5e3b8",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    padding:10,
    height:250,
    margin:5
  },
  detailbox3:{
    flex:1,backgroundColor: "#f5e3b8",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    padding:10,
    height:350,
    margin:5,
    paddingTop:10
  },
  detailbox4:{
    flex:1,backgroundColor: "#f5e3b8",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    padding:10,
    height:430,
    margin:5,
    paddingTop:10
  },
});

export default DrawerStyles;
