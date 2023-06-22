import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput } from 'react-native';
import { useFormik } from 'formik'
import * as Yup from 'yup';
import axios from 'axios';
import { TouchableOpacity } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

export default function SignIn({ navigation }) {

  const [isLoading, setIsLoading] = useState(false)
  const [errorMsg, seterrorMsg] = useState('')
  const [file, setFile] = useState(null);

  const handleSelectFile = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    if (!result.cancelled) {
      setFile(result);
    }
  }

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required').min(5, "Name must be more than 5 characters").max(20, "Name must be less than 20 characters"),
    email: Yup.string().required('Email is required').email('Example: exa@gmail.com'),
    phone: Yup.string().required('Phone number is required').matches(/^(010|011|012|015)[0-9]{8}/, "Number must be Egyptian number"),
    password: Yup.string().required('Password is required').matches(/^[A-Za-z0-9-_.]{5,15}/, 'Password must be letters or numbers from 10 to 15 '),
    rePassword: Yup.string().required('RePassword is required').oneOf([Yup.ref("password", "Password doesn't match")]),
  })

  function handleSubmit(values) {
    setIsLoading(true)
    axios.post("https://route-ecommerce.onrender.com/api/v1/auth/signup", values)
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
        {errorMsg ? <Text> {errorMsg} </Text> : null}
        {/* Name */}
        <TextInput
          style={formik.errors.name && formik.touched.name ? styles.inputError : styles.input}
          placeholder='Name' name='name' id='name'
          value={formik.values.name} onChangeText={formik.handleChange('name')} onBlur={formik.handleBlur('name')}
        />
        {/* Username */}
        <TextInput
          style={styles.input}
          placeholder='Username' name='username' id='username'
        />
        {/* Email */}
        <TextInput
          style={formik.errors.email && formik.touched.email ? styles.inputError : styles.input}
          placeholder='Email' name='email' id='email'
          value={formik.values.email} onChangeText={formik.handleChange('email')} onBlur={formik.handleBlur('email')}
        />
        {/* Phone */}
        <TextInput
          style={formik.errors.phone && formik.touched.phone ? styles.inputError : styles.input}
          placeholder='Phone' name='phone' id='phone' keyboardType='numeric'
          value={formik.values.phone} onChangeText={formik.handleChange('phone')} onBlur={formik.handleBlur('phone')}
        />
        {/* Birthdate */}
        <TextInput
          style={styles.input}
          placeholder='Date of birth (MM.DD.YYYY)' name='date' id='date' keyboardType='numeric' maxLength={10}
        />
        {/* Image */}
        <TouchableOpacity
          style={styles.input}
          onPress={handleSelectFile}>
          <Text>{file ? file.name : 'Upload your image'}</Text>
        </TouchableOpacity>
        {/* Passwrod */}
        <TextInput
          style={formik.errors.password && formik.touched.password ? styles.inputError : styles.input}
          placeholder='Password' name='password' id='password' secureTextEntry={true}
          value={formik.values.password} onChangeText={formik.handleChange('password')} onBlur={formik.handleBlur('password')}
        />
        {/* Re Password */}
        <TextInput
          style={formik.errors.rePassword && formik.touched.rePassword ? styles.inputError : styles.input}
          placeholder='rePassword' name='rePassword' id='rePassword' secureTextEntry={true}
          value={formik.values.rePassword} onChangeText={formik.handleChange('rePassword')} onBlur={formik.handleBlur('rePassword')}
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
            <Text style={styles.submitText}>Submit</Text>
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