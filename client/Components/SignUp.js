import React, { useContext } from 'react';
import { ActivityIndicator, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Image } from 'react-native';
import axios from 'axios';
import { ScrollView } from 'react-native';
import { useState } from 'react';
// import DocumentPicker from 'react-native-document-picker';
// import * as ImagePicker from 'expo-image-picker';
import { useEffect } from 'react';
import { DataContext } from '../Context/Data';


export default function Signup({ navigation }) {
const {AddUser} = useContext(DataContext)
  const [isLoading, setIsLoading] = useState(false)
  const [errorMsg, seterrorMsg] = useState('')
  const [file, setFile] = useState(null);
  // const [imageUri, setImageUri] = useState(null);
  const [values, setValues] = useState(null);

  // const users= useContext(DataContext)
  // const handleSelectImage = async () => {
  //   let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

  //   if (permissionResult.granted === false) {
  //     alert('Permission to access camera roll is required!');
  //     return;
  //   }

  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.Images,
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1,
  //   });

  //   if (!result.cancelled) {
  //     setImageUri(result.uri);
  //   }
  // };
  // // const handleSelectFile = async () => {
  // //   let result = await DocumentPicker.getDocumentAsync({});
  //   if (!result.cancelled) {
  //     setFile(result);
  //   }
  // }
  const handleChange = (name, value) => {
    setValues(prevValues => ({ ...prevValues, [name]: value }));
  };

  return <>
    <Formik
      initialValues={{ name: '', email: '', phone: '', password: '', rePassword: '' }}

      onSubmit={async (values) => {
await AddUser(values);
        setIsLoading(true)
        axios.post("https://route-ecommerce.onrender.com/api/v1/auth/signup", values)
          .then((res) => {
            if (res.data.message === "success") {
              setIsLoading(false)
              navigation.navigate("Sign in")
            }
          })
          .catch((error) => {
            setIsLoading(false)
            seterrorMsg(error.response.data.message)
          })
      }
      }

//       onSubmit={async (values) => {
//   setIsLoading(true);
//   try {
//     const response = await fetch("https://application-mock-server.loca.lt/users", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         Name: "Nerrmene",
//         email: "example@gmail.com",
//         phone: "01275256896",
//         password: "123456",
//         img: ""
//       }),
//     });
//     if (!response.ok) {
//       throw new Error("Failed to create user");
//     }
//     const data = await response.json();
//     setUserData(data);
//     navigation.navigate("Sign in");
//   } catch (error) {
//     seterrorMsg(error.message);
//   } finally {
//     setIsLoading(false);
//   }
// }}

      validationSchema={Yup.object({
        name: Yup.string().required('Name is required').min(5, "Name must be more than 5 characters").max(20, "Name must be less than 20 characters"),
        email: Yup.string().required('Email is required').email('Example: exa@gmail.com'),
        phone: Yup.string().required('Phone number is required').matches(/^(010|011|012|015)[0-9]{8}/, "Number must be Egyptian number"),
        password: Yup.string().required('Password is required').matches(/^[A-Za-z0-9-_.]{5,15}/, 'Password must be letters or numbers from 10 to 15 '),
        rePassword: Yup.string().required('RePassword is required').oneOf([Yup.ref("password", "Password doesn't match")]),
      })}
    >
      {({ handleChange, setFieldTouched, handleSubmit, values, errors, touched, dirty, isValid }) => (
        <ScrollView>
          <View>

            <Image style={styles.img} source={require("../assets/signup.png")}></Image>

            {/* Error message  */}
            {errorMsg ? <Text style={styles.errorText}> {errorMsg} </Text> : null}

            {/* Name  */}
            <TextInput
              style={errors.name && touched.name ? styles.inputError : styles.input}
              placeholder='Name'
              value={values.name}
              onChangeText={handleChange('name')}
              onBlur={() => setFieldTouched('name')}
            />
            {errors.name && touched.name ? <Text style={{ color: 'red', marginLeft: '5%' }}>{errors.name}</Text> : null}
            {/* Email  */}
            <TextInput
              style={errors.email && touched.email ? styles.inputError : styles.input}
              placeholder='Email'
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
            />
            {errors.email && touched.email ? <Text style={{ color: 'red', marginLeft: '5%' }}>{errors.email}</Text> : null}
            {/* Phone  */}
            <TextInput
              style={errors.phone && touched.phone ? styles.inputError : styles.input}
              placeholder='Phone'
              value={values.phone}
              onChangeText={handleChange('phone')}
              onBlur={() => setFieldTouched('phone')}
            />
            {errors.phone && touched.phone ? <Text style={{ color: 'red', marginLeft: '5%' }}>{errors.phone}</Text> : null}
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
            {/* rePassword */}
            <TextInput
              style={errors.rePassword && touched.rePassword ? styles.inputError : styles.input}
              placeholder='Re-Password'
              secureTextEntry={true}
              value={values.rePassword}
              onChangeText={handleChange('rePassword')}
              onBlur={() => setFieldTouched('rePassword')}
            />
            {errors.rePassword && touched.rePassword ? <Text style={{ color: 'red', marginLeft: '5%' }}>{errors.rePassword}</Text> : null}
            {/* Username */}
            <TextInput
              style={styles.input}
              placeholder='Username' name='username' id='username'
            />
            {/* Image */}
            {/* <TouchableOpacity
              style={styles.input}
              onPress={handleSelectFile}>
              <Text style={{ opacity: 0.3 }}>{file ? file.name : 'Upload your image'}</Text>
            </TouchableOpacity> */}

                                                              {/* //imgpicker */}

            {/* <TouchableOpacity style={styles.btn} onPress={handleSelectImage}>
                <Text style={styles.btnText}>Select Image</Text>
              </TouchableOpacity>
              {imageUri && <Image source={{ uri: imageUri }} style={styles.imagePreview} resizeMode="contain" handleChange={handleChange('img')}/>} */}

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
                <Text style={styles.submitText}>Submit</Text>
              </TouchableOpacity>}

          </View>
        </ScrollView>
      )}
    </Formik>

  </>

};

const styles = StyleSheet.create({
  img: {
    width: 250,
    height: 200,
    marginTop: 30,
    marginBottom: 10,
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
  },
  imagePreview: {
    width: '100%',
    height: 300,
    marginTop: '5%',
  },
  btn: {
    margin: '5%',
    height: 40,
    width:"40%",
    borderRadius: 5,
    backgroundColor: '#3F72AF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnDisabled: {
    margin: '5%',
    height: 40,
    borderRadius: 5,
    backgroundColor: '#BDBDBD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 16,
  },
})
