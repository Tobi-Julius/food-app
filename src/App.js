import { registerRootComponent } from "expo";
import { StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./Navigator/Tabs";
import { Home, OrderDelivery, Restaurant } from "./screens";
import { COLORS } from "./constants/Theme";
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.white} />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Tabs"
      >
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="OrderDelivery" component={OrderDelivery} />
        <Stack.Screen name="Restaurant" component={Restaurant} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

registerRootComponent(App);
