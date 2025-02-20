import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'


function Home() {
  const nav = useNavigation()
  const images = require("../Images/images__1_-removebg-preview.png")
  return (
    <View className="flex-1 bg-customGreen items-center justify-center">
      <Image className="w-20 h-20 rounded-full bg-blue-300 mb-4" source={images} />
      <Text className="font-extrabold text-xl">BUILDWISE</Text>
      <Text className="font-semibold">Welcome to BuildWise a simplified </Text>
      <Text className="font-semibold"> Smart Construction </Text>
      <Text className="font-medium text-sm text-gray-500 text-ellipsis"> BuildWise is your all-in-one house construction </Text>
      <Text className="font-medium text-sm text-gray-500 text-ellipsis">management app, designed to streamline </Text>
      <Text className="font-medium text-sm text-gray-500 text-ellipsis">the entire building process. </Text>

      <TouchableOpacity onPress={() => nav.navigate("AdminDashboardAction")}>
        <View className="border-none rounded-full px-4 py-2 m-6  bg-gray-300 shadow-custom-black">
          <Text className=" font-bold text-sm">Get Started</Text>
        </View>
      </TouchableOpacity>

    </View>
  )
}

export default Home
