import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput } from 'react-native';
import { useFormik } from 'formik'
import * as Yup from 'yup';
import axios from 'axios';
import { TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';


export default function SignIn({ navigation }) {

  const [isLoading, setIsLoading] = useState(false)
  const [errorMsg, seterrorMsg] = useState('')

  const validationSchema = Yup.object({
    email: Yup.string().required('Email is required').email('Example: exa@gmail.com'),
    password: Yup.string().required('Password is required').matches(/^[A-Za-z0-9-_.]{5,15}/, 'Password must be letters or numbers from 10 to 15 '),
  })

  function handleSubmit(values) {
    setIsLoading(true)
    axios.post("https://route-ecommerce.onrender.com/api/v1/auth/signin", values)
      .then((res) => {
        if (res.data.message === "success") {
          setIsLoading(false)
        }
      })
      .catch((error) => {
        console.warn(error)
        setIsLoading(false)
        seterrorMsg(error.response.data.message)
      })
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
          style={formik.errors.email && formik.touched.email ? styles.inputError : styles.input}
          placeholder='Email' name='email' id='email'
          value={formik.values.email} onChangeText={formik.handleChange('email')} onBlur={formik.handleBlur('email')}
        />
        {/* Passwrod */}
        <TextInput
          style={formik.errors.password && formik.touched.password ? styles.inputError : styles.input}
          placeholder='Password' name='password' id='password' secureTextEntry={true}
          value={formik.values.password} onChangeText={formik.handleChange('password')} onBlur={formik.handleBlur('password')}
        />
        {/* Submit Button  */}
        {isLoading ?
          <TouchableOpacity
            style={[styles.input, styles.submitButton]}
            onPress={formik.handleSubmit}
            disabled={formik.dirty && formik.isValid ? false : true}>
            <Text style={styles.submitText}>Loading</Text>
          </TouchableOpacity>
          :
          <TouchableOpacity
            style={[styles.input, styles.submitButton]}
            onPress={formik.handleSubmit}
            disabled={formik.dirty && formik.isValid ? false : true}>
            <Text style={styles.submitText}>Login</Text>
          </TouchableOpacity>}

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#112D4E',
    borderRadius: 5,
    width: '90%',
    marginLeft: '5%',
    padding: 10,
    marginTop: 10
  },
  inputError: {
    borderWidth: 1,
    borderColor: '#112D4E',
    borderRadius: 5,
    width: '90%',
    marginLeft: '5%',
    padding: 10,
    marginTop: 10,
    borderColor: 'red'
  },
  submitButton: {
    backgroundColor: '#112D4E'
  },
  submitText: {
    textAlign: 'center',
    color: 'white'
  }
})