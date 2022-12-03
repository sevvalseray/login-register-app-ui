import { useEffect, useLayoutEffect, useState } from 'react';
import { Text, StyleSheet, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Image } from 'react-native'
import * as Font from 'expo-font';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import facebook from '../assets/img/facebook.png';
import google from '../assets/img/google.png';
import apple from '../assets/img/apple-logo.png';

let customFonts = {
    'Urbanist': require("../assets/fonts/Urbanist-Black.ttf"),
    'Urbanist-SemiBold': require("../assets/fonts/Urbanist-SemiBold.ttf"),
    'Urbanist-Regular': require("../assets/fonts/Urbanist-Regular.ttf"),
};

export default function LoginScreen({navigation}) {

    const [fontsLoaded, setFontsLoaded] = useState(false)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [formData, setFormData] = useState({
        email: null,
        password: null
    })

    useLayoutEffect(() => {
        (async function(){
            await Font.loadAsync(customFonts);
            setFontsLoaded(true)
        })()
    }, [])

    if(!fontsLoaded) {
        return null
    }

    const updateFormData = (key, value) => {
        setFormData({...formData, [key] : value})
    }

    return (
        
        <KeyboardAvoidingView style={styles.container}
            behavior="height">
            <View style={{width: '100%', marginLeft: 22}}>
                <TouchableOpacity style={styles.backButton}
                    onPress={() => navigation.navigate('Home')}>
                    <Ionicons style={{}} name="chevron-back-sharp" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.welcomeContainer}>
                <Text style={styles.welcomeText}>Welcome back! Glad to see you, Again!</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput placeholder='Enter your email'
                    // value={} 
                    onChangeText={text=> updateFormData('email', text)}
                    style={styles.input}
                />
                <TextInput placeholder='Enter your password'
                    // value={} onChangeText={text=>}
                    style={styles.input}                    
                    secureTextEntry
                />
            </View>
            <View style={styles.forgotContainer}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('ForgotPassword')}
                    style={styles.forgotButton}>
                    <Text style={styles.forgotText}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.loginContainer}>
                <TouchableOpacity
                    onPress={() => { }}
                    style={styles.loginButton}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.lineContainer}>
                <View style={{backgroundColor: '#E8ECF4', height: 2, flex: 1, alignSelf: 'center', marginLeft: 22}} />
                <Text style={styles.lineText}>Or Login with</Text>
                <View style={{backgroundColor: '#E8ECF4', height: 2, flex: 1, alignSelf: 'center', marginRight: 22}} />
            </View>  
            <View style={styles.socialMediaContainer}>
                <TouchableOpacity style={styles.socialMediaIcon}
                    onPress={() => { }}>
                    <Image source={facebook} style={{ width: 50, height: 50 }} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialMediaIcon}
                    onPress={() => { }}>
                    <Image source={google} style={{ width: 50, height: 50 }} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialMediaIcon}
                    onPress={() => { }}>
                    <Image source={apple} style={{ width: 50, height: 50 }} />
                </TouchableOpacity>
            </View>
           

            <View style={styles.registerContainer}>
            <TouchableOpacity
                    onPress={() => navigation.navigate('Register')}
                    style={styles.registerButton}>
                        <Text style={styles.lineText}>Don’t have an account?</Text>
                        <Text style={styles.registerLineText}>Register Now</Text>
            </TouchableOpacity>
                
            </View>
        </KeyboardAvoidingView>
    )
}


const styles = StyleSheet.create({
    welcomeContainer: {
        width: 300,
        height: 78,
    },
    welcomeText: {
        fontFamily: 'Urbanist',
        fontSize: 30,
        fontWeight: '600'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '100%',
    },
    input: {
        backgroundColor: '#F7F8F9',
        height: 56,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginLeft: 22,
        marginRight: 22,
        marginTop: 15,
        borderColor: '#E8ECF4',
        borderRadius: 8,
        color: '#8391A1',
        fontFamily: 'Urbanist-Regular',
    },
    forgotContainer: {
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginTop: 38,
        display: 'flex',
    },
    forgotButton: {
        width: '95%',
        padding: 15,
        position: 'absolute',
        alignItems: 'flex-end',
        marginLeft: 22,
    },
    loginContainer: {
        width: '100%',
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
    },
    forgotText: {
        color: '#6A707C',
        fontFamily: 'Urbanist-Regular'
    },
    lineText: {
        color: '#6A707C',
        fontFamily: 'Urbanist-SemiBold',
        alignSelf:'center', 
        fontSize: 14,
        marginHorizontal:3
    },
    registerLineText:{
        fontFamily: 'Urbanist-SemiBold',
        alignSelf:'center', 
        fontSize: 14,
        color: '#35C2C1'
    },
    loginText: {
        color: 'white',
        color: '#FFFFFF',
        fontFamily: 'Urbanist-SemiBold'
    },
    lineContainer:  {
        flexDirection: 'row',
        marginTop:29
    },
    registerContainer:{
       flexDirection: 'row'
    },
    registerButton:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconStyle:{
        width: '95%',
        width: '95%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    socialMediaContainer:{
        display:'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
        padding: 15,
        width: '100%'
    },
    socialMediaIcon:{
        borderColor: '#E8ECF4',
        borderRadius: 8,
        color: '#8391A1',
        padding: 35,
        borderWidth: 1
    },
    backButton:{
        marginTop: 16,
        borderColor: '#E8ECF4',
        borderWidth: 1,
        borderRadius: 8,
        width: 30
    }
})

