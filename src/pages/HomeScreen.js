import React from "react";
import { StyleSheet, SafeAreaView, FlatList } from "react-native";
import data from "../data.json"
import NewsPost from "../components/NewsPost"

function HomePage(){

    const renderPost = ({item}) => <NewsPost post = {item} />

    return(
        <SafeAreaView style={styles.container}>   
            <FlatList
            keyExtractor={item => item.id.toString()}
            data={data}
            renderItem={renderPost}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black"
    },
    text: {
        color:"white",
        margin: 10
    },
})

export default HomePage;