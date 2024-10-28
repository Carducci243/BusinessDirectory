import { Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { useWamUpBrowser } from '@/hooks/useWarmUpBrowser';
import { useOAuth } from '@clerk/clerk-expo';
import * as WebBrowser from "expo-web-browser";

WebBrowser.maybeCompleteAuthSession();

const LoginScreen = () => {
  const { container,text,button,subContainer ,text2,btnText}=styles

  // google Oauth method
  useWamUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or srignUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
  return (
    <View style={container}>
      <View style={subContainer}>
      <Text style={text}>
        Your Ultimate Commnunity Business Directory App
      </Text>
      <Text style={text2}>Find Your Favorite Business near you and post your own to your own community </Text>
      </View>
      <TouchableOpacity onPress={onPress} style={button}>
      <Text style={btnText}>Let's Get Started</Text>
      </TouchableOpacity>
     
    
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    },
    text:{
      textAlign:'center',
      fontSize:20,
      fontFamily:'outfit',
      fontWeight:'600'


    },
    text2:{
      textAlign:'center',
      fontSize:15,
      fontFamily:'outfit',
      fontWeight:'600',
      marginVertical:15,
      color:'gray'

    },
    subContainer:{
      flex:0.5,
      backgroundColor:'#fff',
      padding:20,
      marginTop:20,
      justifyContent:'flex-end'

      
    },
    button:{
      backgroundColor:'lightcoral',
      padding:20,
      borderRadius:99,
      
    },
    btnText:{
      color:'white',
      fontFamily:'outfit',
      
    }
})