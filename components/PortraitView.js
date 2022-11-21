/* eslint-disable */
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import MyButton from "./MyButton";

const PortraitView = ({ count, buttons }) => {

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
    backgroundColor: "#535457",
    height: 320,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    minWidth: "100%",
  },
  displayText: {
    color: "#fff",
    fontSize: 80,
  },
});

export default PortraitView;
