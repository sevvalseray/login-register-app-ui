import { useEffect, useLayoutEffect, useState } from 'react';
import React, { Component } from 'react';
import * as Font from 'expo-font';
import { Text, StyleSheet, View, KeyboardAvoidingView, TouchableOpacity, Image } from 'react-native'
import successMark from '../assets/img/successMark.png'

let customFonts = {
  'Urbanist': require("../assets/fonts/Urbanist-Black.ttf"),
  'Urbanist-SemiBold': require("../assets/fonts/Urbanist-SemiBold.ttf"),
  'Urbanist-Regular': require("../assets/fonts/Urbanist-Regular.ttf"),
};

export default function PasswordChangedScreen({navigation}) {
 
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
            <TouchableOpacity style={styles.socialMediaIcon}
                onPress={() => { }}>
                <Image source={successMark} style={{ width: 100, height: 100 }} />
            </TouchableOpacity>
        </View>
        <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeText}>Password Changed!</Text>
            <Text style={styles.welcomeMiniText}>Your password has been changed successfully.</Text>
        </View>
        <View style={styles.loginContainer}>
          <TouchableOpacity
              onPress={() => navigation.navigate('Login')}
              style={styles.loginButton}>
              <Text style={styles.loginText}>Back to Login</Text>
          </TouchableOpacity>
      </View>
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
  loginContainer: {
    display:'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    padding: 15,
    width: '100%'
  },
  socialMediaIcon:{
      padding: 15,
  },
  welcomeContainer: {
    width: '80%',
    height: 97,
    padding: 20
  }, 
  welcomeText: {
    textAlign: 'center',
    fontFamily: 'Urbanist-Regular',
    fontSize: 30,
    fontWeight: '700'
  },
  welcomeMiniText: {
    textAlign: 'center',
    fontFamily: 'Urbanist-Regular',
    fontSize: 16,
    fontWeight: '500',
    marginTop:10,
    color: '#8391A1'
},
loginButton: {
  width: '100%',
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
  marginTop: 40,
},
loginText: {
  color: 'white',
  color: '#FFFFFF',
  fontFamily: 'Urbanist-SemiBold'
},
})


