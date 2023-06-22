import { View, Text, Button } from 'react-native'
import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput } from 'react-native';

export default function SignIn({ navigation }) {

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required').min(5, "Name must be more than 5 characters").max(20, "Name must be less than 20 characters"),
    email: Yup.string().required('Email is required').email('Example: exa@gmail.com'),
    phone: Yup.string().required('Phone number is required').matches(/^(010|011|012|015)[0-9]{8}/, "Number must be Egyptian number"),
    password: Yup.string().required('Password is required').matches(/^[A-Za-z0-9-_.]{5,15}/, 'Password must be letters or numbers from 10 to 15 '),
    rePassword: Yup.string().required('RePassword is required').oneOf([Yup.ref("password", "Password doesn't match")]),
  })

  function handleSubmit(values) {
    axios.post("https://route-ecommerce.onrender.com/api/v1/auth/signup", values)
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
        <TextInput
          style={[
            { borderWidth: 1, borderColor: 'grey', padding: 10, marginBottom: 10 },
            formik.touched.name && formik.errors.name && { borderColor: 'red' },
          ]}
          placeholder='Name'
          name="name"
          id='name'
          value={formik.values.name}
          onChangeText={formik.handleChange('name')}
          onBlur={formik.handleBlur('name')}
        />
      </View>
    </ScrollView>
  )
}