import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
// import { change } from "./change";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.p2Wrapper}>
          <Text style={styles.p2}>PLAYER 2: O</Text>
        </View>
        <View style={styles.btnWrapper}>
          <View style={styles.r1}>
            <Pressable style={styles.btn}>
              <Text style={styles.btnText}>-</Text>
            </Pressable>
            <Pressable style={styles.btn}>
              <Text style={styles.btnText}>-</Text>
            </Pressable>
            <Pressable style={styles.btn}>
              <Text style={styles.btnText}>-</Text>
            </Pressable>
          </View>
          <View style={styles.r2}>
            <Pressable style={styles.btn}>
              <Text style={styles.btnText}>-</Text>
            </Pressable>
            <Pressable style={styles.btn}>
              <Text style={styles.btnText}>-</Text>
            </Pressable>
            <Pressable style={styles.btn}>
              <Text style={styles.btnText}>-</Text>
            </Pressable>
          </View>
          <View style={styles.r3}>
            <Pressable style={styles.btn}>
              <Text style={styles.btnText}>-</Text>
            </Pressable>
            <Pressable style={styles.btn}>
              <Text style={styles.btnText}>-</Text>
            </Pressable>
            <Pressable style={styles.btn}>
              <Text style={styles.btnText}>-</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.p1Wrapper}>
          <Text style={styles.p1}>PLAYER 1: X</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  p2Wrapper: {
    transform: [{ rotate: "180deg" }],
    justifyContent: "center",
    alignItems: "center",
  },
  p2: {
    color: "red",
    fontSize: 30,
    fontWeight: "bold",
  },
  btnWrapper: {
    marginVertical: "10%",
  },
  btn: {
    padding: "5%",
    borderWidth: 3,
    borderColor: "black",
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    fontSize: 45,
  },
  r1: {
    flexDirection: "row",
    // padding: 10,
    // margin: 10,
  },
  r2: {
    flexDirection: "row",
    // padding: 10,
    // margin: 10,
  },
  r3: {
    flexDirection: "row",
    // padding: 10,
    // margin: 10,
  },
  p1Wrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  p1: {
    color: "blue",
    fontSize: 30,
    fontWeight: "bold",
  },
});
