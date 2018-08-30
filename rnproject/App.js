import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Judul from './Component/Judul';

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
     	<Judul/>
        	<Text>Airlangga Satria Dewantara</Text>
        	<Text>XI RPL 04</Text>
        	<Text>u04</Text>


            <Image 
            style={{height:200 , width:200}}
            source={require('./1.jpg')}
              
               />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
