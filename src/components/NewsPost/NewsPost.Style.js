import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    
    image: {
        height: Dimensions.get("window").height / 2,
    },
    comment: {
        color: "white",
        padding: 10
    },
    profile_picture: {
        width: 50,
        height:50,
        borderRadius: 25,
    },
    userName: {
        color: "white",
        alignSelf: "center",
        paddingLeft: 10,
        fontWeight: "bold"
    },
    inner_container: {
        flex: 1,
        flexDirection: "row",
        padding: 10
    },
    scroll_image: {
        height: Dimensions.get("window").height / 2,
        width: Dimensions.get("window").width 
    },
    container: {
        flex: 1
    }
})