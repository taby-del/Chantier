import { StatusBar } from 'expo-status-bar';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AntDesign from "@expo/vector-icons/AntDesign";

//
import AdminDashboardAction from './assets/Screen/Admin/AdminDashboardAction'
import Home from './assets/Screen/Home';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="AdminDashboardAction"
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: "#7ddd7d" },
        headerTitleStyle: { fontSize: 18, fontWeight: '900', color: "black" },
        headerTitleAlign: "center",
        
        headerLeft: () => (
          <AntDesign
            name="arrowleft"
            size={20}
            color="black"
            onPress={() => navigation.goBack()}
          />
        ),
      })}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerTitle: 'Home' }}
      />

      <Stack.Screen 
        name="AdminDashboardAction"
        component={AdminDashboardAction}
        options={{ headerTitle: 'Admin Dashboard' }}
      />

    </Stack.Navigator>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="HomeStack"
        component={RootStack}
        options={{ headerShown: false }} // Hides the header for the Drawer
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator /> 
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });