import React from 'react'
import { View, Text } from 'react-native'
import Entypo from '@expo/vector-icons/Entypo';

function AdminDashboardAction() {
  return (
    <View>
      <Text className="font-bold text-gray-500 text-xl py-4 text-center">Manage Supervisor</Text>
      <View className="flex flex-row items-center space-x-4">
        <Text className="text-gray-500 text-sm">Actions</Text>
        <Entypo name="chevron-down" size={20} color="black" />
      </View>
    </View>
  )
}

export default AdminDashboardAction
