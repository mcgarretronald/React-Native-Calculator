import { useEffect } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { useRouter } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'

const TeaserScreen = () => {
  const router = useRouter()

  // Hide splash screen after the duration
  useEffect(() => {
    SplashScreen.preventAutoHideAsync()  
    setTimeout(async () => {
      await SplashScreen.hideAsync()  
      router.push('./Calculator')  
    }, 3000)

    // Set splash screen options (duration and fade effect)
    SplashScreen.setOptions({ duration: 5000, fade: true })
  }, [router])

  return (
    <View style={styles.container}>
      <View style={styles.mydiv}>
        <Image
          source={require('../../assets/images/calculator.png')}
          style={{ width: 200, height: 200 }}
        />
        <Text style={styles.mytext}>Calculator</Text>
      </View>
    </View>
  )
}

export default TeaserScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: '100%',
  },
  mydiv: {
    borderWidth: 2,
    display: 'flex',
    marginTop: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mytext: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
  },
})
