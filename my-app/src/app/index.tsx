import Test from "@/components/Test";
import { Text, View } from "react-native";

const Home = () => {
  return (
    <View className=" bg-blue-700  p-5">
      <Text className=" text-5xl text-white">Welcome to Nativewind!</Text>
      <Test />
    </View>
  );
};

export default Home;
