import "../../global.css";

import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="index" options={{ headerTitle: "Home page" }} />
      <Stack.Screen name="explore" options={{ title: "Explore page" }} /> */}
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
};

export default RootLayout;
