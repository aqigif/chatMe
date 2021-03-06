import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    wrapper:{
      padding:10,
      paddingLeft:50,
      marginTop:70
    },
    logob:{
      color:'#211818',
      fontSize:30,
      fontWeight:'bold',
    },
    logobb:{
      color:'#0449A7',
      fontSize:30,
      borderRadius:10
    },
    welcome:{
    },
    siginForm:{
    },
    signinInput:{
      width:'80%',
      height:70,
      fontSize:18,
      color:'#211818',
    },
    buttonSigninWrapper: {
      marginTop: 50,
      marginBottom: 30,
      justifyContent: "center"
    },
    buttonSignin: {
      backgroundColor: "#f0f6ff",
      width: 150,
      height: 60,
      justifyContent: "center",
      borderRadius: 10
    },
    buttonSigninText: {
      textAlign: "center",
      fontSize: 20,
      fontWeight: "bold"
    },
    link:{
      marginTop:10,
      color:'#211818',
      fontWeight:'bold',
    },
    linkForgot:{
      marginTop:10,
      color:'#0449A7',
      fontWeight:'bold',
      textDecorationLine:'underline'
    },
    linkSignUp:{
      marginTop:10,
      color:'#0449A7',
      fontWeight:'bold',
      textDecorationLine:'underline'
    }
});
export default styles;