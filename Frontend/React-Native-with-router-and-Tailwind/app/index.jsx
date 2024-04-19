import { Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import useFetch from "../hook/useFetch";

const index = () => {
  const { data, isloading, refresh } = useFetch();
  console.log(data)
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-[18px]">Index</Text>
    </View>
  );
};

export default index;
