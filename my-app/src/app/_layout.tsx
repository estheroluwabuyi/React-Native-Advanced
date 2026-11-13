import "../../global.css";

import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: "Home page" }} />
      <Stack.Screen name="explore" options={{ title: "Explore Our Menu" }} />
      <Stack.Screen name="contact" options={{ title: "Contact Us Today" }} />
      {/* <Stack.Screen name="(tabs)" /> */}
    </Stack>
    // <Stack screenOptions={{ headerShown: false }}>
  );
};

export default RootLayout;
