import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Entypo from '@expo/vector-icons/Entypo';


function AdminDashboardReportView() {
  return (
    <View className="flex-1 bg-white">
    <Text className="font-bold text-2xl text-gray-500 text-center mt-5 underline">View Report</Text>
      <View className=" mx-auto mt-8">
        <View className="flex-row gap-2">
          <TouchableOpacity className=" flex-row items-center justify-center border-none max-w-fit px-[6px] py-[10px] shadow-custom2-black rounded-full ">
            <Text className="text-sm font-medium text-gray-500">Supervisor 1</Text>
            <Entypo className=" ml-2" name="chevron-down" size={15} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity className=" flex-row items-center justify-center border-none max-w-fit px-[6px] py-[10px] shadow-custom2-black rounded-full ">
            <Text className="text-sm font-medium text-gray-500">Supervisor 2</Text>
            <Entypo className=" ml-2" name="chevron-down" size={15} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity className=" flex-row items-center justify-center border-none max-w-fit px-[6px] py-[10px] shadow-custom2-black rounded-full ">
            <Text className="text-sm font-medium text-gray-500">Supervisor 3</Text>
            <Entypo className=" ml-2" name="chevron-down" size={15} color="gray" />
          </TouchableOpacity>
        </View>
        <View className="flex-row gap-2 mt-4">
          <TouchableOpacity className=" flex-row items-center justify-center border-none max-w-fit px-[6px] py-[10px] shadow-custom2-black rounded-full ">
            <Text className="text-sm font-medium text-gray-500">Supervisor 4</Text>
            <Entypo className=" ml-2" name="chevron-down" size={15} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity className=" flex-row items-center justify-center border-none max-w-fit px-[6px] py-[10px] shadow-custom2-black rounded-full ">
            <Text className="text-sm font-medium text-gray-500">Supervisor 5</Text>
            <Entypo className=" ml-2" name="chevron-down" size={15} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity className=" flex-row items-center justify-center border-none max-w-fit px-[6px] py-[10px] shadow-custom2-black rounded-full ">
            <Text className="text-sm font-medium text-gray-500">Supervisor 6</Text>
            <Entypo className=" ml-2" name="chevron-down" size={15} color="gray" />
          </TouchableOpacity>
        </View>
      </View>
    </View>

  )
}

export default AdminDashboardReportView
