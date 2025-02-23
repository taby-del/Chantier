import "./global.css"
import { StatusBar } from 'expo-status-bar';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from "@expo/vector-icons/AntDesign";
//
import AdminDashboardAction from './assets/Screen/Admin/AdminDashboardAction'
import Home from './assets/Screen/Home';
import AdminDashboardAdd from './assets/Screen/Admin/AdminDashboardAdd';
import AdminDashboardAddDeleteEdit from './assets/Screen/Admin/AdminDashboardAddDeleteEdit';
import AdminDashboardAddView from './assets/Screen/Admin/AdminDashboardAddView';
import AdminDashboardDelete from './assets/Screen/Admin/AdminDashboardDelete';
import AdminDashboardDeleteView from './assets/Screen/Admin/AdminDashboardDeleteView';
import AdminDashboardReportSelect from './assets/Screen/Admin/AdminDashboardReportSelect';
import AdminDashboardReportView from './assets/Screen/Admin/AdminDashboardReportView';
import AdminDashboardReportWeek from './assets/Screen/Admin/AdminDashboardReportWeek';
import AdminDashboardTask from './assets/Screen/Admin/AdminDashboardTask';
import AdminDashboardTaskselect from './assets/Screen/Admin/AdminDashboardTaskselect';
import AdminDashboardTaskView from './assets/Screen/Admin/AdminDashboardTaskView';
import LoginForm from './assets/Screen/LoginForm'
import ResetPassword from "./assets/Screen/ResetPassword";
//

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="AdminDashboardReportWeek"
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: "#7ddd7d",
        },
        headerTitleStyle: { fontSize: 20, fontWeight: '900', color: "white", },
        headerTitleAlign: "center",
        headerLeft: () => (
          <AntDesign
            name="arrowleft"
            size={20}
            color="white"
            onPress={() => navigation.goBack()}
          />
        ),

        headerRight: () => (
          <MaterialIcons
            name="admin-panel-settings"
            size={24}
            color="white"
          />
        )
      })}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerTitle: '', headerShown: false }}


      />

      <Stack.Screen
        name="AdminDashboardAction"
        component={AdminDashboardAction}
        options={{ headerTitle: "" }}
      />
      <Stack.Screen
        name="LoginForm"
        component={LoginForm}
        options={{ headerTitle: "Sign-in/Sign-up" }}
      />
      <Stack.Screen
        name="AdminDashboardAdd"
        component={AdminDashboardAdd}
        options={{ headerTitle: 'Admin Dashboard Add' }}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{ headerTitle: 'Reset Password' }}
      />
      <Stack.Screen
        name="AdminDashboardAddDeleteEdit"
        component={AdminDashboardAddDeleteEdit}
        options={{ headerTitle: 'Admin Dashboard Add/Delete/Edit' }}
      />
      <Stack.Screen
        name="AdminDashboardDelete"
        component={AdminDashboardDelete}
        options={{ headerTitle: 'Admin Dashboard Delete' }}
      />
      <Stack.Screen
        name="AdminDashboardDeleteView"
        component={AdminDashboardDeleteView}
        options={{ headerTitle: 'Admin Dashboard Delete View' }}
      />
      <Stack.Screen
        name="AdminDashboardReportSelect"
        component={AdminDashboardReportSelect}
        options={{ headerTitle: 'Admin Dashboard Report Select' }}
      />
      <Stack.Screen
        name="AdminDashboardReportView"
        component={AdminDashboardReportView}
        options={{ headerTitle: 'Admin Dashboard Report' }}
      />
      <Stack.Screen
        name="AdminDashboardReportWeek"
        component={AdminDashboardReportWeek}
        options={{ headerTitle: 'Admin Dashboard Report' }}
      />
      <Stack.Screen
        name="AdminDashboardTask"
        component={AdminDashboardTask}
        options={{ headerTitle: 'Admin Dashboard Task Assign' }}
      />
      <Stack.Screen
        name="AdminDashboardTaskselect"
        component={AdminDashboardTaskselect}
        options={{ headerTitle: 'Admin Dashboard Task Select' }}
      />
      <Stack.Screen
        name="AdminDashboardTaskView"
        component={AdminDashboardTaskView}
        options={{ headerTitle: 'Admin Dashboard Task View' }}
      />
      <Stack.Screen
        name="AdminDashboardAddView"
        component={AdminDashboardAddView}
        options={{ headerTitle: 'Admin Dashboard Add View' }}
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