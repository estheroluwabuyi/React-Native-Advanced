import { Text, View, Image, StyleSheet } from "react-native";

const Home = () => {
  return (
    // <View className=" bg-blue-700 flex-1 flex-col p-5 gap-2">
    //   <ImageBackground
    //     source={require("@/assets/images/coffee-6.jpg")}
    //     resizeMode="cover"
    //     className="w-full h-full flex-1 object-cover justify-center items-center"
    //   >
    //     <Text className="text-[#ffffffd0] ">Coffee Shop</Text>
    //   </ImageBackground>
    // </View>

    <View className="flex-1">
      <Image
        source={require("@/assets/images/coffee-4.jpg")}
        // resizeMode="contain"
        style={StyleSheet.absoluteFill}
        className=" !w-full  !h-full"
      />

      <View className="flex-1 p-5 justify-center items-center bg-black/25">
        <Text className="text-white text-[1.7rem] font-bold">
          The Coffee Shop
        </Text>

        <Text className="text-white text-center text-[1.1rem]">
          Your favourite coffee, one cup at a time.
        </Text>
      </View>
    </View>
  );
};

export default Home;
