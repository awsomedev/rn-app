import { NavigationContainer } from "@react-navigation/native"
import HomeScreen from "../home/container/homeScreen"
import DetailScreen from "../detail/container/DetailScreen"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()

const RootNavigation = ()=>{

return <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Detail" component={DetailScreen}/>
    </Stack.Navigator>
</NavigationContainer>

}
export default RootNavigation