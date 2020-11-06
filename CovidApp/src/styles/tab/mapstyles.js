import { StyleSheet } from "react-native";
import Color from "../../constants/colors";

const MapStyles = StyleSheet.create({
    bubble: {
        flexDirection: "column",
        alignSelf: "flex-start",
        backgroundColor: "#fff",
        borderRadius: 6,
        borderColor: "#ccc",
        borderWidth: 0.5,
        padding: 15,
        width: 300,
      },
      name: {
        fontSize: 16,
        marginBottom: 5,
        fontWeight: "bold",
      },
      arrow: {
        backgroundColor: "transparent",
        borderColor: "transparent",
        borderTopColor: "#007a87",
        borderWidth: 16,
        alignSelf: "center",
        marginTop: 32,
      },
      arrowBorder: {
        backgroundColor: "transparent",
        borderColor: "transparent",
        borderTopColor: Color.darkpurple,
        borderWidth: 16,
        alignSelf: "center",
        marginTop: -0.5,
      },
      container: {
        flex: 1,
      },
      map: {
        flex:1,
        backgroundColor:'blue',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      },
      image: {
        width: 200,
        height: 100,
      },
      button: {
        flex:1,
        width:'100%',
        justifyContent:"center",
        alignItems:'center'
      },
});

export default MapStyles;
