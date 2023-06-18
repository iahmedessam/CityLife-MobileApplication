import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, ScrollView, Modal } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ContactUs = () => {
  const [showModal, setShowModal] = useState(false);

  let validationSchema = Yup.object({
    name: Yup.string().required().min(3, 'Name must be between 3 and 40 characters').max(40),
    email: Yup.string().required().email('Example: example@gmail.com '),
    phone: Yup.string().required().matches(/^01[0125][0-9]{8}$/, 'Phone Must Be Egyptian Number'),
    message: Yup.string().required().min(5, 'Message must be between 5 and 500 characters').max(500),
  });

  let formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
    validationSchema,
    onSubmit: () => {
      setShowModal(true);
    },
  });

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 20 }}>
        <View style={{ marginBottom: 20 }}>
          <Text style={{ fontSize: 24 }}>Get in touch</Text>
          <Text style={{ fontSize: 18, color: 'grey' }}>We will answer your questions and problems</Text>
        </View>

        <View>
          <TextInput
            onBlur={formik.handleBlur('name')}
            placeholder="Enter your name"
            style={[
              { borderWidth: 1, borderColor: 'grey', padding: 10, marginBottom: 10 },
              formik.touched.name && formik.errors.name && { borderColor: 'red' },
            ]}
            onChangeText={formik.handleChange('name')}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name && (
            <Text style={{ color: 'red' }}>{formik.errors.name}</Text>
          )}

          <TextInput
            onBlur={formik.handleBlur('email')}
            placeholder="Enter your email"
            style={[
              { borderWidth: 1, borderColor: 'grey', padding: 10, marginBottom: 10 },
              formik.touched.email && formik.errors.email && { borderColor: 'red' },
            ]}
            onChangeText={formik.handleChange('email')}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <Text style={{ color: 'red' }}>{formik.errors.email}</Text>
          )}

          <TextInput
            onBlur={formik.handleBlur('phone')}
            placeholder="Enter your phone number"
            style={[
              { borderWidth: 1, borderColor: 'grey', padding: 10, marginBottom: 10 },
              formik.touched.phone && formik.errors.phone && { borderColor: 'red' },
            ]}
            onChangeText={formik.handleChange('phone')}
            value={formik.values.phone}
          />
          {formik.touched.phone && formik.errors.phone && (
            <Text style={{ color: 'red' }}>{formik.errors.phone}</Text>
          )}

          <TextInput
            onBlur={formik.handleBlur('message')}
            placeholder="Leave us your message"
            style={[
              { borderWidth: 1, borderColor: 'grey', padding: 10, marginBottom: 10, height: 100 },
              formik.touched.message && formik.errors.message && { borderColor: 'red' },
            ]}
            onChangeText={formik.handleChange('message')}
            value={formik.values.message}
            multiline
          />
          {formik.touched.message && formik.errors.message && (
            <Text style={{ color: 'red' }}>{formik.errors.message}</Text>
          )}

          <TouchableOpacity
            disabled={!(formik.isValid && formik.dirty)}
            onPress={formik.handleSubmit}
            style={{
              backgroundColor: '#09913C',
              borderRadius: 5,
              paddingVertical: 10,
              alignItems: 'center',
              marginTop: 10,
            }}
          >
            <Text style={{ color: 'white', fontWeight: 'bold' }}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>


      <Modal visible={showModal} animationType="fade">
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 20, marginBottom: 20 }}>Message Sent Successfully</Text>
          <Button style={{ backgroundColor: "#09913C" }} title="Close" onPress={() => setShowModal(false)} />
        </View>
      </Modal>
    </ScrollView>
  );
};

export default ContactUs;