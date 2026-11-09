import { Link, Stack } from "expo-router";
import { View, Text } from "react-native";

export default function NotFound() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View className="flex-1 items-center justify-center">
        <Text>This page doesn't exist.</Text>
        <Link href="/">Go home</Link>
      </View>
    </>
  );
}
