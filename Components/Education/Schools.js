import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Linking, Image } from 'react-native';
import React from 'react'
import useAxios from 'axios-hooks'
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../Styles';
import { useContext } from 'react';
import { DataContext } from '../../Context/Data';
import Feedback_Complains from "../Feedback_Complains";
import {Modal} from "native-base";
import { useState } from 'react';

const Schools = () => {
    const {fontsLoaded,schools, loadingSchools, errorSchools} = useContext(DataContext)
    const [showModal3, setShowModal3] = useState(false);
    const [message, setMessage] = useState('')

    if (loadingSchools) {
      return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}><Text style={{ fontSize: 18 }}>loading...</Text></View>;
    }
  
    if (errorSchools) {
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
    return (
       <>
        <ScrollView>
      {schools.map((ele) =>
        <View style={styles.card} key={ele.id}>

          {/* Image */}
          <Image style={styles.img} source={{ uri: ele.img1 }}></Image>

          {/* Body */}
          <View style={[styles.content,{alignItems:"center"}]}>
            <Text style={[styles.title]}>{ele.name}</Text>
            <Text style={[styles.overview,{fontFamily: fontsLoaded? 'boldItalic' : null}]}>Overview: {ele.overview}</Text>
            <Text style={[styles.overview,{fontFamily: fontsLoaded? 'boldItalic' : null}]}>Address: {ele.address}</Text>
          </View>

          {/* Buttons Section */}
          <View style={styles.buttonsSection}>
            <View style={styles.buttons}>
              <Text style={styles.buttonsText}>{ele.Rating} <Icon name="star" size={15} color="#C3801B" /></Text>
              <TouchableOpacity onPress={() => handlePhonePress(ele.number)}>
                <Text style={styles.buttonsText}>Phone <Icon name="phone" size={15} color="white" /></Text>
              </TouchableOpacity>
             
              <TouchableOpacity onPress={() => Linking.openURL(ele.location)}>
                <Text style={styles.buttonsText}>Location <Icon name="map-marker" size={15} color="white" /></Text>
              </TouchableOpacity>
            </View>
            {/* Feedback Button */}
            <TouchableOpacity style={styles.feedback} onPress={()=>{
                  setMessage(ele.name)
                  setShowModal3(true)
                  }}>
              <Text style={styles.feedbackText}>Feedback</Text>
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
    );
}

export default Schools;
