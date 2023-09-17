import { React, useState } from 'react';
import {
  TextInput, TouchableOpacity, View, Text,
} from 'react-native';

function SignUpForm() {
  const [phone, setPhone] = useState('');
  console.log(phone);
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <TextInput
        value={phone}
        onChangeText={(number) => {
          const formattedPhone = number.replace(/[^0-9]/g, '');
          setPhone(formattedPhone);
        }}
        style={{
          height: 40,
          width: '90%',
          borderWidth: 1,
          borderColor: 'black',
        }}
      />
      <TouchableOpacity
        style={{
          height: 25,
          width: '50%',
          backgroundColor: 'blue',
          marginTop: 10,
        }}
      >
        <Text style={{ textAlign: 'center', color: 'white' }}>SUBMIT</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SignUpForm;
