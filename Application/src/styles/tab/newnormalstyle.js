import { StyleSheet } from "react-native";
import Color from "../../constants/colors";

const NewNormalStyle = StyleSheet.create({
    image: {
        height: 200,
        width: "100%",
        position: "absolute",
        opacity: 0.9,
      },
      box: {
        height: 200,
        width: "90%",
        position: "relative",
        borderRadius: 20,
        margin: 10,
        alignItems: "stretch",
      },
      image: {
        height: 200,
        width: "100%",
        position: "absolute",
        opacity: 0.9,
      },
      detail: {
        flex: 0.2,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Color.gray,
        top: 160,
      },
      text: {
        color: Color.white,
        fontSize: 15,
        fontWeight: "600",
      },
});

export default NewNormalStyle;
