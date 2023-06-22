import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput } from 'react-native';
import { useFormik } from 'formik'
import * as Yup from 'yup';
import axios from 'axios';
import { TouchableOpacity } from 'react-native';

export default function SignIn({ navigation }) {

  const validationSchema = Yup.object({
    email: Yup.string().required('Email is required').email('Example: exa@gmail.com'),
    password: Yup.string().required('Password is required').matches(/^[A-Za-z0-9-_.]{5,15}/, 'Password must be letters or numbers from 10 to 15 '),
  })

  function handleSubmit(values) {
    axios.post("https://route-ecommerce.onrender.com/api/v1/auth/signin", values)
      .then((res) => {
        if (res.data.message === "success") {

        }
      })
      .catch((error) => console.warn(error))
  }
  let formik = useFormik({
    initialValues: { name: "", email: "", phone: "", password: "", rePassword: "", },
    onSubmit: handleSubmit,
    validationSchema
  })

  return (
    <ScrollView>
      <View>

        {/* Email */}
        <TextInput
          style={{ borderWidth: 1, borderColor: '#112D4E', borderRadius: 5, width: '90%', marginLeft: '5%', padding: 10, marginTop: 10 }}
          placeholder='Email' name='email' id='email'
          value={formik.values.email} onChangeText={formik.handleChange('email')} onBlur={formik.handleBlur('email')}
        />
        {/* Passwrod */}
        <TextInput
          style={{ borderWidth: 1, borderColor: '#112D4E', borderRadius: 5, width: '90%', marginLeft: '5%', padding: 10, marginTop: 10 }}
          placeholder='Password' name='password' id='password' secureTextEntry={true}
          value={formik.values.password} onChangeText={formik.handleChange('password')} onBlur={formik.handleBlur('password')}
        />
        {/* Submit Button  */}
        <TouchableOpacity onPress={formik.handleSubmit} style={{ borderWidth: 1, borderColor: '#112D4E', borderRadius: 5, width: '90%', marginLeft: '5%', padding: 10, marginTop: 10, backgroundColor: "#112D4E" }}>
          <Text style={{ textAlign: 'center', color: "white" }}>Log in</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  )
}