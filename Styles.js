import { StyleSheet } from "react-native";

export default StyleSheet.create({

  navyBlue:{
    color:"#112D4E"
  },
  lightBlue:{
    color:"#3F72AF"
  },
  lightGrey:{
    color:"#DBE2EF"
  },
  navyBlueBG:{
    backgroundColor:"#112D4E"
  },
  lightBlueBG:{
    backgroundColor:"#3F72AF"
  },
  lightGreyBG:{
    backgroundColor:"#DBE2EF"
  },
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
    flex:1

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
    padding: 3,
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
    paddingVertical: 5
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


// - Colors -
// light grey -> #DBE2EF   -> Font weight light
// light blue -> #3F72AF   -> Font weight Bold
// Navy Blue  -> #112D4E
// -----------------------------------------------------

// - Font -
// Font Family -> https://fonts.google.com/specimen/Aleo

// -----------------------------------------------------

// - Border -
// Border Raduis -> 15px