import { useEffect, useLayoutEffect, useState } from 'react';
import { Text, StyleSheet, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Image } from 'react-native'
import * as Font from 'expo-font';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

let customFonts = {
    'Urbanist': require("../assets/fonts/Urbanist-Black.ttf"),
    'Urbanist-SemiBold': require("../assets/fonts/Urbanist-SemiBold.ttf"),
    'Urbanist-Regular': require("../assets/fonts/Urbanist-Regular.ttf"),
};

export default function ForgotPasswordScreen({navigation}) {

    const [fontsLoaded, setFontsLoaded] = useState(false)
    const [email, setEmail] = useState(null)
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
            <View style={{width: '100%', marginTop: 15}}>
                <View>
                    <TouchableOpacity style={styles.backButton}
                        onPress={() => navigation.navigate('Login')}>
                        <Ionicons style={{}} name="chevron-back-sharp" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={styles.welcomeContainer}>
                    <Text style={styles.welcomeText}>Forgot Password?</Text>
                    <Text style={styles.welcomeMiniText}>Don't worry! It occurs. Please enter the email address linked with your account.</Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput placeholder='Enter your email'
                        // value={} 
                        onChangeText={text=> updateFormData('email', text)}
                        style={styles.input}
                    />
                </View>
                <View style={styles.loginContainer}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Verification')}
                        style={styles.loginButton}>
                        <Text style={styles.loginText}>Send Code</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.registerContainer}>
            <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}
                    style={styles.registerButton}>
                        <Text style={styles.lineText}>Remember Password? </Text>
                        <Text style={styles.registerLineText}>Login</Text>
            </TouchableOpacity>
                
            </View>
        </KeyboardAvoidingView>
    )
}


const styles = StyleSheet.create({
    welcomeContainer: {
        width: '90%',
        height: 97,
        padding: 20
    },
    welcomeText: {
        fontFamily: 'Urbanist',
        fontSize: 30,
        fontWeight: '600'
    },
    welcomeMiniText: {
        fontFamily: 'Urbanist-Regular',
        fontSize: 16,
        fontWeight: '500',
        marginTop:10,
        color: '#8391A1'
    },
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    inputContainer: {
        width: '100%',
        marginTop: 32
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
        marginTop: 32,
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
    registerContainer:{
       flexDirection: 'row',
       marginBottom: 15
    },
    registerButton:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    backButton:{
        marginTop: 16,
        marginLeft: 16,
        borderColor: '#E8ECF4',
        borderWidth: 1,
        borderRadius: 8,
        width: 30
    }
})

