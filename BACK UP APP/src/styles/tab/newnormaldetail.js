import { StyleSheet } from "react-native";
import Color from "../../constants/colors";

const NewNormalDetail = StyleSheet.create({
  topblock: {
    height: 60,
    backgroundColor: "#324d52",
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
  block: {
    height: 100,
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
    backgroundColor: "#dae5e7",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    
  },
  detail2: {
    padding: 10,
    flex: 0.75,
    backgroundColor: "#dae5e7",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  subdetail: {
    textAlign: 'center',
    fontSize: 16,
    // alignContent: "center",
    color: "#5d878e",
    fontWeight: "bold",
    // alignItems:'center',
    // justifyContent:'center',
  
  },
});

export default NewNormalDetail;
