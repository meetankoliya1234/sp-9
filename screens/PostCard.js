import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions,
  FlatList
} from "react-native";

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { RFValue } from RFValue;
import Ionicons from Ionicons;

export default class PostCard extends Component {

    constructor(props) { 
        super(props); 
        this.state = {

        }; 
    } 
    
    componentDidMount() {
        
    } 
    
    renderItem = ({ item: post }) => { 
        return <PostCard post={post} />; 
    }; 
    
    keyExtractor = (item, index) => index.toString()

    render(){
        return (
          <TouchableOpacity
          style={styles.container}
          onPress={() =>
            this.props.navigation.navigate("StoryScreen", {
              story: this.props.story
            })
          }>
            <View style={styles.container}>
              <View style={styles.cardContainer}>
                <Image
                  source={require("../assets/image_1.jpg")}
                  style={styles.storyImage}
                ></Image>
    
                <View style={styles.titleContainer}>
                  <Text style={styles.storyTitleText}>
                    {this.props.story.title}
                  </Text>
                  <Text style={styles.storyAuthorText}>
                    {this.props.story.author}
                  </Text>
                  <Text style={styles.descriptionText}>
                    {this.props.story.description}
                  </Text>
                </View>
                <View style={styles.actionContainer}>
                  <View style={styles.likeButton}>
                    <Ionicons name={"heart"} size={RFValue(30)} color={"white"} />
                    <Text style={styles.likeText}>12k</Text>
                  </View>
                </View>
              </View>
              <View style={styles.cardContainer}>
                <Image
                  source={require("../assets/image_2.jpg")}
                  style={styles.storyImage}
                ></Image>
    
                <View style={styles.titleContainer}>
                  <Text style={styles.storyTitleText}>
                    {this.props.story.title}
                  </Text>
                  <Text style={styles.storyAuthorText}>
                    {this.props.story.author}
                  </Text>
                  <Text style={styles.descriptionText}>
                    {this.props.story.description}
                  </Text>
                </View>
                <View style={styles.actionContainer}>
                  <View style={styles.likeButton}>
                    <Ionicons name={"heart"} size={RFValue(30)} color={"white"} />
                    <Text style={styles.likeText}>15k</Text>
                  </View>
                </View>
              </View>
            </View>
              </TouchableOpacity>
          );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    cardContainer: {
      margin: RFValue(13),
      backgroundColor: "#2f345d",
      borderRadius: RFValue(20)
    },
    storyImage: {
      resizeMode: "contain",
      width: "95%",
      alignSelf: "center",
      height: RFValue(250)
    },
    titleContainer: {
      paddingLeft: RFValue(20),
      justifyContent: "center"
    },
    storyTitleText: {
      fontSize: RFValue(25),
      fontFamily: "Night Cold",
      color: "white"
    },
    storyAuthorText: {
      fontSize: RFValue(18),
      fontFamily: "Night Cold",
      color: "white"
    },
    descriptionText: {
      fontFamily: "Night Cold",
      fontSize: 13,
      color: "white",
      paddingTop: RFValue(10)
    },
    actionContainer: {
      justifyContent: "center",
      alignItems: "center",
      padding: RFValue(10)
    },
    likeButton: {
      width: RFValue(160),
      height: RFValue(40),
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      backgroundColor: "#eb3948",
      borderRadius: RFValue(30)
    },
    likeText: {
      color: "white",
      fontFamily: "Night Cold",
      fontSize: RFValue(25),
      marginLeft: RFValue(5)
    }
  });
  