import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Text, StyleSheet, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Image } from 'react-native'
import * as Font from 'expo-font';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import SInput from './components/SInput';

let customFonts = {
    'Urbanist': require("../assets/fonts/Urbanist-Black.ttf"),
    'Urbanist-SemiBold': require("../assets/fonts/Urbanist-SemiBold.ttf"),
    'Urbanist-Regular': require("../assets/fonts/Urbanist-Regular.ttf"),
};

export default function VerificationScreen({ navigation }) {

    const [fontsLoaded, setFontsLoaded] = useState(false)
    const [formData, setFormData] = useState({
        "input1": null,
        "input2": null,
        "input3": null,
        "input4": null,
    })

    const input1Ref = useRef()
    const input2Ref = useRef()
    const input3Ref = useRef()
    const input4Ref = useRef()

    const [focusedInputId, setFocusedInputId] = useState("input1")

    const map = {
        "input1": input1Ref,
        "input2": input2Ref,
        "input3": input3Ref,
        "input4": input4Ref,
    }

    useEffect(() => {
        const currentInputIds = Object.keys(formData);

        currentInputIds.forEach((key, index) => {
            if (formData[key]) {
                if(currentInputIds[index+1]) {
                   input3Ref.current.focus()
                }
                return;
            }
        })
    }, [JSON.stringify(formData), input1Ref, input2Ref, input3Ref, input4Ref,])

    console.log('focusedInputID', focusedInputId)

    useLayoutEffect(() => {
        (async function () {
            await Font.loadAsync(customFonts);
            setFontsLoaded(true)
        })()
    }, [])

    if (!fontsLoaded) {
        return null
    }

    const updateFormData = (key, value) => {
        setFormData({ ...formData, [key]: value })
    }

    return (

        <KeyboardAvoidingView style={styles.container}
            behavior="height">
            <View style={{ width: '100%', marginTop: 15 }}>
                <View>
                    <TouchableOpacity style={styles.backButton}
                        onPress={() => navigation.navigate('Login')}>
                        <Ionicons style={{}} name="chevron-back-sharp" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={styles.welcomeContainer}>
                    <Text style={styles.welcomeText}>OTP Verification</Text>
                    <Text style={styles.welcomeMiniText}>Enter the verification code we just sent on your email address.</Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        value={formData["input1"]}
                        onChangeText={(text) => updateFormData("input1", text)}
                        ref={input1Ref}
                        onSubmitEditing={() => input2Ref.current.focus()}
                        style={styles.input}
                        blurOnSubmit={false}
                        returnKeyType="next"
                    />

                    <TextInput
                        value={formData["input2"]}
                        onChangeText={(text) => updateFormData("input2", text)}
                        ref={input2Ref}
                        returnKeyType="next"
                        onSubmitEditing={() => input3Ref.current.focus()}
                        style={styles.input}
                    />

                    <TextInput
                        value={formData["input3"]}
                        onChangeText={(text) => updateFormData("input3", text)}
                        ref={input3Ref}
                        returnKeyType="next"
                        onSubmitEditing={() => input4Ref.current.focus()}
                        style={styles.input}
                        blurOnSubmit={false}
                    />

                    <TextInput
                        value={formData["input4"]}
                        onChangeText={(text) => updateFormData("input4", text)}
                        ref={input4Ref}
                        // onSubmitEditing={() => input3Ref.current.focus()}
                        style={styles.input}
                        blurOnSubmit={false}
                    />
                </View>
                <View style={styles.loginContainer}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('PasswordChanged')}
                        style={styles.loginButton}>
                        <Text style={styles.loginText}>Verify</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.registerContainer}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Verification')}
                    style={styles.registerButton}>
                    <Text style={styles.lineText}>Didn’t received code? </Text>
                    <Text style={styles.registerLineText}>Resend</Text>
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
        marginTop: 10,
        color: '#8391A1'
    },
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    inputContainer: {
        justifyContent: 'space-between',
        width: '100%',
        flexDirection: 'row',
        marginTop: 32,
        padding: 22
    },
    input: {
        backgroundColor: '#F7F8F9',
        borderColor: '#E8ECF4',
        borderRadius: 8,
        color: '#8391A1',
        fontFamily: 'Urbanist-Regular',
        height: 60,
        width: 70,
        textAlign: 'center',

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
        marginTop: 10,
    },
    lineText: {
        color: '#6A707C',
        fontFamily: 'Urbanist-SemiBold',
        alignSelf: 'center',
        fontSize: 14,
        marginHorizontal: 3
    },
    registerLineText: {
        fontFamily: 'Urbanist-SemiBold',
        alignSelf: 'center',
        fontSize: 14,
        color: '#35C2C1'
    },
    loginText: {
        color: 'white',
        color: '#FFFFFF',
        fontFamily: 'Urbanist-SemiBold'
    },
    registerContainer: {
        flexDirection: 'row',
        marginBottom: 15
    },
    registerButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    backButton: {
        marginTop: 16,
        marginLeft: 16,
        borderColor: '#E8ECF4',
        borderWidth: 1,
        borderRadius: 8,
        width: 30
    }
})

