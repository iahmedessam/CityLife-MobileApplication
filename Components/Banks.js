import { View, Text, ScrollView, TouchableOpacity, Linking, Image } from 'react-native';
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../Styles'
import { useContext } from 'react';
import { DataContext } from '../Context/Data';
import Feedback_Complains from "./Feedback_Complains";
import {Modal} from "native-base";

export default function Banks() {
  
  const {fontsLoaded,banks, loadingBanks, errorBanks } = useContext(DataContext)
  const [showModal3, setShowModal3] = useState(false);
  const [message, setMessage] = useState('')


  
  if (loadingBanks) {
    return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}><Text style={{ fontSize: 16 }}>loading...</Text></View>;
  }

  if (errorBanks) {
    return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}><Text> <Icon name="exclamation-triangle" size={40} color="red" /></Text></View>;
  }

  //Phone Function
  function handlePhonePress(number) {
    const supported = Linking.canOpenURL(`tel:${number}`);
    if (supported) {
      Linking.openURL(`tel:${number}`);
    }
  }

  //Feedback Function
  function handlePress() {
  }

  return <>
    <ScrollView>
      {banks.map((ele) =>
        <View style={styles.card} key={ele.id}>

          {/* Image */}
          <Image style={styles.img} source={{ uri: ele.img1 }}></Image>

          {/* Body */}
          <View style={styles.content}>
            <Text style={[styles.title]}>{ele.name}</Text>
            <Text style={[styles.overview, { fontFamily: fontsLoaded ? 'italic' : null }]}>{ele.overview}</Text>
          </View>

          {/* Buttons Section */}
          <View style={styles.buttonsSection}>
            <View style={styles.buttons}>
              <Text style={styles.buttonsText}>{ele.Rating} <Icon name="star" size={15} color="#C3801B" /></Text>
              <TouchableOpacity onPress={() => handlePhonePress(ele.number)}>
                <Text style={styles.buttonsText}>Phone <Icon name="phone" size={15} color="white" /></Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL(ele.website)}>
                <Text style={styles.buttonsText}>Website</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL(ele.location)}>
                <Text style={styles.buttonsText}>Location <Icon name="map-marker" size={15} color="white" /></Text>
              </TouchableOpacity>
            </View>
            {/* Feedback Button */}
            <TouchableOpacity style={styles.feedback} onPress={handlePress}>
              <Text style={styles.feedbackText} onPress={()=>{
                  setMessage(ele.name)
                  setShowModal3(true)
                  }}>Feedback</Text>
            </TouchableOpacity>

          </View>
        </View>)}
    </ScrollView>

    {/* FeedBack Modal */}
      <Modal
        isOpen={showModal3}
        onClose={() => {
          setShowModal3(false);
        }}
        size="lg"
      >
        <Modal.Content maxWidth="350">
          <Modal.CloseButton />
          <Modal.Header>Your FeedBack</Modal.Header>
          <Modal.Body>
           <Feedback_Complains message={message}></Feedback_Complains>
          </Modal.Body>
        </Modal.Content>
      </Modal>
  </>
};