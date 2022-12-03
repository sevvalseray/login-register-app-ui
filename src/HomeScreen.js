import { useEffect, useLayoutEffect, useState } from 'react';
import React, { Component } from 'react';
import * as Font from 'expo-font';
import { Text, StyleSheet, View, KeyboardAvoidingView, TouchableOpacity } from 'react-native'

let customFonts = {
  'Urbanist': require("../assets/fonts/Urbanist-Black.ttf"),
  'Urbanist-SemiBold': require("../assets/fonts/Urbanist-SemiBold.ttf"),
  'Urbanist-Regular': require("../assets/fonts/Urbanist-Regular.ttf"),
};

export default function HomeScreen({navigation}) {
 
  const [fontsLoaded, setFontsLoaded] = useState(false)

  useLayoutEffect(() => {
    (async function(){
        await Font.loadAsync(customFonts);
        setFontsLoaded(true)
    })()
  }, [])

    if(!fontsLoaded) {
        return null
    }
    return (
      <KeyboardAvoidingView style={styles.container}
      behavior="width">
        <View style={styles.loginContainer}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}
                    style={styles.loginButton}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Register')}
                    style={styles.registerButton}>
                    <Text style={styles.registerText}>Register</Text>
                </TouchableOpacity>
        </View>
        {/* <View style={styles.textContainer}>
          <Text style={styles.text}>Continue as a guest</Text>
        </View> */}
      </KeyboardAvoidingView>
    )
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'column'
  },
  homeScreen:{
    backgroundColor:"#EEF1FF",
    width:'100%',
    height:'100%'
  },
  loginContainer: {
    width: '100%',
    flexDirection: 'column'
  },
  loginButton: {
    height: 56,
    backgroundColor: '#1E232C',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginLeft: 22,
    marginRight: 22,
    marginTop: 15,
    borderColor: '#FFFFFF'
  },
  loginText: {
    color: '#FFFFFF',
    fontFamily: 'Urbanist-SemiBold'
  },
  registerButton: {
    height: 56,
    backgroundColor: '#FFFFFF',
    borderColor: '#1E232C',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginLeft: 22,
    marginRight: 22,
    marginTop: 15,
  },
  registerText: {
    color: '#1E232C',
    fontFamily: 'Urbanist-SemiBold'
  },
  // textContainer:{
  //   flexDirection:'row',
  //   justifyContent: 'flex-end',
  //   alignItems:'flex-end'
  // },
  // text:{
  //   alignItems: 'center',
  //   fontFamily: 'Urbanist-SemiBold',
  //   color:'#35C2C1',
  //   marginTop: 156
  // }

})


