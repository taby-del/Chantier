import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'


function AdminDashboardReportWeek() {
  return (
    <View className="flex-1 bg-white">
    <Text className="mt-5 font-bold text-gray-600 text-center text-2xl">Weekly Report</Text>
      <View className="mt-10 ml-8c">
        <TouchableOpacity className=" flex-row items-center justify-center border-none max-w-fit px-[12px] py-[10px] shadow-custom2-black rounded-full ">
          <Text className="font-medium text-gray-600">Supervisor 1</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default AdminDashboardReportWeek
