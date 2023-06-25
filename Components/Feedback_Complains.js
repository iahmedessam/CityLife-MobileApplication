import React, { useContext } from 'react';
import { ActivityIndicator, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Image } from 'react-native';
import axios from 'axios';
import { ScrollView } from 'react-native';
import { useState } from 'react';
import { DataContext } from '../Context/Data';
import {
  Modal,
  VStack,
  HStack,
  Select,
  CheckIcon,
  CheckCircleIcon,
  Radio,
  Center,
  FormControl,
  Stack,
  WarningOutlineIcon,
  Input,
} from "native-base";
import uuid from "react-native-uuid";


export default function Feedback_Complains({message}) {
  const {addFeedback} = useContext(DataContext)
  const [isLoading, setIsLoading] = useState(false)
  const [errorMsg, seterrorMsg] = useState('')
  const [showModal,setShowModal] = useState(false)

  
  return (
    <>
    <Formik
      initialValues={{ Name: '', email: '', phone: '', message: '' }}
      
      onSubmit={ async (values) => {
        console.warn(values)
         await addFeedback(values,message)
            // let ID = uuid.v4().slice(0,4)
            // axios.post("https://application-mock-server.loca.lt/feedback", {...values,id: ID ,place: message, type:"FeedBack"})
            // .catch((err)=>{
            //   console.warn(err)
            // })
            // try {
            //   const response = await fetch("https://application-mock-server.loca.lt/feedback", {
            //     method: "POST",
            //     headers: {
            //       "Content-Type": "application/json",
            //     },
            //     body: JSON.stringify({ id: ID, place: "cairo", type: "FeedBack", Name:"ahmed", email: "Akram@gmail.com",phone: "01112590070"}),
            //   });
        
            //   if (!response.ok) {
            //     throw new Error("Something went wrong");
            //   }
            // } catch (error) {
            //   console.error(error);
            // }
      }}

      validationSchema={Yup.object({
        Name: Yup.string().required('Name is required').min(5, "Name must be more than 5 characters").max(20, "Name must be less than 20 characters"),
        email: Yup.string().required('Email is required').email('Example: exa@gmail.com'),
        phone: Yup.string().required('Phone number is required').matches(/^(010|011|012|015)[0-9]{8}$/, "Number must be Egyptian number"),
        message: Yup.string().required('Message is required').min(10)
      })}
    >
      {({ handleChange, setFieldTouched, handleSubmit, values, errors, touched, dirty, isValid }) => (
        <ScrollView>
          <View>
            {/* Place  */}
            <TextInput
              style={styles.input}
              defaultValue={message}
              editable={false}   
              selectTextOnFocus={false} 
            />

            {/* Name  */}
            <TextInput
              style={errors.Name && touched.Name ? styles.inputError : styles.input}
              placeholder='Name'
              name="Name"
              value={values.Name}
              onChangeText={handleChange('Name')}
              onBlur={() => setFieldTouched('Name')}
            />
            {errors.Name && touched.Name ? <Text style={{ color: 'red', marginLeft: '5%' }}>{errors.Name}</Text> : null}
            {/* Email  */}
            <TextInput
              style={errors.email && touched.email ? styles.inputError : styles.input}
              placeholder='Email'
              name="email"
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
            />
            {errors.email && touched.email ? <Text style={{ color: 'red', marginLeft: '5%' }}>{errors.email}</Text> : null}
            {/* Phone  */}
            <TextInput
              style={errors.phone && touched.phone ? styles.inputError : styles.input}
              placeholder='Phone'
              name="phone"
              value={values.phone}
              onChangeText={handleChange('phone')}
              onBlur={() => setFieldTouched('phone')}
            />
            {errors.phone && touched.phone ? <Text style={{ color: 'red', marginLeft: '5%' }}>{errors.phone}</Text> : null}
            {/* message */}
            <TextInput
              style={errors.message && touched.message ? styles.inputError : styles.input}
              placeholder='Message'
              name="message"
              value={values.message}
              onChangeText={handleChange('message')}
              onBlur={() => setFieldTouched('message')}
            />
            {errors.message && touched.message ? <Text style={{ color: 'red', marginLeft: '5%' }}>{errors.message}</Text> : null}
            {/* submit Button  */}
            
              <TouchableOpacity
                style={[styles.input, styles.submitButton]}
                onPress={()=>{
                  handleSubmit
                  // setShowModal(true)
                  // setShowModal3(false)
                }}
                disabled={dirty && isValid ? false : true}>
                <Text style={styles.submitText}>Submit</Text>
              </TouchableOpacity>

          </View>
        </ScrollView>
      )}
    </Formik>

     {/* FeedBack Modal */}
     {/* <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        size="lg"
      >
        <Modal.Content maxWidth="350">
          <Modal.CloseButton />
          <Modal.Header>Your FeedBack</Modal.Header>
          <Modal.Body>
           <Text>Good</Text>
          </Modal.Body>
        </Modal.Content>
      </Modal> */}
  </>
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
  },
  errorText: {
    color: 'red',
    textAlign: "center"
  }
})