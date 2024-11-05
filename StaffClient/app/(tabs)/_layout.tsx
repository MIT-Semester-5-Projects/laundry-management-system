import { Tabs } from "expo-router";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
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
        name="collect"
        options={{
          title: "Collect",
        }}
      />
      <Tabs.Screen
        name="wash"
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
        name="ready"
        options={{
          title: "Ready",
          tabBarIcon: ({ color }) => (
            <Ionicons name="checkmark-done" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
