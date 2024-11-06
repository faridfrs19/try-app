import { View, Image, Text, Pressable } from 'react-native'
import React, { useCallback } from 'react'
import Colors from './../../constants/Colors'
import * as WebBrowser from 'expo-web-browser'
import { useOAuth } from '@clerk/clerk-expo'
import * as Linking from 'expo-linking'

export const useWarmUpBrowser = () => {
  React.useEffect(() => {
    // Warm up the android browser to improve UX
    // https://docs.expo.dev/guides/authentication/#improving-user-experience
    void WebBrowser.warmUpAsync()
    return () => {
      void WebBrowser.coolDownAsync()
    }
  }, [])
}

WebBrowser.maybeCompleteAuthSession()

export default function LoginScreen() {
  useWarmUpBrowser()

  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' })

  const onPress = useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow({
        redirectUrl: Linking.createURL('/home', { scheme: 'myapp' }),
      })

      if (createdSessionId) {

      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error('OAuth error', err)
    }
  }, [])

  return (
    <View style={{
      backgroundColor:Colors.WHITE,
      height:'100%'
    }}>
      <Image source={require('./../../assets/images/login.jpg')} 
        style={{
          width:'100%',
          height:450
        }}
      />
      <View style={{
        padding:20,
        display:'flex',
        alignItems:'center'
      }}>
        <Text style={{
          fontFamily:'sen-bold',
          fontSize:30,
          textAlign:'center'
        }}>Ready to make a new application?</Text>
        <Text style={{
          fontFamily:'sen',
          fontSize:18,
          textAlign:'center',
          color:Colors.GRAY,
          paddingTop:15
        }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempor mauris ut elementum dictum.</Text>

      <Pressable onPress={onPress}
        style={{
          padding:14,
          marginTop:100,
          backgroundColor:Colors.PRIMARY,
          width:'100%',
          borderRadius:14
        }}
      >
        <Text style={{
          fontFamily:'sen-medium',
          fontSize:20,
          textAlign:'center',
          color:Colors.WHITE
        }}>Get Started</Text>
      </Pressable>
      </View>
    </View>
  )
}