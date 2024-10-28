import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Header from "../../components/Home/Header";
import { useUser } from "@clerk/clerk-expo";
import Slider from "../../components/Home/Slider";
const Home = () => {
return(
  <View>
    <Header/>
    {/* slider */}
  <Slider/>
  </View>
  
  
)
};

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40,
  },
  text: {
    fontFamily: "outfit",
    fontSize: 19,
    // fontWeight:500,
  },
  profile: {
    width: 45,
    height: 45,
    borderRadius: 99,
  },
  subContainer:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    gap:10

  }
});
