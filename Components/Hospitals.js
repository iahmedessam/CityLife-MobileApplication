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
import Icon from "react-native-vector-icons/FontAwesome";
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
import Feedback_Complains from "./Feedback_Complains";

export default function Hospitals() {
  const { fontsLoaded, centers, loadingCenters, errorCenters } =
    useContext(DataContext);

  if (loadingCenters) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 18 }}>loading...</Text>
      </View>
    );
  }

  if (errorCenters) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>
          <Icon name="exclamation-triangle" size={40} color="red" />
        </Text>
      </View>
    );
  }

  function handlePhonePress(number) {
    const supported = Linking.canOpenURL(`tel:${number}`);
    if (supported) {
      Linking.openURL(`tel:${number}`);
    }
  }

  const [date, setDate] = useState(new Date(1687383374089));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState('')


  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    if (Platform.OS === "android") {
      setShow(true);
    }
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };
  // const [date, setDate] = useState(new Date(1687383374089));

  // const onChange = (event, selectedDate) => {
  //   const currentDate = selectedDate;
  //   setDate(currentDate);
  // };

  // const showMode = (currentMode) => {
  //   DateTimePickerAndroid.open({
  //     value: date,
  //     onChange,
  //     mode: currentMode,
  //     is24Hour: true,
  //   });
  // };

  // const showDatepicker = () => {
  //   showMode("date");
  // };

  // const showTimepicker = () => {
  //   showMode("time");
  // };

  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);



  const [appointDetails, setAppointDetails] = useState({
    name: "",
    specialty: "",
    centerName: "",
  });

  const handleCenterName = useCallback(
    (name) => {
      setAppointDetails({ ...appointDetails, centerName: name });
      setShowModal(true);
    },
    [appointDetails]
  );

  const handleClear = useCallback(() => {
    setAppointDetails({
      name: "",
      specialty: "",
      centerName: "",
    });
  }, []);

  return (
    <>
      <FlatList
        data={centers}
        renderItem={({ item }) => (
          <View style={styles.card} key={item.id}>
            {/* Image */}
            <Image style={styles.img} source={{ uri: item.img1 }}></Image>

            {/* Body */}
            <View
              // style={[styles.content,{alignItems:"center"}]}
              style={{
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
              }}
            >
              <Image
                //  style={stylesArr.logo}
                style={{ width: 40, height: 40, borderRadius: 20 }}
                source={{ uri: item.logo }}
              />
              <Text style={[styles.title]}>{item.name}</Text>
            </View>
            <View style={[styles.content, { alignItems: "center" }]}>
              {/* <Text style={[styles.title]}>{item.name}</Text> */}
              <Text
                style={[
                  styles.overview,
                  { fontFamily: fontsLoaded ? "boldItalic" : null },
                ]}
              >
                Clinics and Labs No.: {item.clinicAndLabsNum}
              </Text>
              <Text
                style={[
                  styles.overview,
                  {
                    fontFamily: fontsLoaded ? "boldItalic" : null,
                    textAlign: "center",
                  },
                ]}
              >
                Address: {item.address}
              </Text>
            </View>
            <View
              style={{
                marginBottom: 20,
              }}
            ></View>
            {/* Buttons Section */}
            <View style={styles.buttonsSection}>
              <View style={styles.buttons}>
                <TouchableOpacity onPress={() => handlePhonePress(item.number)}>
                  <Text style={styles.buttonsText}>
                    Phone <Icon name="phone" size={15} color="white" />
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => Linking.openURL(item.location)}
                >
                  <Text style={styles.buttonsText}>
                    Location
                    <Icon name="map-marker" size={15} color="white" />
                  </Text>
                </TouchableOpacity>
              </View>
              {/* Feedback Button */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <TouchableOpacity
                  style={Styles.feedback}
                  onPress={() => handleCenterName(item.name)}
                >
                  <Text style={styles.feedbackText}>Appointment</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.feedback} onPress={()=>{
                  setMessage(item.name)
                  setShowModal3(true)
                  }}>
                  <Text style={styles.feedbackText}>Feedback</Text>
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
            In our medical centers, you will find all specialties
          </Text>
        }
        ListHeaderComponentStyle={Styles.header}
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
          <Modal.Header>Clinic appointment</Modal.Header>
          <Modal.Body>
            <FormControl isRequired>
              <Stack mx="4">
                <FormControl.Label>Name:</FormControl.Label>
                <Input
                  type="text"
                  value={appointDetails.name}
                  onChangeText={(val) =>
                    setAppointDetails({ ...appointDetails, name: val })
                  }
                />
                {/* <FormControl.HelperText>
                  Must be atleast 6 characters
                </FormControl.HelperText>
                <FormControl.ErrorMessage
                  leftIcon={<WarningOutlineIcon size="xs" />}
                >
                  Atleast 6 characters are required.
                </FormControl.ErrorMessage> */}

                <View
                  style={{
                    marginBottom: 20,
                    marginTop: 10,
                  }}
                >
                  <Text>Choose Specialty:</Text>
                  <Select
                    selectedValue={appointDetails.specialty}
                    minWidth="200"
                    accessibilityLabel="Choose specialty"
                    placeholder="Choose"
                    _selectedItem={{
                      bg: "gray.300",
                      endIcon: <CheckIcon size="5" />,
                    }}
                    mt={1}
                    onValueChange={(itemValue) =>
                      setAppointDetails({
                        ...appointDetails,
                        specialty: itemValue,
                      })
                    }
                  >
                    <Select.Item
                      label="Internal Medicine"
                      value="Internal Medicine"
                    />
                    <Select.Item
                      label="Gastroenterology"
                      value="Gastroenterology"
                    />
                    <Select.Item label="Orthopedic" value="Orthopedic" />
                    <Select.Item
                      label="Ear, nose and throat (ENT)"
                      value="Ear, nose and throat (ENT)"
                    />
                    <Select.Item label="Cardiology" value="Cardiology" />
                    <Select.Item label="Ophthalmology" value="Ophthalmology" />
                    <Select.Item label="Pediatrics" value="Pediatrics" />
                    <Select.Item label="Dentistry" value="Dentistry" />
                  </Select>
                </View>

                {/* date picker */}
                <View style={{ marginVertical: 10 }}>
                  {/* <TouchableOpacity
                    style={Styles.dateTimeButton}
                    onPress={showDatepicker}
                  >
                    <Text style={Styles.dateTimeText}>Choose Day</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ marginVertical: 10 }}>
                  <TouchableOpacity
                    style={Styles.dateTimeButton}
                    onPress={showTimepicker}
                  >
                    <Text style={Styles.dateTimeText}>Choose Time</Text>
                  </TouchableOpacity> */}
                  {/* <Text>selected: {date.toLocaleString()}</Text> */}
                  {/* <Button onPress={showDatepicker} title="Show date picker!" />
      <Button onPress={showTimepicker} title="Show time picker!" /> */}

                  <TouchableOpacity
                    style={Styles.dateTimeButton}
                    onPress={showDatepicker}
                  >
                    <Text style={Styles.dateTimeText}>Choose Day</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ marginVertical: 10 }}>
                  <TouchableOpacity
                    style={Styles.dateTimeButton}
                    onPress={showTimepicker}
                  >
                    <Text style={Styles.dateTimeText}>Choose Time</Text>
                  </TouchableOpacity>
                  {show && (
                    <DateTimePicker
                      testID="dateTimePicker"
                      value={date}
                      mode={mode}
                      is24Hour={false}
                      onChange={onChange}
                    />
                  )}
                </View>
              </Stack>
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button
              disabled={appointDetails.name ? false : true}
              flex="1"
              onPress={() => {
                setShowModal2(true);
                setShowModal(false);
              }}
              title="Confirm"
            ></Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>

      <Modal
        isOpen={showModal2}
        onClose={() => {
          setShowModal2(false);
          handleClear();
          setDate(new Date(1687383374089));
        }}
        size="lg"
      >
        <Modal.Content maxWidth="350">
          <Modal.CloseButton />
          <Modal.Header>Appointment details</Modal.Header>
          <Modal.Body>
            <Text style={{ textAlign: "center", fontSize: 18 }}>
              Name: {appointDetails.name}
            </Text>
            <Text style={{ textAlign: "center", fontSize: 18 }}>
              Date: {date.toLocaleString()}
            </Text>
            <Text style={{ textAlign: "center", fontSize: 18 }}>
              specialty: {appointDetails.specialty}
            </Text>
            <Text style={{ textAlign: "center", fontSize: 18 }}>
              {appointDetails.centerName}
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
