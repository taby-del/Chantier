import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';

// Validation schemas
const loginValidationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
});

const registrationValidationSchema = Yup.object().shape({
  fullName: Yup.string().required("Full Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(8, "Password must be atleast 8 characters").required("Password is required")
});




function LoginForm() {
  const [isLogin, setIsLogin] = useState(true);

  const handleLoginSubmit = values => {
    Alert.alert('Login Submitted', JSON.stringify(values, null, 2));
  };

  const handleRegistrationSubmit = values => {
    Alert.alert('Registration Submitted', JSON.stringify(values, null, 2));
  };

  const nav = useNavigation();

  return (
    <View className="flex-1 bg-customGreen justify-center items-center">
      <View className="bg-white  rounded-3xl shadow-custom-black p-6 max-w-fit">
        {isLogin ? (
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={loginValidationSchema}
            onSubmit={handleLoginSubmit}
          >
            {({ handleChange, handleBlur, values, errors }) => (
              <View className="p-4">
                <Text className="font-black mb-11 text-3xl text-gray-700 text-center">Login</Text>

                <Text className="text-gray-500 p-2 ml-2 font-semibold">Email:</Text>
                <TextInput
                  className="border rounded-full border-gray-300 p-3 mb-2 text-gray-500"
                  placeholder="Enter your Email..."
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
                {errors.email && <Text className="text-red-400">{errors.email}</Text>}

                <Text className="text-gray-500 p-2 ml-2 font-semibold">Password:</Text>
                <TextInput
                  className="border rounded-full border-gray-300 p-3 mb-2 text-gray-500"
                  placeholder="Enter your Password..."
                  secureTextEntry
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                />
                {errors.password && <Text className="text-red-400">{errors.password}</Text>}

                <TouchableOpacity onPress={() => nav.navigate('ResetPassword')}>
                  <Text className="text-gray-500 mb-4 mt-3 font-semibold text-right">Forgot Password?</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => nav.navigate("AdminDashboardAction")}>
                  <Text className="border-none rounded-full bg-gray-300 shadow-custom-black px-10 py-2 w-fit mx-auto text-center font-bold mt-2">Submit</Text>
                </TouchableOpacity>
                <Text className="mt-7 text-gray-500 text-center">
                  {`Don't have an account? `}
                  <Text className="text-gray-500 font-semibold" onPress={() => setIsLogin(false)}>Register</Text>
                </Text>
              </View>
            )}
          </Formik>
        ) : (    
            <Formik
              initialValues={{ fullName: '', email: '', password: '' }}
              validationSchema={registrationValidationSchema}
              onSubmit={handleRegistrationSubmit}
            >
              {({ handleChange, handleBlur, values, errors }) => (
                <View className="p-4">
                  <Text className="font-black mb-9 text-3xl text-gray-700 text-center">Registration</Text>
                  <Text className="text-gray-500 p-2 ml-2 font-semibold">Full Name:</Text>
                  <TextInput
                    className="border rounded-full border-gray-300 p-3 mb-2 text-gray-500"
                    placeholder=" Enter your full name..."
                    onChangeText={handleChange('fullName')}
                    onBlur={handleBlur('fullName')}
                    value={values.fullName}
                  />
                  {errors.fullName && <Text className="text-red-400">{errors.fullName}</Text>}

                  <Text className="text-gray-500 p-2 ml-2 font-semibold">Email:</Text>
                  <TextInput
                    className="border rounded-full border-gray-300 p-3 mb-2 text-gray-500"
                    placeholder=" Enter your Email..."
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                  />
                  {errors.email && <Text className="text-red-400">{errors.email}</Text>}

                  <Text className="text-gray-500 p-2 ml-2 font-semibold">Password:</Text>
                  <TextInput
                    className="border rounded-full border-gray-300 p-3 mb-2 text-gray-500"
                    placeholder="Enter your Password..."
                    secureTextEntry
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                  />
                  {errors.password && <Text className="text-red-400">{errors.password}</Text>}

                  <TouchableOpacity onPress={() => nav.navigate("AdminDashboardAction")}>
                    <Text className="border-none bg-gray-300 text-center px-10 py-2 w-fit mx-auto rounded-full shadow-custom-black font-bold mt-7">Submit</Text>
                  </TouchableOpacity>
                  <Text className="mt-7 text-gray-500 text-center">
                    Already have an account? 
                    <Text className="text-gray-500 font-semibold" onPress={() => setIsLogin(true)}>Login</Text>
                  </Text>
                </View>
              )}
            </Formik>
        )}

      </View>
    </View>
  );
}

export default LoginForm;