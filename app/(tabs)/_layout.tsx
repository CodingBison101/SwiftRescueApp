import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
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
        tabBarButton:  HapticTab,
        tabBarBackground: TabBarBackground,
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
            <IconSymbol size={28} name="house.fill" color={'gray'} />
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
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="settings" size={24} color="gray" />
          ),
        }}
      />
      <Tabs.Screen
        name="(homepager)"
        options={{
          href: null,
          title: "Homepage",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="settings" size={24} color="gray" />
          ),
        }}
      />
    </Tabs>
    
  );
}
