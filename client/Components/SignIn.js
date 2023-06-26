import React from 'react';
import { ActivityIndicator, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Image } from 'react-native';
import axios from 'axios';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useContext } from 'react';
import { DataContext } from '../Context/Data';

export default function SignIn({ navigation }) {

  const [isLoading, setIsLoading] = useState(false)
  const [errorMsg, seterrorMsg] = useState('')
  const { saveUserData } = useContext(DataContext)

  return <>
    <Formik
      initialValues={{ email: '', password: '' }}

      onSubmit={values => {
        setIsLoading(true)
        axios.post("https://route-ecommerce.onrender.com/api/v1/auth/signin", values)
          .then(async (res) => {
            if (res.data.message === "success") {
              const token = res.data.token;
              AsyncStorage.setItem('token', token);
              await saveUserData();
              setIsLoading(false)
              navigation.navigate("Home")
              // console.warn(token)
            }
          })
          .catch((error) => {
            setIsLoading(false)
            seterrorMsg(error.response.data.message)
          })
      }}

      validationSchema={Yup.object({
        email: Yup.string().required('Email is required').email('Example: exa@gmail.com'),
        password: Yup.string().required('Password is required').matches(/^[A-Za-z0-9-_.]{5,15}/, 'Password must be letters or numbers from 10 to 15 '),
      })}
    >
      {({ handleChange, setFieldTouched, handleSubmit, values, errors, touched, dirty, isValid }) => (
        <View>

          <Image style={styles.img} source={require("../assets/signin.png")}></Image>

          {errorMsg ? <Text style={styles.errorText}> {errorMsg} </Text> : null}

          {/* Email  */}
          <TextInput
            style={errors.email && touched.email ? styles.inputError : styles.input}
            placeholder='Email'
            value={values.email}
            onChangeText={handleChange('email')}
            onBlur={() => setFieldTouched('email')}
          />
          {errors.email && touched.email ? <Text style={{ color: 'red', marginLeft: '5%' }}>{errors.email}</Text> : null}
          {/* Password */}
          <TextInput
            style={errors.password && touched.password ? styles.inputError : styles.input}
            placeholder='Password'
            secureTextEntry={true}
            value={values.password}
            onChangeText={handleChange('password')}
            onBlur={() => setFieldTouched('password')}
          />
          {errors.password && touched.password ? <Text style={{ color: 'red', marginLeft: '5%' }}>{errors.password}</Text> : null}
          {/* Login Button  */}
          {isLoading ?
            <TouchableOpacity
              style={[styles.input, styles.submitButton]}
              onPress={handleSubmit}
              disabled={dirty && isValid ? false : true}>
              <ActivityIndicator
                size={20}
                color='white'
                animating={true}
              />
            </TouchableOpacity>
            :
            <TouchableOpacity
              style={[styles.input, styles.submitButton]}
              onPress={handleSubmit}
              disabled={dirty && isValid ? false : true}>
              <Text style={styles.submitText}>Login</Text>
            </TouchableOpacity>}

        </View>
      )}
    </Formik >
  </>
};

const styles = StyleSheet.create({
  img: {
    width: 250,
    height: 200,
    marginTop: 50,
    marginBottom: 30,
    alignSelf: 'center'
  },
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
  },
  errorText: {
    color: 'red',
    textAlign: "center"
  }
})