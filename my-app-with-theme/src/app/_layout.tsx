import "../../global.css";

import { Stack } from "expo-router";
import { Appearance } from "react-native";
import { Colors } from "@/constants/theme";

const RootLayout = () => {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: theme.headerBackground },
        headerTitleStyle: { color: theme.text },
        headerTintColor: theme.text,
      }}
    >
      <Stack.Screen name="index" options={{ headerTitle: "Home page" }} />
      <Stack.Screen name="explore" options={{ title: "Explore Our Menu" }} />
      <Stack.Screen name="contact" options={{ title: "Contact Us Today" }} />
      {/* <Stack.Screen name="(tabs)" /> */}
    </Stack>
    // <Stack screenOptions={{ headerShown: false }}>
  );
};

export default RootLayout;
