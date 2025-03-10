import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'


function AdminDashboardReportWeek() {
  const nav = useNavigation();
  return (
    <View className="flex-1 bg-white">
      <Text className="mt-5 font-bold text-gray-600 text-center text-2xl underline">Weekly Report</Text>
      <View className="mt-7 ml-8">
        <TouchableOpacity className="">
          <Text className="font-semibold text-xl text-gray-500 underline ">Supervisor 1</Text>
        </TouchableOpacity>
      </View>
      <Text className=" text-center mt-9 font-medium text-lg underline">Week 1</Text>
      <View>
        <View className="mt-5 rounded-2xl mx-auto shadow-custom2-black px-[25px] py-[20px] ">
          <Text className="font-medium text-sm mx-auto text-center ">
            This application is a comprehensive {"\n"}
            This application is a comprehen {"\n"}
            This application is a  {"\n"}
            This application is a comprehen {"\n"}
            This application is a comprehensi {"\n"}
            This application is a comprehensive {"\n"}
            This application is {"\n"}
            This application is a comprehensi {"\n"}
            This application is a comprehensi {"\n"}
            This application  {"\n"}
            This application is a comprehensi {"\n"}
            This application is a comprehensive {"\n"}
          </Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => nav.navigate("AdminDashboardAction")}>
        <Text className="font-semibold text-gray-500 rounded-full px-[25px] py-[10px] mx-auto w-fit bg-gray-300 mt-10 shadow-custom-black  ">OK</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AdminDashboardReportWeek
