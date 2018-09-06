import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Judul from './Component/Judul';

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Judul mampus="Biodata"/>
     	  <Judul mampus="APALAH"/>
        
        	<Text>Airlangga Satria Dewantara</Text>
        	<Text>XI RPL 4</Text>
          <Text>4</Text>
<Judul mampus="LOGIN"/>
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
    backgroundColor: 'thistle',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


