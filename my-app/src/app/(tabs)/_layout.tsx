import { Tabs } from "expo-router";

const TabLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "red", headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
