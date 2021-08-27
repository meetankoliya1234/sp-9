import React, { Component } from 'react';
import { Platform, SafeAreaView, StatusBar, Text, View } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { FlatList } from "react-native-gesture-handler";

export default class Feed extends Component {

    constructor(props){
        super(props);
        this.state = {
            posts: "",
            light_theme: true,
            post_id: this.props.post.key,
            post_data: this.props.post.value
        }
    }

    fetchPosts = () => {
        firebase
          .database()
          .ref("/posts/")
          .on(
            "value",
            snapshot => {
              let stories = [];
              if (snapshot.val()) {
                Object.keys(snapshot.val()).forEach(function (key) {
                  stories.push({
                    key: key,
                    value: snapshot.val()[key]
                  });
                });
              }
              this.setState({ stories: stories });
              this.props.setUpdateToFalse();
            },
            function (errorObject) {
              console.log("The read failed: " + errorObject.code);
            }
          );
      };

    renderItem = ({ item: story }) => {
        return <StoryCard story={story} navigation={this.props.navigation} />;
      };

    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <View style={styles.appTitle}>
                    <View style={styles.appIcon}>
                        <Image 
                            source={require('../assets/logo,png')}    
                            style={styles.iconImage}
                        ></Image>
                    </View>
                    <View style={styles.appTitleTextContainer}>
                        <Text style={styles.appTitleText}>Spectagram</Text>
                    </View>
                </View>
                <View style={styles.cardContainer}>
                    <FlatList
                        keyExtractor={this.keyExtractor}
                        data={posts}
                        renderItem={this.renderItem}
                    ></FlatList>
                </View>
                <Text>Profile</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black"
    },
    appIcon: {
        flex: 0.2,
        justifyContent: "center",
        alignContent: "center"
    },
    appTitle: {
        flex: 0.07,
        flexDirection: "row"
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    iconImage: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
    },
    appTitleTextContainer: {
        flex: 0.8,
        justifyContent: "center"
    },
    appTitleText: {
        color: "white",
        fontSize: RFValue(28)
    },
    cardContainer: {
        flex: 0.85
    }
});