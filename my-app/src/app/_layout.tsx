import "../../global.css";

import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: "Home page" }} />
      <Stack.Screen name="explore" options={{ headerTitle: "Explore page" }} />
    </Stack>
  );
  // <Stack screenOptions={{ headerShown: false }} />;
};

export default RootLayout;
