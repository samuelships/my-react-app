import React from "react";
import {Text, StyleSheet, View, TextInput, TouchableOpacity, ImageBackground } from "react-native";
const myImage = { uri: "https://reactjs.org/logo-og.png" };
const Login= ({navigation})=>{

    function navigate(){
        navigation.navigate("SignUp");
  
        
    }
    

    
    return(
      <View style={{flex : 1}}>
        <ImageBackground source={require("../assets/tshirts/shirt1.jpg")} style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center"
  }}>
           <View style={styles.BottomView}>
               <Text style={styles.Heading}>
                   Welcome To{"\n"}
                   The Apparel Store
               </Text>
               <View style={styles.FormView}>   
                  <TextInput placeholder={"Email Address"} placeholderTextColor={"black"} style={styles.TextInput}/>
                  <TextInput placeholder={" Password"} secureTextEntry={true} placeholderTextColor={"black"} style={styles.TextInput}/>
                  <TouchableOpacity style={styles.Button} onPress= {() => {navigation.navigate("Home");}}> 
                      <Text style={styles.ButtonText}>Login</Text>
                  </TouchableOpacity> 

               </View>
               <Text></Text>
               <Text style={styles.QuestionText}>
                   Dont have an account? </Text>
               <TouchableOpacity style={styles.TextButton} onPress={navigate}>
               <Text style={styles.SignUpText}>
                   Sign Up Here!
               </Text>
               </TouchableOpacity>
           </View>
        </ImageBackground>
        </View>



    ) 
}

const styles = StyleSheet.create({
    BottomView:{
        width:"100%",
        height:"100%",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },

    Heading:{
      color:"black",  
      fontSize: 40,
      fontWeight: "bold",
      marginLeft: 30,
      marginTop: 60,
    },
    FormView:{
        width:"100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40,
    },

    TextInput:{
        width: "90%",
        borderWidth: 1,
        borderColor: "black",
        height: 52,
        borderRadius: 10,
        paddingLeft: 5,
        marginTop: 20,
    },
    Button:{
        width:"90%",
        color: "black",
        height: 52,
        backgroundColor: "black",
        borderRadius: 10,
        marginTop: 20,
        display: "flex",
        justifyContent:"center",
        alignItems: "center",
    },
    ButtonText:{
        fontWeight: "bold",
        fontSize: 18,
        color: "white",
    },

    QuestionText:{
            color: "white",
            textAlign: "center", 
            fontWeight: "bold",
            fontSize: 18,
            
    },

    SignUpText:{
        color: "white",
        fontWeight: "bold"
    },
    TextButton:{
        width: "100%",
        display: "flex",
        alignItems: "center",
        marginTop: 20
    },
    icons:{
        width: "60%",
        height: 35,
        borderWidth: 1,
        borderRadius:20,
        marginTop: 30,
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center",
        paddingHorizontal: "9%",
    }

})

export default Login