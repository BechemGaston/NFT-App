
import { StyleSheet } from "react-native";
import { NavigationContainer, DefaulTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";



import Home from "./screen/Home";
import Details from "./screen/Details";

 
const Stack = createStackNavigator();





const App = () => {
  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
  });

  if(!loaded) return null;

  return (
    <NavigationContainer style={styles.container}>
        <Stack.Navigator screenOptions={{headerShown: false}} 
        initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent"
  }
});



export default App;