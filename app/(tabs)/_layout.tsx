import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import HomeIcon from  '@mui/icons-material/Home';
import Icon from '@mui/material/Icon';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Login',
          headerShown : false,
          tabBarIcon: ({ color, focused }) => (
            <HomeIcon color="primary" />
          ),
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
      name="create"
      options={{
        title: 'Crear Tareas',
        tabBarIcon: ({ color, focused }) => (
          <Icon >add_circle</Icon>
        ),
      }}
    />
    </Tabs>
  );
}
