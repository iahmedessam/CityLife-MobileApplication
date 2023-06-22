import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Linking,
  Image,
  Button,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import styles from "../Styles";
import { useContext } from "react";
import { DataContext } from "../Context/Data";
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
import { useCallback } from "react";
import { useState } from "react";
import DateTimePicker, {
  DateTimePickerAndroid,
} from "@react-native-community/datetimepicker";
import { Pressable } from "react-native";
import { Platform } from "react-native";

export default function MaintenancePayment() {
  const { PayArr, fontsLoaded } = useContext(DataContext);
  const [selectedName, setSelectedName] = useState("");
  const [selectedFees, setSelectedFees] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);


  const openModelBills = (name, fees) => {
    setSelectedName(name);
    setSelectedFees(fees);
    setShowModal(true);
  };

  const openModelPay = (name, fees) => {
    setSelectedName(name);
    setSelectedFees(fees);
    setShowModal2(true);
  };

  function handlePhonePress(number) {
    const supported = Linking.canOpenURL(`tel:${number}`);
    if (supported) {
      Linking.openURL(`tel:${number}`);
    }
  }

  const handleClear = useCallback(() => {
    setSelectedName("");
    setSelectedFees("");
  }, []);

  //Feedback Function
  function handlePress() {}
  return (
    <>
      <FlatList
        data={PayArr}
        renderItem={({ item }) => (
          
            <View style={styles.card} key={item.id}>
              {/* Body */}
              <View style={[styles.content, { alignItems: "center" }]}>
                <Text style={[styles.title]}>{item.name}</Text>

                <View
                  style={{
                    marginTop: 15,
                  }}
                >
                  {(() => {
                    switch (item.name) {
                      case "City Maintenance Bills":
                        return (
                          <Icon name="screwdriver" size={50} color="#900" />
                        );
                      case "El-Rehab club subscription":
                        return (
                          <Icon name="basketball-ball" size={50} color="#900" />
                        );
                      case "Water Bills":
                        return (
                          <Icon
                            name="hand-holding-water"
                            size={50}
                            color="#900"
                          />
                        );
                      case "Car Washing subscription":
                        return <Icon name="car" size={50} color="#900" />;
                      default:
                        return null;
                    }
                  })()}
                </View>
              </View>
              <View
                style={{
                  marginBottom: 20,
                }}
              ></View>
              {/* Buttons Section */}
              <View style={styles.buttonsSection}>
                {/* Feedback Button */}
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <TouchableOpacity
                    style={Styles.feedback}
                    onPress={() => {
                      openModelBills(item.name, item.fees);
                    }}
                  >
                    <Text style={styles.feedbackText}>Check Bills</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={Styles.feedback}
                    onPress={()=>{
                      openModelPay(item.name, item.fees);
                    }}
                  >
                    <Text style={styles.feedbackText}>Pay</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          
        )}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              fontFamily: fontsLoaded ? "bold" : null,
            }}
          >
            One place for your all bills and subscriptions
          </Text>
        }
        ListHeaderComponentStyle={Styles.header}
        // ListFooterComponent={<Text>kkkkk</Text>}
      ></FlatList>

      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
          handleClear();
        }}
        size="lg"
      >
        <Modal.Content maxWidth="350">
          <Modal.CloseButton />
          <Modal.Header>Bills details</Modal.Header>
          <Modal.Body>
            <Text style={{ textAlign: "center", fontSize: 18 }}>
              Your {selectedName} is {selectedFees} EGP
            </Text>
          </Modal.Body>
        </Modal.Content>
      </Modal>

      <Modal
        isOpen={showModal2}
        onClose={() => {
          setShowModal2(false);
          handleClear();
        }}
        size="lg"
      >
        <Modal.Content maxWidth="350">
          <Modal.CloseButton />
          <Modal.Header>Bills details</Modal.Header>
          <Modal.Body>
            <Text style={{ textAlign: "center", fontSize: 18 }}>
              Your {selectedName} is {selectedFees} EGP
            </Text>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  );
}

const Styles = StyleSheet.create({
  header: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 20,
  },
  feedback: {
    backgroundColor: "white",
    width: "35%",
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 5,
    padding: 8,
  },
  feedbackText: {
    color: "#3F72AF",
    fontSize: 16,
    textAlign: "center",
  },
  dateTimeButton: {
    backgroundColor: "#3F72AF",
    padding: 10,
    borderRadius: 5,
  },
  dateTimeText: {
    color: "white",
    textAlign: "center",
    fontWeight: "600",
  },
});
