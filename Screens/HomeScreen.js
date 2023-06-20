import React from 'react';
import { SafeAreaView, View, Text, ScrollView, TouchableOpacity, Image, StyleSheet, Platform, TouchableWithoutFeedback } from 'react-native';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { SliderBox } from 'react-native-image-slider-box';


export default function HomeScreen({navigation}) {
    const handleCategoryPress = () => {
        // Function logic goes here
    };

    const images = [
        require("../assets/homeImages/slider/slider12.jpg"),
        require("../assets/homeImages/slider/slider1.jpg"),
        require("../assets/homeImages/slider/slider2.jpg"),
        require("../assets/homeImages/slider/slider3.jpg"),
        require("../assets/homeImages/slider/slider4.jpg"),
        require("../assets/homeImages/slider/slider5.jpg"),
        require("../assets/homeImages/slider/slider6.jpg"),
        require("../assets/homeImages/slider/slider1.jpg"),

    ]
    return (
        <SafeAreaView style={{ marginTop: Platform.OS === "android" ? 0 : 0, padding: 15 }}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <SliderBox
                        ImageComponent={Image}
                        images={images}
                        sliderBoxHeight={200}
                        onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                        dotColor="#FFEE58"
                        inactiveDotColor="#90A4AE"
                        paginationBoxVerticalPadding={20}
                        autoplay
                        circleLoop
                        resizeMethod={'resize'}
                        resizeMode={'cover'}
                        paginationBoxStyle={{
                            position: "absolute",
                            bottom: 0,
                            padding: 0,
                            alignItems: "center",
                            alignSelf: "center",
                            justifyContent: "center",
                            paddingVertical: 10
                        }}
                        dotStyle={{
                            width: 10,
                            height: 10,
                            borderRadius: 5,
                            marginHorizontal: 0,
                            padding: 0,
                            margin: 0,
                            backgroundColor: "rgba(128, 128, 128, 0.92)"
                        }}
                        ImageComponentStyle={{ borderRadius: 15, width: '97%', marginTop: 5 }}
                        imageLoadingColor="#2196F3"
                    />

                    {/* Text overlays */}
                    <View style={styles.overlayContainer1}>
                        <Text style={styles.overlayText}>Leave Your Fingerprint</Text>
                        {/* <Text style={styles.overlayContainer4}></Text> */}
                    </View>
                    <View style={styles.overlayContainer2}>
                        <Text style={styles.overlayText}>Explore New Places and Discover</Text>
                        {/* <Text style={styles.overlayContainer4}></Text> */}

                    </View>
                    <View style={styles.overlayContainer3}>
                        <Text style={styles.overlayText}>Feedback in Al Rehab, Cairo, Egypt</Text>
                        {/* <Text style={styles.overlayContainer4}></Text> */}
                    </View>

                    {/* Rest of the code */}
                </View>



                {/* services */}
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text
                        style={{
                            textAlign: 'center',
                            paddingBottom: 5,
                            fontWeight: 'bold',
                            fontSize: 24,
                            marginTop: 16,
                            opacity:0.4
                        }}
                    >
                        Services
                    </Text>
                    <View style={styles.imageContainer}>

                        <TouchableOpacity
                        style={styles.container}
                        onPress={()=> navigation.navigate('banks')}
                        >
                            <View>
                            <Image source={require("../assets/homeImages/bank2.jpg")} style={styles.image} />
                            <Text style={styles.text}>Banks</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                        style={styles.container}
                        onPress={()=> navigation.navigate('markets')}
                        >
                        <View>
                            <Image source={require("../assets/homeImages/images.jpeg")} style={styles.image} />
                            <Text style={styles.text}>Markets</Text>
                        </View>
                        </TouchableOpacity>


                        <TouchableOpacity
                        style={styles.container}
                        onPress={()=> navigation.navigate('hospitals')}
                        >
                        <View>
                            <Image source={require("../assets/homeImages/hos.jpg")} style={styles.image} />
                            <Text style={styles.text}>Hospital</Text>
                        </View>
                        </TouchableOpacity>




                    </View>

                    <View style={styles.imageContainer}>

                    <TouchableOpacity
                        style={styles.container}
                        onPress={()=> navigation.navigate('education')}
                        >
                        <View>
                            <Image source={require("../assets/homeImages/school5.jpg")} style={styles.image} />
                            <Text style={styles.text}>Education</Text>
                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                        style={styles.container}
                        onPress={()=> navigation.navigate('cinema')}
                        >
                        <View>
                            <Image source={require("../assets/homeImages/Cinema.png")} style={styles.image} />
                            <Text style={styles.text}>Cinema</Text>
                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                        style={styles.container}
                        onPress={()=> navigation.navigate('maintenancePayment')}
                        >
                        <View>
                            <Image source={require("../assets/homeImages/2.jpg")} style={styles.image} />
                            <Text style={styles.text}>Payment</Text>
                        </View>
                        </TouchableOpacity>


                    </View>

                </View>
                {/* categories */}
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text
                        style={{
                            textAlign: 'center',
                            paddingBottom: 15,
                            fontWeight: 'bold',
                            fontSize: 24,
                            marginTop: 16,
                            opacity: 0.4
                        }}
                    >
                        Categories
                    </Text >
                    <View style={styles.categoryContainer}>
                        <TouchableOpacity onPress={()=> navigation.navigate('restaurants')} style={styles.categoryItem}>
                            <View style={styles.categoryItemContent}>
                                <FontAwesome5 name="utensils" size={24} />
                                <Text >Restaurants</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=> navigation.navigate('shopping')} style={styles.categoryItem}>
                            <View style={styles.categoryItemContent}>
                                <MaterialCommunityIcons name="cart" size={24} />
                                <Text>Shopping</Text>
                            </View>
                        </TouchableOpacity>

                        {/* Add other categories following a similar structure */}

                        <TouchableOpacity onPress={()=> navigation.navigate('fashion')} style={styles.categoryItem}>
                            <View style={styles.categoryItemContent}>
                                <MaterialCommunityIcons name="tshirt-crew" size={24} />
                                <Text>Fashion</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=> navigation.navigate('health')} style={styles.categoryItem}>
                            <View style={styles.categoryItemContent}>
                                <FontAwesome5 name="heartbeat" size={24} />
                                <Text>Health</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=> navigation.navigate('sports')} style={styles.categoryItem}>
                            <View style={styles.categoryItemContent}>
                                <FontAwesome5 name="table-tennis" size={24} />
                                <Text>Sports</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=> navigation.navigate('maintenance')} style={styles.categoryItem}>
                            <View style={styles.categoryItemContent}>
                                <FontAwesome5 name="wrench" size={24} />
                                <Text style={styles.textIcon}>Maintenance</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=> navigation.navigate('homeServices')} style={styles.categoryItem}>
                            <View style={styles.categoryItemContent}>
                                <MaterialCommunityIcons name="home-variant" size={24} />
                                <Text>Home Services</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=> navigation.navigate('transportation')} style={styles.categoryItem}>
                            <View style={styles.categoryItemContent}>
                                <MaterialCommunityIcons name="truck-delivery" size={24} />
                                <Text>Transportation</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    categoryContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    categoryItem: {
        alignItems: 'center',
        width: '50%',
        textAlign: 'center',
    },
    categoryItemContent: {
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 5,
        backgroundColor: '#FFF',
        borderRadius: 10,
        margin: 8,
        width: '75%',
        textAlign: 'center',
    },
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
        marginRight:18
    },
    image: {
        width: '113%',
        aspectRatio: 1,
        marginHorizontal: 4,
        height: '100%',
        padding: 10,
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        borderRadius: 10,
    },
    container: {
        flex: 1,
        position: 'relative',
        margin: 10,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        position: 'absolute',
        top: 80,
        width: '100%',
        zIndex: 1,
    },

    overlayContainer1: {
        position: 'absolute',
        bottom: 70,
        left: 20,
        fontWeight: 'bold',
        fontSize: 1000,
        alignSelf: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    overlayContainer2: {
        position: 'absolute',
        bottom: 45,
        left: 10,
        alignSelf: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    overlayContainer3: {
        position: 'absolute',
        bottom: 20,
        left: 10,
        alignSelf: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    overlayContainer4: {
        position: 'absolute',
        bottom: 0,
        right: 170,
        fontWeight: 'bold',
        alignSelf: 'center',
        backgroundColor: 'white',
        paddingHorizontal: 10,
        borderRadius: 55,
        width: 1,
        height: 30,
    },
    overlayText: {
        color: 'white',
        fontSize: 16,
    },
    
    border: {
        color: 'red',
        fontSize: 16,
    }
});