import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import { CardField } from '@stripe/stripe-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function PaymentComponent({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [paymentError, setPaymentError] = useState(null);
  const [clientSecret, setClientSecret] = useState(null);
  const [billingDetails, setBillingDetails] = useState({
    name: '',
    email: '',
  });
  const [showThankYouModal, setShowThankYouModal] = useState(false);

  const handleCloseModal = () => {
    setShowThankYouModal(false);
    navigation.navigate('Home');
  };

  useEffect(() => {
    fetch('https://bvbbcbvv.onrender.com/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        currency: 'USD',
        amount: '1000',
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setClientSecret(data.clientSecret);
      })
      .catch((error) => {
        console.error('Error fetching client secret:', error);
      });
  }, []);

  const handlePayPress = async () => {
    setLoading(true);

    const cardElement = {
      card: {
        number: '4242424242424242',
        exp_month: 12,
        exp_year: 2023,
        cvc: '123',
      },
    };

    try {
      const response = await fetch('https://bvbbcbvv.onrender.com/pay', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          payment_method_data: {
            type: 'card',
            card: cardElement,
          },
          billing_details: {
            name: billingDetails.name,
            email: billingDetails.email,
          },
          client_secret: clientSecret,
        }),
      });

      const data = await response.json();
      console.log(data);

      if (data.error) {
        console.log('Payment confirmation error', data.error);
        setPaymentError(data.error.message || 'Something went wrong');
      } else {
        console.log('Payment succeeded!');
        setPaymentError(null);
        setShowThankYouModal(true);
      }
    } catch (error) {
      console.log('Confirm PaymentIntent error', error);
      setPaymentError(error.message || 'Something went wrong');
    }

    setLoading(false);
  };

  return (
    <View style={{ padding: 20 }}>
      <View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 25, fontWeight: 'bold', marginBottom: 10, color: "#112D4E" }}>
            Checkout
          </Text>
          <Icon name="credit-card" size={30} color="#112D4E" />
        </View>
        <View style={{ backgroundColor: "#112D4E", width: "100%", height: "3%" }}></View>
      </View>
      <View>
        <Text style={{ fontSize: 16 }}>
          Your Invoice
        </Text>
        <View style={{
          borderRadius: 5,
          elevation: 0.6,
          flexDirection: "row", padding: "5%", margin: "3%", justifyContent: "space-between"
        }}>
          <Text>#smth</Text>
          <Text>20 USD</Text>
        </View>
      </View>
      <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10 }}>Card Information</Text>
      <Text>Name:</Text>
      <TextInput
        style={{
          borderWidth: 1, padding: "5%", margin: "3%", borderStyle: "solid",
          borderColor: "#3F72AF", padding: "4%"
        }}
        type="name"
        placeholder='Full Name'
      />
      <TextInput
        value={billingDetails.name}
        onChangeText={(text) => setBillingDetails((prev) => ({ ...prev, name: text }))}
      />
      <Text>Email:</Text>
      <TextInput
        style={{
          borderWidth: 1, padding: "5%", margin: "3%", borderStyle: "solid",
          borderColor: "#3F72AF", padding: "4%"
        }}
        type="name"
        placeholder='nermeen.morgan99@gmail.com'
      />
      <TextInput
        value={billingDetails.email}
        onChangeText={(text) => setBillingDetails((prev) => ({ ...prev, email: text }))}
      />
      <CardField
        postalCodeEnabled={false}
        style={{
          height: 50, marginBottom: "5%", borderColor: "#112D4E", borderStyle: "solid", borderWidth: 20
        }}
        onCardChange={(cardDetails) => {
          console.log('cardDetails', cardDetails);
        }}
      />
      <Button
        style={{ borderRadius: 20 }}
        color="#3F72AF"
        title={loading ? 'Loading...' : 'Pay Now'}
        disabled={loading}
        onPress={handlePayPress}
      />
      {paymentError && (
        <Text style={{ color: 'red', marginTop: 10 }}>{paymentError}</Text>
      )}

      <Modal  visible={showThankYouModal} animationType="slide">
  <View style={stylesArr.modalContainer}>
    <View style={stylesArr.modalHeader}>
    <View style={stylesArr.checkCircle}>
  <Icon  name="check" size={20} color="#FFF" />
</View>
      <TouchableOpacity onPress={handleCloseModal}>
        <Text style={stylesArr.modalCloseButton}>X</Text>
      </TouchableOpacity>
    </View>
    <View style={stylesArr.modalBody}>
      <Text style={stylesArr.modalThankYouText}>Payment Success!</Text>
    </View>
  </View>
</Modal>
    </View>
  );
}
const stylesArr = StyleSheet.create({
  imagesContainer: {
    flexDirection: "row",
    marginLeft:17
  },
  image: {
    width: 80,
    height: 100,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 3,
    borderRadius: 10,
  },

  RestaurantStyle:{
    borderTopWidth:1,
    borderTopColor:'#112D4E',
    borderTopWidth:0.2,
    paddingTop:10,
  
  },
  logoContainer: {
    backgroundColor: "#F5F8FC",
    borderBottomColor:"#DBE2EF",
    borderBottomWidth:0.9,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
    flexDirection: "row",
    width:"100%",
    justifyContent:"center",
    
    borderBottomColor:"#DBE2EF"
    // ...Platform.select({
    //   ios: {
    //     shadowColor: 'black',
    //     shadowOpacity: 0.1,
    //     shadowOffset: {
    //       width: 0,
    //       height: 1,
    //     },
    //     shadowRadius: 4,
    //   },
    //   android: {
    //     elevation: 4,
    //   },
    // }),
  },


  modalViewStyle:{
    height:10
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalImage: {
    width: '90%',
    height: '90%',
  },
  
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  checkCircle: {
    marginTop:"10%",
    marginLeft:"45%",
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#112D4E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  







  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  modalCloseButton: {
    fontSize: 15,
    fontWeight: 'bold',
backgroundColor: '#112D4E',
color:"white",
borderRadius:5,
paddingHorizontal:7,


  },
  modalBody: {
    backgroundColor: '#fff',
    padding: 20,
    width: '100%',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  modalInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  feedbackMessage: {
    height: 100,
    textAlignVertical: 'top',
  },
  modalSubmitButton: {
    backgroundColor: '#112D4E',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  modalSubmitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalThankYouText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom:"10%"
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  }

});