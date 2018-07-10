import React, {Component} from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Button
} from 'react-native';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setVideo } from './store/actions';

class HomeScreen extends Component {
  constructor(props){
    super(props)
    this.state ={
      search: ""
    }
  }

  componentDidMount() {
    axios.get(
      'https://protected-chamber-17561.herokuapp.com/youtube'
    ).then((res) => this.props.setVideo(res.data)).catch(err => console.log(err))
  }

  render() {
    console.log(this.props)
    return (
      <View style={{backgroundColor: 'white'}}>
        <View style={{marginTop: -5, flexDirection:'row', height: 50, backgroundColor: "white"}}>
          <TextInput style={{flex: 1}} onChangeText={(text) => this.setState({search: text})}/>
          <View style={{height: 30, alignSelf: "center"}}>
            <Button title="search" color={"black"} onPress={() => axios.get('https://protected-chamber-17561.herokuapp.com/youtube/search/'+this.state.search).then((res) => this.props.setVideo(res.data)).catch(err => console.log(err))}/>
          </View>
        </View>
        <FlatList
          data={this.props.redux.video}
          renderItem={({item}) => {
            return (
                <TouchableOpacity
                    style={{
                        marginBottom: 10,
                        paddingBottom: 10,
                    }}
                    onPress={() => this.props.navigation.navigate('Details', {Datas: item})}

                >
                <View>
                    <Image source={{uri: item.raw.snippet.thumbnails.high.url}} style={{width: '100%', height: 240}}/>
                    <View style={{marginLeft: 10, marginTop: 5}}>
                      <Text style={styles.titleStyle}>{item.raw.snippet.title}</Text>
                      <Text style={styles.belowTitleStyle}>{item.raw.snippet.channelTitle} • {item.raw.snippet.publishedAt[0]+item.raw.snippet.publishedAt[1]+item.raw.snippet.publishedAt[2]+item.raw.snippet.publishedAt[3]}</Text>
                    </View>
                </View>
                </TouchableOpacity>
            )
          }}
          style={{backgroundColor: 'white'}}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    redux: state
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({setVideo}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const styles = StyleSheet.create({
  container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  },
  titleStyle: {
    fontSize: 14,
    fontWeight: '500',
    color: 'black'
  },
  belowTitleStyle: {
    fontWeight: "300",
    fontSize: 14
  }
});

