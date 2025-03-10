import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Entypo from '@expo/vector-icons/Entypo';

function AdminDashboardAction() {

  const nav = useNavigation();

  return (
    <View className="bg-white flex-1">
      <Text className="font-bold text-gray-500 text-xl py-4 text-center underline">Manage Supervisor</Text>
      <View className="ml-6">
        <TouchableOpacity className="flex flex-row items-center mt-3">
          <Text className="text-gray-500 font-semibold">Actions</Text>
          <Entypo className=" ml-2" name="chevron-down" size={20} color="gray" />
        </TouchableOpacity>
      </View>

      {/* Drop down Tasks don by the Supervisor */}

      <View className=" mx-auto mt-8">
        <View className="flex-row gap-8">
          <TouchableOpacity onPress={() => nav.navigate("AdminDashboardReportView")} className=" justify-center items-center rounded-xl max-w-fit bg-white shadow-custom2-black px-[30px] py-[35px]   ">
            <Text className="border-none font-medium text-sm">View Report</Text>
          </TouchableOpacity>
          <TouchableOpacity className=" justify-center items-center max-w-fit rounded-xl bg-white shadow-custom2-black px-[21px] py-[35px]   ">
            <Text className="border-none font-medium text-sm">Manage Tasks</Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row gap-8 mt-10">
          <TouchableOpacity className=" justify-center items-center rounded-xl bg-white max-w-fit shadow-custom2-black px-[15px] py-[35px]   ">
            <Text className="border-none font-medium text-sm">Add,Delet or Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity className=" justify-center items-center rounded-xl w-fit bg-white shadow-custom2-black px-[40px] py-[35px]   ">
            <Text className="border-none font-medium text-sm">Dateline</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default AdminDashboardAction
