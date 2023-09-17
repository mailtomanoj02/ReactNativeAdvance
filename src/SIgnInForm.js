import { React, useState } from 'react';
import {
  TextInput, TouchableOpacity, View, Text, StyleSheet,
} from 'react-native';
import axios from 'axios';
import {auth} from 'firebase/app'
function SignInForm() {
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const handleSubmit = async () => {
    try {
    let response = await axios.post('https://verifyotp-be7txxgqsq-uc.a.run.app',{
        phone,
        code
    })
    let token = response?.data?.token
    auth().signInWithCustomToken(token).then((userCredential) => {
        const user = userCredential.user;
        console.log('User signed in:', user);
      })
      .catch((error) => {
        console.error('Custom token sign-in error:', error);
      });
      
    console.log(data?.token)
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  return (
    <View style={styles.signUpContainerStyle}>
      <TextInput
        value={phone}
        placeholder="Please Enter Phone Number"
        onChangeText={(number) => {
          const formattedPhone = number.replace(/[^0-9]/g, '');
          setPhone(formattedPhone);
        }}
        style={styles.signUpInputStyle}
      />
      <TextInput
        value={code}
        placeholder="Please Enter Otp"
        onChangeText={(number) => {
          const formattedPhone = number.replace(/[^0-9]/g, '').substring(0,4);
          setCode(formattedPhone);
        }}
        style={styles.signUpInputStyle}
      />
      <TouchableOpacity
        style={styles.signUpButtonStyle}
        onPress={handleSubmit}
      >
        <Text style={{ textAlign: 'center', color: 'white' }}>Sign In</Text>
      </TouchableOpacity>
      <View style={styles.dividerStyle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  signUpContainerStyle: { alignItems: 'center', justifyContent: 'center' },
  signUpInputStyle: {
    height: 40,
    width: '90%',
    borderWidth: 1,
    borderColor: 'black',
    marginTop:10
  },
  signUpButtonStyle: {
    height: 25,
    width: '50%',
    backgroundColor: 'blue',
    marginTop: 10,
  },
  dividerStyle:{
    borderWidth: 0.5, borderColor: 'black', width: '100%', marginTop: 10,
  }
});

export default SignInForm;
