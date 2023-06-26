import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Linking,
  Image,
} from "react-native";
import React from "react";
import useAxios from "axios-hooks";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "../Styles";
import { useContext } from "react";
import { DataContext } from "../Context/Data";
import { FlatList } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Button,
  Modal,
  VStack,
  HStack,
  Select,
  CheckIcon,
  CheckCircleIcon,
  Radio,
  Center,
} from "native-base";
import { useState,useEffect,useCallback } from "react";
import Feedback_Complains from "./Feedback_Complains";

export default function Transportation() {
  const { fontsLoaded, transportation, loadingTrans, errorTrans } = useContext(DataContext);
    const [showModal, setShowModal] = useState(false);
    const [line, setLine] = useState("");
    const [showModal3, setShowModal3] = useState(false);
    const [showModal4, setShowModal4] = useState(false);
    const [message, setMessage] = useState('')

    const handleChange = useCallback((val) => {
      setLine(val)
      setShowModal(true);
    }, []);


  if (loadingTrans) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 18 }}>loading...</Text>
      </View>
    );
  }

  if (errorTrans) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>
          <Icon name="exclamation-triangle" size={40} color="red" />
        </Text>
      </View>
    );
  }

  //Phone Function
  function handlePhonePress(number) {
    const supported = Linking.canOpenURL(`tel:${number}`);
    if (supported) {
      Linking.openURL(`tel:${number}`);
    }
  }

  //Feedback Function
  function handlePress() {}
  return (
    <>
      <FlatList
        data={transportation}
        renderItem={({ item }) => (
          <>
            <View style={styles.card} key={item.id}>
              {/* Image */}
              <Image style={styles.img} source={{ uri: item.img1 }}></Image>

              {/* Body */}
              <View style={[styles.content, { alignItems: "center" }]}>
                <Text style={[styles.title]}>{item.name}</Text>
                <Text
                  style={[
                    styles.overview,
                    { fontFamily: fontsLoaded ? "boldItalic" : null },
                  ]}
                >
                  {item.dur}
                </Text>
              </View>
              <View
                style={{
                  marginBottom: 20,
                }}
              >
                <Text
                style={{
                  marginLeft:32
                }}
                >lines:</Text>
                <Select
                  selectedValue={line}
                  minWidth="200"
                  accessibilityLabel="Choose Service"
                  placeholder="Choose Service"
                  _selectedItem={{
                    bg: "gray.300",
                    endIcon: <CheckIcon size="5" />,
                  }}
                  mt={1} 
                  mx={8} 
                  // style={{
                  //   marginHorizontal:20
                  // }}           
                  onValueChange={(val) => 
                    {
                      handleChange(val)
                  }}
                >
                  <Select.Item label="Choose" value="" disabled />
                  {item.line1 ? (
                    <Select.Item
                      label="line 1"
                      value={item.line1}
                    />
                  ) : null}
                  {item.line2 ? (
                    <Select.Item
                      label="line 2"
                      value={item.line2}
                    />
                  ) : null}
                  {item.line3 ? (
                    <Select.Item
                      label="line 3"
                      value={item.line3}
                    />
                  ) : null}
                  {item.line4 ? (
                    <Select.Item
                      label="line 4"
                      value={item.line4}
                    />
                  ) : null}
                  {item.line5 ? (
                    <Select.Item
                      label="line 5"
                      value={item.line5}
                    />
                  ) : null}
                  {item.line6 ? (
                    <Select.Item
                      label="line 6"
                      value={item.line6}
                    />
                  ) : null}
                </Select>
              </View>
              {/* Buttons Section */}
              <View style={styles.buttonsSection}>
                <View style={styles.buttons}>
                  <TouchableOpacity
                    onPress={() => handlePhonePress(item.number)}
                  >
                    <Text style={styles.buttonsText}>
                      Phone <Icon name="phone" size={15} color="white" />
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => Linking.openURL(item.location)}
                  >
                    <Text style={styles.buttonsText}>
                      Location{" "}
                      <Icon name="map-marker" size={15} color="white" />
                    </Text>
                  </TouchableOpacity>
                </View>
                {/* Feedback Button */}
                <TouchableOpacity style={styles.feedback} onPress={()=>{
                  setMessage(item.name)
                  setShowModal3(true)
                  }}>
                  <Text style={styles.feedbackText}>Feedback</Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        )}
        keyExtractor={(item) => item.id}
        // ListHeaderComponent={<Text>Buses inside and outside city</Text>}
        // ListFooterComponent={<Text>kkkkk</Text>}
      ></FlatList>
      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        size="lg"
      >
        <Modal.Content maxWidth="350">
          <Modal.CloseButton />
          <Modal.Header>Line details</Modal.Header>
          <Modal.Body>
            <Text style={{ textAlign: "center", fontSize: 18 }}>
                  {line}
            </Text>
          </Modal.Body>
        </Modal.Content>
      </Modal>


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
           <Feedback_Complains setclose={setShowModal3} setShow={setShowModal4}  message={message}></Feedback_Complains>
          </Modal.Body>
        </Modal.Content>
      </Modal>

      <Modal
        isOpen={showModal4}
        onClose={() => {
          setShowModal4(false);
        }}
        size="lg"
      >
        <Modal.Content maxWidth="350">
          <Modal.CloseButton />
          {/* <Modal.Header>Your FeedBack</Modal.Header> */}
          <Modal.Body>
          <CheckCircleIcon size="20" my="2" mx="auto" color="emerald.500" />
           <Text style={{fontSize:20,textAlign:"center"}}>We Received your Feedback, Thanks</Text>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  );
}
