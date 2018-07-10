import React, { Component } from 'react';
import { 
    ScrollView,
    View,
    Text,
    StyleSheet,
    Image,
    WebView,
    Button
    } from 'react-native';
import { connect } from 'react-redux'
import * as firebase from 'firebase';

//import Firebase from 'firebase'

class DetailScreen extends Component {
    /*constructor(props){
        super(props);
        this.state = {
            data: {}
        }
    }*/
    postFb() {
        const item = this.props.navigation.getParam('Datas', '')
        const newTodoKey = firebase.database().ref().child("favorite").push().key;
        firebase.database().ref('Favorite/').update({
          [newTodoKey]: item.raw.snippet.title
        })
    }

    render() {
        const item = this.props.navigation.getParam('Datas', '')
        const url = 'https://www.youtube.com/embed/'+ item.raw.id.videoId
        return (
            <View style={{backgroundColor: 'white', height: '100%'}}>
                <View style={{height: 240}}>
                    <WebView
                        source={{uri: url}}
                        javaScriptEnabled={true}
                        style={{marginTop: 0, flex: 1}}
                    />
                </View>
                <View style={{marginLeft: 10, marginTop: 5}}>
                    <Text style={styles.titleStyle}>{item.raw.snippet.title}</Text>
                    <Text style={styles.belowTitleStyle}>{item.channel.raw.snippet.channelTitle} • {item.publishedAt[0]+item.publishedAt[1]+item.publishedAt[2]+item.publishedAt[3]}</Text>
                    <Text style={[styles.belowTitleStyle, {marginTop: 10, fontWeight: "300"}]}>{item.raw.snippet.description}</Text>
                    
                </View>
                <View style={{width: 150, marginLeft: 200, marginTop: 5}}>
                    <Button title="Add to Favorite" color={"black"} onPress={this.postFb()}/>
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        redux: state
    }
}

export default connect(mapStateToProps)(DetailScreen);

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },
    titleStyle: {
        fontSize: 14,
        fontWeight: '700',
        color: 'black'
    },
    authorStyle: {
        fontSize: 15,
        fontWeight: '300',
        color: 'black',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        flex: 1
    },
   dateStyle: {
        fontSize: 15,
        fontWeight: '300',
        color: 'black',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        flex: 1
    },
});
/*<Image source={{uri: item.raw.snippet.thumbnails.high.url}} style={{width: '100%', height: 200}}/>\

                */