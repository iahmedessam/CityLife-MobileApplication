import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Linking, Image } from 'react-native';
import React from 'react'
import useAxios from 'axios-hooks'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Banks() {

  const [{ data, loading, error }] = useAxios({
    url: "https://cowardly-husky-59.loca.lt/banks"
  });

  if (loading) {
    return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}><Text style={{ fontSize: 16 }}>loading...</Text></View>;
  }

  if (error) {
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
      {data.map((ele) =>
        <View style={styles.card} key={ele.id}>

          {/* Image */}
          <Image style={styles.img} source={{ uri: `${ele.img1}` }}></Image>

          {/* Body */}
          <View style={styles.content}>
            <Text style={styles.title}>{ele.name}</Text>
            <Text style={styles.overview}>{ele.overview}</Text>
          </View>

          {/* Buttons Section */}
          <View style={styles.buttonsSection}>
            <View style={styles.buttons}>
              <Text style={styles.buttonsText}>{ele.Rating} <Icon name="star" size={15} color="#C3801B" /></Text>
              <TouchableOpacity onPress={() => handlePhonePress(ele.number)}>
                <Text style={styles.buttonsText}>Phone</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL(ele.website)}>
                <Text style={styles.buttonsText}>Website</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL(ele.location)}>
                <Text style={styles.buttonsText}>Location <Icon name="map-marker" size={15} color="white" /></Text>
              </TouchableOpacity>
            </View>
            {/* Feedback Button */}
            {/* <TouchableOpacity style={styles.feedback} onPress={handlePress}>
              <Text style={styles.feedbackText}>Feedback</Text>
            </TouchableOpacity> */}

          </View>
        </View>)}
    </ScrollView>
  </>
};

const styles = StyleSheet.create({
  card: {
    width: '90%',
    marginLeft: '5%',
    marginVertical: 15,
    borderWidth: 0,
    borderRadius: 5,
    borderStyle: 'solid',
    borderColor: '#112D4E',
    borderRightWidth: 0.2,
    borderLeftWidth: 0.2,

  },
  img: {
    width: '100%',
    height: 150,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5
  },
  content: {
    padding: 10
  },
  overview: {
    lineHeight: 22,
    opacity: 0.6,
    padding: 3
  },
  title: {
    color: '#3F72AF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 5
  },
  buttonsSection: {
    backgroundColor: '#112D4E',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    paddingTop: 10
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15
  },
  buttonsText: {
    color: 'white'
  },
  feedback: {
    backgroundColor: 'white',
    width: '50%',
    borderRadius: 5,
    marginLeft: '25%',
    marginBottom: 10,
    marginTop: 5,
    padding: 8,
  },
  feedbackText: {
    color: '#3F72AF',
    fontSize: 16,
    textAlign: 'center',
  },
})