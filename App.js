import React, {Component} from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';
import FavoriteScreen from './FavoriteScreen'
import { Provider } from 'react-redux'
import store from './store'
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyA9y2gTa8nVTYqS1EOBiV9ZRFQaZXpXb-k",
  authDomain: "testing-7dd4b.firebaseapp.com",
  databaseURL: "https://testing-7dd4b.firebaseio.com",
  projectId: "testing-7dd4b",
  storageBucket: "testing-7dd4b.appspot.com",
  messagingSenderId: "677446189881"
};
firebase.initializeApp(config);


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppStackNavigator/>
      </Provider>
    );
  }
}
export default App;

const AppStackNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
        headerLeft: (
            <View style={{ paddingLeft: 15, paddingTop: 0, width: 160, flex: 1, flexDirection: "row" }}>
             <View style={{margin: 2, width: 45, backgroundColor: "red", marginLeft: 0, borderWidth: 1, borderRadius: 5, borderColor: "red", alignItems: "center", justifyContent: "center"}}>
              <View style={{width: 13, height: 13, backgroundColor: "white"}}/>
             </View>
             <Text style={{fontSize: 22, fontWeight: "900", color: 'black', fontFamily:'roboto', marginLeft: 2}}>Youtube</Text>
            </View>
        ),
        headerRight: (
            <View style={{ paddingLeft: 0, paddingTop: 0, width:120, flex: 1 }} >
              <TouchableOpacity onPress={()=> navigation.navigate("Favorite")}>
                <Text style={{fontSize: 17, fontWeight: "900", color: 'black', fontFamily:'roboto'}}>My favorites</Text>
              </TouchableOpacity>
            </View>
        ),
        headerStyle: {
            height: 50,
            elevation: 3,
        }
    })
    },
    Details: {
      screen: DetailScreen,
      navigationOptions: {
        header: null
      }
    },
    Favorite: {
      screen: FavoriteScreen,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: "Home"
  }
)
