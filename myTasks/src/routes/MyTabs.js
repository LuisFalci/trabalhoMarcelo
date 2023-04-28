import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Configuration from "../pages/Configuration";
import { MaterialIcons, FontAwesome5, AntDesign } from '@expo/vector-icons';
import Tasks from "../pages/Tasks";
import Category from "../pages/Category";
import Create from "../pages/Create";

const Tab = createBottomTabNavigator();

export default function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: '#D9D9D9',
                },
                tabBarShowLabel: false,
            }}>
            <Tab.Screen
                name="Configuration"
                component={Configuration}
                options={{
                    headerShown: false,
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="settings" size={40} color="black" />),
                }}
            />
            <Tab.Screen
                name="Tasks"
                component={Tasks}
                options={{
                    headerShown: false,
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="edit" size={30} color="black" />),
                }}
            />
            <Tab.Screen
                name="Categorys"
                component={Category}
                options={{
                    headerShown: false,
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="appstore1" size={30} color="black" />),
                }}
            />
            <Tab.Screen
                name="Create"
                component={Create}
                options={{
                    headerShown: false,
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="pluscircleo" size={30} color="black" />),
                }}
            />
        </Tab.Navigator>
    )
}