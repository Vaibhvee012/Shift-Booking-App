import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import MyShiftsScreen from "../screens/MyShiftsScreen";
import AvailableShiftsScreen from "../screens/AvailableShiftsScreen";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
  headerShown: false,

  tabBarActiveTintColor: "#004FB4",
  tabBarInactiveTintColor: "#A4B8D3",

  tabBarStyle: {
    height: 70,
    paddingBottom: 8,
    paddingTop: 8,
    borderTopWidth: 0,
    elevation: 10,
  },

  tabBarLabelStyle: {
    fontSize: 13,
    fontWeight: "600",
  },

  tabBarIcon: ({ color, size }) => {
    const iconName =
      route.name === "My Shifts"
        ? "calendar"
        : "briefcase";

    return (
      <Ionicons
        name={iconName}
        size={size}
        color={color}
      />
    );
  },
})}
    >
      <Tab.Screen
        name="My Shifts"
        component={MyShiftsScreen}
      />

      <Tab.Screen
        name="Available Shifts"
        component={AvailableShiftsScreen}
      />
    </Tab.Navigator>
  );
}