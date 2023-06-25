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
import { useState, useRef, useCallback, useContext } from "react";
import uuid from "react-native-uuid";
// import DateTimePicker, {
//   DateTimePickerAndroid,
// } from "@react-native-community/datetimepicker";
// import { Pressable } from "react-native";
// import { Platform } from "react-native";
import { TextInput } from "react-native";
import { Camera, CameraType } from "expo-camera";
import { Dimensions } from "react-native";
import { createRef } from "react";

export default function MaintenancePayment() {
  const { PayArr, fontsLoaded, addComplain} = useContext(DataContext);
  const [hasPermission, setHasPermission] = Camera.useCameraPermissions();
  const [type, setType] = useState(CameraType.back);
  const [openCamera, setOpenCamera] = useState(false);
  // const ref = useRef(null);
  const ref = createRef()
  const [photo,setPhoto] = useState("")
  const [selectedName, setSelectedName] = useState("");
  const [selectedFees, setSelectedFees] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [newFeedBack, setNewFeedback] = useState({
    // id: "",
    Name: "",
    email:"",
    phone: "",
    place: "",
    message: "",
    photo: "",
  });

  // if (!hasPermission) {
  //   return <View />;
  // }
  // if (!hasPermission.granted) {
  //   return <Text>No access to camera</Text>;
  // }

  const toggleCameraType = () => {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  };
  const takePhoto = async () => {
    if (ref.current) {
      const options = { quality: 0.5, base64: true };
      const img = await ref.current.takePictureAsync(options);
      // setPhoto(img)
      setNewFeedback({...newFeedBack, photo:img["uri"]})
    }
  };
  // console.warn (newFeedBack)
 
  const handleSubmit = async ()=>{
   await addComplain(newFeedBack)
    setShowModal3(false)
    handleClear2();
    setShowModal4(true)
  }

  const openModelBills = useCallback((name, fees) => {
    setSelectedName(name);
    setSelectedFees(fees);
    setShowModal(true);
  }, []);

  const openModelPay = useCallback((name, fees) => {
    setSelectedName(name);
    setSelectedFees(fees);
    setShowModal2(true);
  }, []);

  const handleClear = useCallback(() => {
    setSelectedName("");
    setSelectedFees("");
  }, []);

  //Feedback Function
  // const handleChange = useCallback((val, key) => {
  //   const myState = newFeedBack;
  //   myState[key] = val;
  //   setNewFeedback(myState);
  //   // setNewFeedback({ ...newFeedBack, ["name"]: val });
  //   console.warn(newFeedBack);
  // }, []);
  const handleClear2 = useCallback(() => {
    setNewFeedback({
      Name: "",
      email:"",
      phone: "",
      place: "",
      message: "",
      photo: "",
    });
  }, []);
  return (
    <>
      <FlatList
        data={PayArr}
        renderItem={({ item }) => (
          <View style={styles.card}>
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
                      return <Icon name="screwdriver" size={50} color="#900" />;
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
                  onPress={() => {
                    openModelPay(item.name, item.fees);
                  }}
                >
                  <Text style={styles.feedbackText}>Pay</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
        keyExtractor={() => uuid.v4()}
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
        ListFooterComponent={
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Text
              style={[
                styles.feedbackText,
                {
                  textAlign: "center",
                  fontFamily: fontsLoaded ? "bold" : null,
                  marginHorizontal: 20,
                },
              ]}
            >
              If you have any inquiry, feedback or complain, we are glad to hear
              it
            </Text>
            <TouchableOpacity
              style={[Styles.feedback, styles.navyBlueBG]}
              onPress={() => setShowModal3(true)}
            >
              <Text style={[styles.feedbackText, { color: "white" }]}>
                Complain
              </Text>
            </TouchableOpacity>
            {/* <Image source={{uri: `${photo.uri}`}} style={{width:200,height:200}}></Image> */}
          </View>
        }
      ></FlatList>
      {/* Check Bills modal */}
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

      {/* Pay modal */}
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
      {/* Check Bills modal */}
      <Modal
        isOpen={showModal3}
        onClose={() => {
          setShowModal3(false);
          // handleClear2();
        }}
        size="lg"
      >
        <Modal.Content maxWidth="350">
          <Modal.CloseButton />
          <Modal.Header>Your Complain</Modal.Header>
          <Modal.Body>
            
            <TextInput
              style={Styles.input}
              placeholder="Your name"
              name="Name"
              id="Name"
              value={newFeedBack.Name}
              onChangeText={(val) =>{
                setNewFeedback({ ...newFeedBack, Name: val })
                // console.warn(newFeedBack.Name)
              }}
            />
             <TextInput
              style={Styles.input}
              placeholder="Your Email"
              name="email"
              id="email"
              value={newFeedBack.email}
              onChangeText={(val) =>
                setNewFeedback({ ...newFeedBack, email: val })
              }
            />
            <TextInput
              style={Styles.input}
              placeholder="Your phone"
              name="phone"
              id="phone"
              keyboardType="phone-pad"
              value={newFeedBack.phone}
              onChangeText={(val) =>
                setNewFeedback({ ...newFeedBack, phone: val })
              }
            />
            <TextInput
              style={Styles.input}
              placeholder="Place of incident"
              name="place"
              id="place"
              value={newFeedBack.place}
              onChangeText={(val) =>
                setNewFeedback({ ...newFeedBack, place: val })
              }
            />
            <TextInput
              multiline={true}
              numberOfLines={4}
              style={Styles.input}
              placeholder="Your message"
              name="message"
              id="message"
              value={newFeedBack.message}
              onChangeText={(val) =>
                setNewFeedback({ ...newFeedBack, message: val })
              }
            />
            {/* <Button
              title="open camera"
              onPress={() =>
                setOpenCamera((current) => (current === false ? true : false))
              }
            ></Button> */}
                 <TouchableOpacity
                    style={Styles.photoButton}
                    onPress={() =>
                      setOpenCamera((current) => (current === false ? true : false))
                    } >
                    <Text style={Styles.photoText}>Take Photo</Text>
                  </TouchableOpacity>
                  <Text style={{textAlign:"center"}} >Or</Text>
                  <TouchableOpacity
                    style={Styles.photoButton}
                    onPress={() =>
                      setOpenCamera((current) => (current === false ? true : false))
                    } >
                    <Text style={Styles.photoText}>Upload photo</Text>
                  </TouchableOpacity>
          </Modal.Body>
          <Modal.Footer>
            <TouchableOpacity
              style={[Styles.feedback, styles.navyBlueBG]}
              onPress={handleSubmit}
            >
              <Text style={[styles.feedbackText, { color: "white" }]}>
                Submit
              </Text>
            </TouchableOpacity>
          </Modal.Footer>
        </Modal.Content>
      </Modal>



    {/* success FeedBack Modal */}
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
           <Text>We Received your complain, within 48 hours will be resolved</Text>
          </Modal.Body>
        </Modal.Content>
      </Modal>


      <Modal
        isOpen={openCamera}
        onClose={() => {
          setOpenCamera(false);
        }}
        size="lg"
      >
        <Modal.Content
          width="400"
          height="800"
          style={{
            backgroundColor: "transparent",
            shadowColor: "transparent",
          }}
        >
          <Modal.CloseButton />
          <Modal.Body>
            <View style={{ height: 600 }}>
              <Camera style={[Styles.camera]} type={type} ref={ref} >
                <View
                  style={{
                    flex: 1,
                    backgroundColor: "transparent",
                    flexDirection: "row",
                  }}
                >
                  {/* <TouchableOpacity style={Styles.button} onPress={toggleCameraType}>
            <Text style={Styles.text}>Flip Camera</Text>
          </TouchableOpacity> */}
                  <TouchableOpacity
                    style={{
                      flex: 1,
                      alignSelf: "flex-end",
                      alignItems: "center",
                    }}
                    onPress={() => {
                      setType((current) =>
                        current === CameraType.back
                          ? CameraType.front
                          : CameraType.back
                      );
                    }}
                  >
                    <Text
                      style={{ fontSize: 18, marginBottom: 30, color: "white" }}
                    >
                      Flip
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={takePhoto}
                    style={{
                      flex: 1,
                      alignSelf: "flex-end",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{ fontSize: 18, marginBottom: 30, color: "white" }}
                    >
                      take Photo
                    </Text>
                  </TouchableOpacity>
                </View>
              </Camera>
            </View>
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

  input: {
    borderWidth: 1,
    borderColor: "#112D4E",
    borderRadius: 5,
    width: "90%",
    marginLeft: "5%",
    padding: 10,
    marginTop: 10,
  },
  inputError: {
    borderWidth: 1,
    borderColor: "#112D4E",
    borderRadius: 5,
    width: "90%",
    marginLeft: "5%",
    padding: 10,
    marginTop: 10,
    borderColor: "red",
  },
  submitButton: {
    backgroundColor: "#112D4E",
  },
  submitText: {
    textAlign: "center",
    color: "white",
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },

  photoButton: {
    backgroundColor: "#3F72AF",
    padding: 10,
    borderRadius: 5,
    marginHorizontal:15,
    marginVertical:10
  },
  photoText: {
    color: "white",
    textAlign: "center",
    fontWeight: "600",
  },
});
