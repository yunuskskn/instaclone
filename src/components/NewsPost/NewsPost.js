import React from "react";
import { SafeAreaView, View, Text, Image, ScrollView} from "react-native";
import styles from "./NewsPost.Style"
import news_data from "../new_data.json"

function Post({post}){

    console.log("news_data:", news_data);

    return(
        <SafeAreaView style={styles.container}>
        <ScrollView>
            <View style={styles.inner_container}>
                <Image style={styles.profile_picture} source={{uri: "https://vettown.com.tr/wp-content/uploads/2024/10/2150782439-1.jpg"}} />
                <Text style={styles.userName}>yunus</Text> 
            </View>
      
            <ScrollView horizontal pagingEnabled >
                {news_data.map((datanews) => (
                    <Image
                        key={datanews.id}
                        style={styles.scroll_image} 
                        source={{uri: datanews.postUrl}}
                    />
                ))}
            </ScrollView> 
      
            <Text style={styles.comment}><Text style={styles.userName} >yunus</Text> deneme</Text>
      
            <View style={styles.inner_container}>
                <Image style={styles.profile_picture} source={{uri: post.profilePicture}}/>
                <Text style={styles.userName} >{post.userName}</Text>
            </View>
      
            <View>
                <Image style={styles.image} source={{uri: post.postUrl}} />
                <Text style={styles.comment}><Text style={styles.userName}>{post.userName} </Text> {post.comment}</Text>
            </View>
        </ScrollView>
      </SafeAreaView>
      
        )
    
}

export default Post;