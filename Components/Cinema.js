import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Linking,
  Image,
} from "react-native";
import React, { useState } from "react";
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
import uuid from 'react-native-uuid';


export default function Cinema() {
  const { fontsLoaded, cinema, loadingCinema, errorCinema } = useContext(DataContext);
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [day, setDay] = useState("");
  const [date, setDate] = useState("");

  if (loadingCinema) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 18 }}>loading...</Text>
      </View>
    );
  }

  if (errorCinema) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>
          {" "}
          <Icon name="exclamation-triangle" size={40} color="red" />
        </Text>
      </View>
    );
  }

  //Feedback Function
  return (
    <>
      <FlatList
        data={cinema}
        renderItem={({ item }) => (
          <View style={Styles.card} key={item.id}>
            {/* Image */}
            <Image style={Styles.img} source={{ uri: item.img }}></Image>

            {/* Body */}
            <View style={[Styles.content, { alignItems: "center" }]}>
              <Text style={[Styles.title]}>{item.name}</Text>
              <Text
                style={[
                  Styles.overview,
                  { fontFamily: fontsLoaded ? "boldItalic" : null },
                ]}
              >
                Type: {item.type}
              </Text>
              <Text
                style={[
                  Styles.overview,
                  { fontFamily: fontsLoaded ? "boldItalic" : null },
                ]}
              >
                Language: {item.language}
              </Text>
              <Text
                style={[
                  Styles.overview,
                  { fontFamily: fontsLoaded ? "boldItalic" : null },
                ]}
              >
                Country: {item.country}
              </Text>
              <Text
                style={[
                  Styles.overview,
                  { fontFamily: fontsLoaded ? "boldItalic" : null },
                ]}
              >
                Cast: {item.actors}
              </Text>
            </View>

            {/* Buttons Section */}
            <View style={Styles.buttonsSection}>
              <View style={Styles.buttons}>
                <Text style={Styles.buttonsText}>
                  {item.Rating} <Icon name="star" size={15} color="#C3801B" />
                </Text>
              </View>
              {/* Feedback Button */}
              <TouchableOpacity
                style={Styles.feedback}
                onPress={() => setShowModal(true)}
              >
                <Text style={Styles.feedbackText}>Ticket</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
        // numColumns={2}
        ListHeaderComponent={
          <>
            <Text
              style={{ fontSize: 30, fontFamily: fontsLoaded ? "bold" : null }}
            >
              Mall 1 Cinema
            </Text>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  "https://www.google.com/maps/place/Al+Rehab+Cinema/@30.059036,31.4958799,15z/data=!4m6!3m5!1s0x14581888bcacb1bb:0x417640e69aeaea98!8m2!3d30.059036!4d31.4958799!16s%2Fg%2F1tdhvt25?entry=ttu"
                )
              }
            >
              <Text style={{ fontSize: 20 }}>
                Location <Icon name="map-marker" size={15} />
              </Text>
            </TouchableOpacity>
          </>
        }
        ListHeaderComponentStyle={Styles.header}

        // ListFooterComponent={<Text>kkkkk</Text>}
      ></FlatList>

      <Modal isOpen={showModal} onClose={() =>{ 
        setDay("");
        setDate("");
        setShowModal(false)}} size="lg">
        <Modal.Content maxWidth="350">
          <Modal.CloseButton
            onPress={() => {
              setDay("");
              setDate("");
              setShowModal(false);
            }}
          />
          <Modal.Header>Ticket Reservation</Modal.Header>
          <Modal.Body>
            <View
              style={{
                marginBottom: 20,
              }}
            >
              <Text>Choose Day:</Text>
              <Select
                selectedValue={day}
                minWidth="200"
                accessibilityLabel="Choose Service"
                placeholder="Choose Service"
                _selectedItem={{
                  bg: "gray.300",
                  endIcon: <CheckIcon size="5" />,
                }}
                mt={1}
                onValueChange={(itemValue) => setDay(itemValue)}
              >
                <Select.Item label="Sunday" value="Sunday" />
                <Select.Item label="Monday" value="Monday" />
                <Select.Item label="Tuesday" value="Tuesday" />
                <Select.Item label="Wednesday" value="Wednesday" />
                <Select.Item label="Thursday" value="Thursday" />
                <Select.Item label="Friday" value="Friday" />
                <Select.Item label="Saturday" value="Saturday" />
              </Select>
            </View>
            <View>
              <Text>Choose Date:</Text>
              <Select
                selectedValue={date}
                minWidth="200"
                accessibilityLabel="Choose Service"
                placeholder="Choose Service"
                _selectedItem={{
                  bg: "gray.300",
                  endIcon: <CheckIcon size="5" />,
                }}
                mt={1}
                onValueChange={(itemValue) => setDate(itemValue)}
              >
                <Select.Item label="10:30 am" value="10:30 am" />
                <Select.Item label="1:15 pm" value="1:15 pm" />
                <Select.Item label="4:00 pm" value="4:00 pm" />
                <Select.Item label="6:30 pm" value="6:30 pm" />
                <Select.Item label="9:00 pm" value="9:00 pm" />
                <Select.Item label="12:15 pm" value="12:15 pm" />
              </Select>
            </View>
          </Modal.Body>
          <Modal.Footer>
            <Button
              flex="1"
              onPress={() => {
                setShowModal2(true);
                setShowModal(false);
              }}
              disabled={!day && !date}
            >
              Confirm
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>

      <Modal isOpen={showModal2} onClose={() => {
        setShowModal2(false)
        setDay("");
        setDate("");
        }} size="lg">
        <Modal.Content maxWidth="350">
          <Modal.CloseButton />
          <Modal.Header>Your Reservation</Modal.Header>
          <Modal.Body>
          <CheckCircleIcon size="20" my="2" mx="auto" color="emerald.500" />

            <Text
            style={{textAlign:"center",fontSize:18}}
            >
              your reservation day is {day} at {date}, and your code is <Text style={{fontWeight:"bold"}}>{uuid.v4().slice(0,8)}</Text></Text>
          </Modal.Body>
          {/* <Modal.Footer>
            <Button flex="1" onPress={() => {
            setShowModal3(true);
          }}>
              Continue
            </Button>
          </Modal.Footer> */}
        </Modal.Content>
      </Modal>
    </>
  );
}

const Styles = StyleSheet.create({
  card: {
    width: "90%",
    marginLeft: "5%",
    marginVertical: 15,
    borderWidth: 0,
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: "#112D4E",
    borderRightWidth: 0.2,
    borderLeftWidth: 0.2,
    flex: 1,
  },
  img: {
    flex: 1,
    width: "100%",
    height: 300,
    resizeMode: "stretch",
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  content: {
    padding: 10,
  },
  overview: {
    lineHeight: 22,
    opacity: 0.6,
    padding: 3,
  },
  title: {
    color: "#3F72AF",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    margin: 5,
  },
  buttonsSection: {
    backgroundColor: "#112D4E",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    paddingTop: 10,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 5,
  },
  buttonsText: {
    color: "white",
  },
  feedback: {
    backgroundColor: "white",
    width: "50%",
    borderRadius: 5,
    marginLeft: "25%",
    marginBottom: 10,
    marginTop: 5,
    padding: 8,
  },
  feedbackText: {
    color: "#3F72AF",
    fontSize: 16,
    textAlign: "center",
  },
  header: {
    flex: 1,
    marginLeft: 20,
  },
});
