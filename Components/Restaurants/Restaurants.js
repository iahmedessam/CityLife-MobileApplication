import React, { useState } from "react";
import { useContext } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
  Linking,
} from "react-native";
import { DataContext } from "../../Context/Data";
import Feedback_Complains from "../Feedback_Complains";
import {Modal as Model,CheckCircleIcon} from "native-base";
import styles from "../../Styles";

export default function Restaurants() {
  const { allRestaurants, fontsLoaded } = useContext(DataContext);
  const [feedbackName, setFeedbackName] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [selectedImg, setSelectedImg] = useState(null);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);

  const [message, setMessage] = useState('')

  const handlefeedbackName = (value) => {
    setFeedbackName(value);
  };

  const handlefeedbackMessage = (value) => {
    setFeedbackMessage(value);
  };

  const handleSubmit = () => {

    setFeedbackName("");
    setFeedbackMessage("");
    setShowModal(false);
    setShowThankYouModal(true);
  };

  const [showModal, setShowModal] = useState(false);
  const [showThankYouModal, setShowThankYouModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setShowThankYouModal(false);
  };

  return (
    <>

      <ScrollView style={{ backgroundColor: "white" }} >
        <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 21, color: "#112D4E", marginTop: 20 }}>All Restaurants</Text>
        {allRestaurants.map((ele) => (
          <View style={[styles.card, stylesArr.RestaurantStyle]} key={ele.id}>
            <ScrollView horizontal={true} style={{ marginHorizontal: 10, marginBottom: 10 }}>
              <View style={stylesArr.imagesContainer}>
                <TouchableOpacity onPress={() => setSelectedImg(ele.img1)}>
                  <Image style={stylesArr.image} source={{ uri: ele.img1 }} resizeMode="cover" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedImg(ele.img1)}>
                  <Image style={stylesArr.image} source={{ uri: ele.img1 }} resizeMode="cover" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedImg(ele.img1)}>
                  <Image style={stylesArr.image} source={{ uri: ele.img1 }} resizeMode="cover" />
                </TouchableOpacity>
              </View>
            </ScrollView>
            <View style={stylesArr.logoContainer}>
              <Image style={stylesArr.logo} source={{ uri: ele.logo }} />
              <Text style={[styles.title]}>{ele.name}</Text>
              <View style={stylesArr.divider} />
            </View>

            <View style={[styles.content, { alignItems: "center" }]}>
              <Text style={[styles.overview, { fontFamily: fontsLoaded ? 'boldItalic' : null }]}>Overview: {ele.overview}</Text>
              <Text style={[styles.overview, { fontFamily: fontsLoaded ? 'boldItalic' : null }, { textAlign: "center" }]}>Address: {ele.address}</Text>
            </View>

            <View style={styles.buttonsSection}>
              <View style={styles.buttons}>
                <Text style={styles.buttonsText}>{ele.Rating} <Icon name="star" size={15} color="#C3801B" /></Text>
                <TouchableOpacity onPress={() => Linking.openURL(`tel:${ele.number}`)}>
                  <Text style={styles.buttonsText}>Phone <Icon name="phone" size={15} color="white" /></Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL(ele.website)}>
                  <Text style={styles.buttonsText}>Website</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL(ele.location)}>
                  <Text style={styles.buttonsText}>Location <Icon name="map-marker" size={15} color="white" /></Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.feedback} onPress={()=>{
                  setMessage(ele.name)
                  setShowModal3(true)
                  }}>
                <Text style={styles.feedbackText}>Feedback</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}

        {/* <Modal visible={showModal} animationType="slide">
          <View style={stylesArr.modalContainer}>
            <View style={stylesArr.modalHeader}>
              <Text style={stylesArr.modalTitle}>Leave Feedback</Text>
              <TouchableOpacity onPress={handleCloseModal}>
                <Text style={stylesArr.modalCloseButton}>X</Text>
              </TouchableOpacity>
            </View>
            <View style={stylesArr.modalBody}>
              <TextInput
                style={stylesArr.modalInput}
                placeholder="Your Name"
                value={feedbackName}
                onChangeText={handlefeedbackName}
              />
              <TextInput
                style={[stylesArr.modalInput, stylesArr.feedbackMessage]}
                placeholder="Your Feedback"
                value={feedbackMessage}
                onChangeText={handlefeedbackMessage}
                multiline
              />
              <TouchableOpacity style={stylesArr.modalSubmitButton} onPress={handleSubmit}
                disabled={feedbackName === '' || feedbackMessage === ''}
              >
                <Text style={stylesArr.modalSubmitButtonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <Modal visible={showThankYouModal} animationType="slide">
          <View style={stylesArr.modalContainer}>
            <View style={stylesArr.modalHeader}>
              <View style={stylesArr.checkCircle}>
                <Icon name="check" size={20} color="#FFF" />
              </View>
              <TouchableOpacity onPress={handleCloseModal}>
                <Text style={stylesArr.modalCloseButton}>X</Text>
              </TouchableOpacity>
            </View>
            <View style={stylesArr.modalBody}>
              <Text style={stylesArr.modalThankYouText}>Thank you for your feedback!</Text>
            </View>
          </View> */}
        {/* </Modal> */}
      </ScrollView>
      {selectedImg && (
        <Modal visible={true} transparent={true}>
          <TouchableOpacity style={stylesArr.modalBackground} onPress={() => setSelectedImg(null)}>
            <Image source={{ uri: selectedImg }} style={stylesArr.modalImage} resizeMode="contain" />
          </TouchableOpacity>
        </Modal>
      )}



  {/* FeedBack Modal */}
  <Model
        isOpen={showModal3}
        onClose={() => {
          setShowModal3(false);
        }}
        size="lg"
      >
        <Model.Content maxWidth="350">
          <Model.CloseButton />
          <Model.Header>Your FeedBack</Model.Header>
          <Model.Body>
           <Feedback_Complains setclose={setShowModal3} setShow={setShowModal4}  message={message}></Feedback_Complains>
          </Model.Body>
        </Model.Content>
      </Model>

      <Model
        isOpen={showModal4}
        onClose={() => {
          setShowModal4(false);
        }}
        size="lg"
      >
        <Model.Content maxWidth="350">
          <Model.CloseButton />
          {/* <Model.Header>Your FeedBack</Model.Header> */}
          <Model.Body>
          <CheckCircleIcon size="20" my="2" mx="auto" color="emerald.500" />
           <Text style={{fontSize:20,textAlign:"center"}}>We Received your Feedback, Thanks</Text>
          </Model.Body>
        </Model.Content>
      </Model>
    </>
  );
}

const stylesArr = StyleSheet.create({
  imagesContainer: {
    flexDirection: "row",
    marginLeft: 17
  },
  image: {
    width: 80,
    height: 100,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 3,
    borderRadius: 10,
  },

  RestaurantStyle: {
    borderTopWidth: 1,
    borderTopColor: '#112D4E',
    borderTopWidth: 0.2,
    paddingTop: 10,

  },
  logoContainer: {
    backgroundColor: "#F5F8FC",
    borderBottomColor: "#DBE2EF",
    borderBottomWidth: 0.9,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",

    borderBottomColor: "#DBE2EF"
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


  modalViewStyle: {
    height: 10
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
    marginTop: "10%",
    marginLeft: "45%",
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
    color: "white",
    borderRadius: 5,
    paddingHorizontal: 7,


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
    marginBottom: "10%"
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  }

});