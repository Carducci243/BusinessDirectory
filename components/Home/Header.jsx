import React from "react";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import { useUser } from "@clerk/clerk-expo";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const Header = () => {
  const { container, text, profile, subContainer,searchBarContainer,textBox } = styles;
  // clerk useUser hook to get user info such as image
  const { user } = useUser();
  return (
    <View style={container}>
      <View style={subContainer}>
        <Image style={profile} source={{ uri: user?.imageUrl }} />
        <View>
          <Text style={text}> Welcome</Text><Text style={text}> {user.fullName}</Text>
        </View>
      </View>
      <View style={searchBarContainer}>
        {/* search bar */}
        <FontAwesome5 name="search" size={24} color="maroon" />
        <TextInput placeholder="Search..." style={textBox}/>

      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40,
    backgroundColor:'maroon',
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
  },
  text: {
    fontFamily: "outfit",
    fontSize: 19,
    // fontWeight: 500,
    color:'white'
  },
  profile: {
    width: 45,
    height: 45,
    borderRadius: 99,
  },
  subContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  searchBarContainer:{
    // display:'flex',
    flexDirection:'row',
    alignItems:'center',
    gap:10,
    backgroundColor:'white',
    padding:10,
    marginVertical:10,
    marginTop:15,
    borderRadius:99


  },
  textBox:{
    fontFamily:'outfit',
    fontSize:16,
    flex:1,
  }
});
