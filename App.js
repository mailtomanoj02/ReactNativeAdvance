/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { StyleSheet, View } from "react-native";
import SignUpForm from "./src/SignUpForm";
import SignInForm from "./src/SIgnInForm";
const App = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
      }}
    >
      <SignUpForm />
      <SignInForm/>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: { flex: 1 },
  buttonStyle: {
    width: 200,
    alignSelf: "center",
    marginTop: 5,
  },
});

export default App;
