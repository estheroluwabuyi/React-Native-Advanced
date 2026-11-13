import { Link } from "expo-router";
import { Text, View, Image, StyleSheet, Pressable } from "react-native";

const Home = () => {
  return (
    <View className="flex-1">
      <Image
        source={require("@/assets/images/coffee-4.jpg")}
        // resizeMode="contain"
        style={StyleSheet.absoluteFill}
        className=" !w-full  !h-full"
      />

      <View className="flex-1 p-5 justify-center items-center bg-black/25">
        <Text className="text-white text-[1.7rem] font-bold tracking-wide">
          The Coffee Shop
        </Text>

        <Text className="text-white text-center text-[1.03rem]">
          Your favourite coffee, one cup at a time.
        </Text>
        <Link href="/explore" asChild>
          <Pressable className="px-3 py-2 mt-5  rounded-md bg-[#6f4e37] items-center justify-center">
            <Text className="text-white text-[1.5rem] font-bold text-center">
              Grab a Cup
            </Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
};

export default Home;
