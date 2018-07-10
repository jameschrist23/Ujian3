import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    FlatList
    } from 'react-native';
import * as firebase from 'firebase';

class FavoriteScreen extends Component {
    render() {
        return (
                <FlatList
                    data={currSnap}
                    renderItem={({item}) => {
                return (
                <View>
                    <Text>{JSON.stringify(listString)}</Text>
                </View>
                )
            }}
             style={{backgroundColor: 'white'}}
            />
        );
    }
}
export default FavoriteScreen;

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
    }
});
