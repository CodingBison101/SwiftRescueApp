import Colors from "@/constants/Colors";
import { useColorScheme } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={24} color="gray" />
          ),
        }}
      />
      <Tabs.Screen
        name="checkplans"
        options={{
          title: "Map",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="map" size={24} color="gray" />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="settings" size={24} color="gray" />
          ),
        }}
      />
      <Tabs.Screen
        name="(settings)"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="emergencycases"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="victim/[id]"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="chat-victim"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
