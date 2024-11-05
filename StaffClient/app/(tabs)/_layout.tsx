import { Tabs } from "expo-router";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "black",
        headerStyle: {
          backgroundColor: "#8db7e3",
        },
        headerShadowVisible: false,
        headerTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: "#8db7e3",
        },
      }}
    >
      <Tabs.Screen
        name="Collect"
        options={{
          title: "Collect",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="qr-code-scanner" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Wash"
        options={{
          title: "Wash",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="washing-machine"
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Ready"
        options={{
          title: "Ready",
          tabBarIcon: ({ color }) => (
            <Ionicons name="checkmark-done" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Delivered"
        options={{
          title: "Delivered",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="truck-delivery"
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
