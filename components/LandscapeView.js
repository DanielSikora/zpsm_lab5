/* eslint-disable */
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import MyButton from "./MyButton";

const LandscapeView = ({ count, buttons }) => {

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.displayText}>{count}</Text>
      </View>

      {buttons.map((button, index) => {
        return (
          <MyButton key={index} button={button}></MyButton>
        );
      })}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  display: {
    backgroundColor: "#575759",
    height: 125,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    minWidth: "100%",
  },
  displayText: {
    color: "#f5f4f4",
    fontSize: 50,
  },
});

export default LandscapeView;
