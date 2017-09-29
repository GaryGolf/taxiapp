import * as React from 'react'
import {StyleSheet, Text, Image, TextInput, TouchableHighlight, View} from 'react-native'

interface Credentals {
  username: string
  passwors: string
}

interface Props {}

export default class SignIn extends React.Component <Props, null> {
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.header}>Авторизация</Text>
        </View>
        <Image 
          style={styles.wallpaper} 
          source={require('../../assets/taxi2.png')}
          resizeMode="stretch"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  form: {
    height: 320,
    width: 300,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
      fontSize: 20,
      fontWeight: '800',
      letterSpacing: 40,
      textAlign: 'center',
      color: '#fff',
      margin: 20,
  },
  wallpaper: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%'
  }
})