import React from 'react'
import { View, Text } from 'react-native'
import Entypo from '@expo/vector-icons/Entypo';

function AdminDashboardAction() {
  return (
    <View>
      <Text className="font-bold text-gray-500 text-xl py-4 text-center">Manage Supervisor</Text>
      <View className="flex flex-row items-center ml-6">
        <Text className="text-gray-500 font-medium">Actions</Text>
        <Entypo className=" ml-2" name="chevron-down" size={20} color="gray" />
      </View>
    </View>
  )
}

export default AdminDashboardAction
