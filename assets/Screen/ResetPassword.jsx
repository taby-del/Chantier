import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';

const forgotPasswordValidationSchema = Yup.object().shape({
    NewPassword: Yup.string().min(8, "Password must be atleast 8 characters").required("New Password is required"),
    ComfirmPassword: Yup.string().min(8, "Password must be atleast 8 characters").required("Confirm the new Password")
});

function ResetPassword() {

    const nav = useNavigation();
    return (
        <View className=" flex-1 bg-customGreen justify-center items-center ">
            <View className="shadow-custom-black bg-white mx-auto rounded-2xl p-6">
                <Formik
                    initialValues={{ NewPassword: "", ComfirmPassword: "" }}
                    validationSchema={forgotPasswordValidationSchema}
                >
                    {({ handleChange, handleBlur, values, errors }) => (
                        <View className="p-4">
                            <Text className="font-black mb-11 text-3xl text-gray-700 text-center">Reset Password</Text>
                            <Text className="text-gray-500 p-2 ml-2 font-semibold">New Password:</Text>
                            <TextInput
                                className="border rounded-full border-gray-300 p-3 mb-2 text-gray-500"
                                placeholder=" Enter your new password..."
                                onChangeText={handleChange('NewPassword')}
                                onBlur={handleBlur('NewPassword')}
                                value={values.NewPassword}
                            />
                            {errors.NewPassword && <Text className="text-red-400">{errors.NewPassword}</Text>}

                            <Text className="text-gray-500 p-2 ml-2 font-semibold">Comfirm Password:</Text>
                            <TextInput
                                className="border rounded-full border-gray-300 p-3 mb-2 text-gray-500"
                                placeholder="Comfirm your Password..."
                                secureTextEntry
                                onChangeText={handleChange('ComfirmPassword')}
                                onBlur={handleBlur('ComfirmPassword')}
                                value={values.ComfirmPassword}
                            />
                            {errors.ComfirmPassword && <Text className="text-red-400">{errors.ComfirmPassword}</Text>}

                            <TouchableOpacity onPress={() => nav.navigate("LoginForm")}>
                                <Text className="border-none bg-gray-300 items-center text-center px-10 py-2 w-fit mx-auto rounded-full shadow-custom-black font-bold mt-7">Submit</Text>
                            </TouchableOpacity>

                        </View>
                    )}
                </Formik>
            </View>
        </View>

    )
}

export default ResetPassword
