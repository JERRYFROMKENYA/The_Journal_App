import React from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';
import HomeScreen from '.';
import { BottomNavigation } from 'react-native-paper';
import TabTwoScreen from './explore';



export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'journal', title: 'Journal', focusedIcon: 'book', unfocusedIcon: 'book-outline'},
    { key: 'vision_board', title: 'Vision Board', focusedIcon: 'view-dashboard' ,unfocusedIcon: 'view-dashboard-outline'},
    { key: 'memoirs', title: 'Memoirs', focusedIcon: "book-account" , unfocusedIcon: "book-account-outline"},

  ]);

  const renderScene = BottomNavigation.SceneMap({
    journal: HomeScreen,
    vision_board: TabTwoScreen,
    memoirs: TabTwoScreen,
  });

  return (
    <BottomNavigation

    navigationState={{ index, routes }}
    onIndexChange={setIndex}
    renderScene={renderScene}
  />
    // <Tabs
    //   screenOptions={{
    //     tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
    //     headerShown: false,
    //   }}>


    //   <Tabs.Screen
    //     name="index"
    //     options={{
    //       title: 'Journal',
    //       tabBarIcon: ({ color, focused }) => (
    //         <TabBarIcon name={focused ? 'journal' : 'journal-outline'} color={color} />
    //       ),
    //     }}
    //   />


    //   <Tabs.Screen
    //     name="explore"
    //     options={{
    //       title: 'Vision Board',
    //       tabBarIcon: ({ color, focused }) => (
    //         <TabBarIcon name={focused ? 'list' : 'list-outline'} color={color} />
    //       ),
    //     }}
    //   />
    // </Tabs>
  );
}
