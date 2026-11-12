import { Tabs } from "expo-router";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#d6c",
        tabBarInactiveTintColor: "#fff",
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#6f4e37",
          height: 70,
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: "600",
        },
      }}
    >
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

      <Tabs.Screen
        name="contact"
        options={{
          title: "Contact",
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
