import React from "react";
import { Pressable, StyleSheet, Text, View, Button } from "react-native";
import Modal from "./modal";

export default function App() {
  let [symbols, setS] = React.useState([]);
  let [win1, setWin1] = React.useState([]);
  let [win2, setWin2] = React.useState([]);
  let [win3, setWin3] = React.useState([]);

  const [b1, setb1] = React.useState("-");
  const [b2, setb2] = React.useState("-");
  const [b3, setb3] = React.useState("-");
  const [b4, setb4] = React.useState("-");
  const [b5, setb5] = React.useState("-");
  const [b6, setb6] = React.useState("-");
  const [b7, setb7] = React.useState("-");
  const [b8, setb8] = React.useState("-");
  const [b9, setb9] = React.useState("-");

  const [modal, setModal] = React.useState(false);

  const checkWin = (n) => {
    console.log("r1", win1);
    console.log("r2", win2);
    console.log("r3", win3);

    let s = symbols[symbols.length - 1];
    if (win1[0] == s && win1[1] == s && win1[2] == s) {
      //R1
      alert(1);
      setModal(true);
    } else if (win2[0] === s && win2[1] === s && win2[2] === s) {
      //R2
      alert(2);
      setModal(true);
    } else if (win3[0] === n && win3[1] === n && win3[2] === n) {
      //R3
      alert(3);
      setModal(true);
    } else if (win1[0] === n && win2[0] === n && win3[0] === n) {
      //C1
      alert(4);
      setModal(true);
    } else if (win1[1] === n && win2[1] === n && win3[1] === n) {
      //C2
      alert(5);
      setModal(true);
    } else if (win1[2] === n && win2[2] === n && win3[2] === n) {
      //C3
      alert(6);
      setModal(true);
    } else if (win1[0] === n && win2[1] === n && win3[2] === n) {
      //D1
      alert("D1");
      setModal(true);
    } else if (win1[2] === n && win2[1] === n && win3[0] === n) {
      //D2
      alert("D2");
      setModal(true);
    }
  };

  const hideModal = (k) => {
    setModal(k);
  };

  const change = (n) => {
    if (n === 1) {
      if (b1 === "O" || b1 === "X");
      else if (b1 === "-" && symbols.length === 0) {
        setb1("X");
        setS([...symbols, "X"]);
        setWin1([...win1, "X"]);
        // checkWin("X");
      } else if (b1 === "-" && symbols[symbols.length - 1] === "X") {
        setS([...symbols, "O"]);
        setb1("O");
        setWin1([...win1, "O"]);
        // checkWin("O");
      } else if (b1 === "-" && symbols[symbols.length - 1] === "O") {
        setS([...symbols, "X"]);
        setb1("X");
        setWin1([...win1, "X"]);
        // checkWin("X");
      }
    } else if (n === 2) {
      if (b2 === "O" || b2 === "X");
      else if (b2 === "-" && symbols.length === 0) {
        setb2("X");
        setS([...symbols, "X"]);
        setWin1([...win1, "X"]);

        // checkWin("X");
      } else if (b2 === "-" && symbols[symbols.length - 1] === "X") {
        setb2("O");
        setS([...symbols, "O"]);
        setWin1([...win1, "O"]);

        // checkWin("O");
      } else if (b2 === "-" && symbols[symbols.length - 1] === "O") {
        setb2("X");
        setS([...symbols, "X"]);
        setWin1([...win1, "X"]);

        // checkWin("X");
      }
    } else if (n === 3) {
      if (b3 === "O" || b3 === "X");
      else if (b3 === "-" && symbols.length === 0) {
        setb3("X");
        setS([...symbols, "X"]);
        setWin1([...win1, "X"]);

        // checkWin("X");
      } else if (b3 === "-" && symbols[symbols.length - 1] === "X") {
        setb3("O");
        setS([...symbols, "O"]);
        setWin1([...win1, "O"]);

        // checkWin("O");
      } else if (b3 === "-" && symbols[symbols.length - 1] === "O") {
        setb3("X");
        setS([...symbols, "X"]);
        setWin1([...win1, "X"]);

        // checkWin("X");
      }
    } else if (n === 4) {
      if (b4 === "O" || b4 === "X");
      else if (b4 === "-" && symbols.length === 0) {
        setb4("X");
        setS([...symbols, "X"]);
        setWin2([...win2, "X"]);
        // checkWin("X");
      } else if (b4 === "-" && symbols[symbols.length - 1] === "X") {
        setb4("O");
        setS([...symbols, "O"]);
        setWin2([...win2, "O"]);
        // checkWin("O");
      } else if (b4 === "-" && symbols[symbols.length - 1] === "O") {
        setb4("X");
        setS([...symbols, "X"]);
        setWin2([...win2, "X"]);
        // checkWin("X");
      }
    } else if (n === 5) {
      if (b5 === "O" || b5 === "X");
      else if (b5 === "-" && symbols.length === 0) {
        setb5("X");
        setS([...symbols, "X"]);
        setWin2([...win2, "X"]);
        // checkWin("X");
      } else if (b5 === "-" && symbols[symbols.length - 1] === "X") {
        setb5("O");
        setS([...symbols, "O"]);
        setWin2([...win2, "O"]);
        // checkWin("O");
      } else if (b5 === "-" && symbols[symbols.length - 1] === "O") {
        setb5("X");
        setS([...symbols, "X"]);
        setWin2([...win2, "X"]);
        // checkWin("X");
      }
    } else if (n === 6) {
      if (b6 === "O" || b6 === "X");
      else if (b6 === "-" && symbols.length === 0) {
        setb6("X");
        setS([...symbols, "X"]);
        setWin2([...win2, "X"]);
        // checkWin("X");
      } else if (b6 === "-" && symbols[symbols.length - 1] === "X") {
        setb6("O");
        setS([...symbols, "O"]);
        setWin2([...win2, "O"]);
        // checkWin("O");
      } else if (b6 === "-" && symbols[symbols.length - 1] === "O") {
        setb6("X");
        setS([...symbols, "X"]);
        setWin2([...win2, "X"]);
        // checkWin("X");
      }
    } else if (n === 7) {
      if (b7 === "O" || b7 === "X");
      else if (b7 === "-" && symbols.length === 0) {
        setb7("X");
        setS([...symbols, "X"]);
        setWin3([...win3, "X"]);
        // checkWin("X");
      } else if (b7 === "-" && symbols[symbols.length - 1] === "X") {
        setb7("O");
        setS([...symbols, "O"]);
        setWin3([...win3, "O"]);
        // checkWin("O");
      } else if (b7 === "-" && symbols[symbols.length - 1] === "O") {
        setb7("X");
        setS([...symbols, "X"]);
        setWin3([...win3, "X"]);
        // checkWin("X");
      }
    } else if (n === 8) {
      if (b8 === "O" || b8 === "X");
      else if (b8 === "-" && symbols.length === 0) {
        setb8("X");
        setS([...symbols, "X"]);
        setWin3([...win3, "X"]);
        // checkWin("X");
      } else if (b8 === "-" && symbols[symbols.length - 1] === "X") {
        setb8("O");
        setS([...symbols, "O"]);
        setWin3([...win3, "O"]);
        // checkWin("O");
      } else if (b8 === "-" && symbols[symbols.length - 1] === "O") {
        setb8("X");
        setS([...symbols, "X"]);
        setWin3([...win3, "X"]);
        // checkWin("X");
      }
    } else if (n === 9) {
      if (b9 === "O" || b9 === "X");
      else if (b9 === "-" && symbols.length === 0) {
        setb9("X");
        setS([...symbols, "X"]);
        setWin3([...win3, "X"]);
        // checkWin("X");
      } else if (b9 === "-" && symbols[symbols.length - 1] === "X") {
        setb9("O");
        setS([...symbols, "O"]);
        setWin3([...win3, "O"]);
        // checkWin("O");
      } else if (b9 === "-" && symbols[symbols.length - 1] === "O") {
        setb9("X");
        setS([...symbols, "X"]);
        setWin3([...win3, "X"]);
        // checkWin("X");
      }
    }
  };
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.p2Wrapper}>
          <Text style={styles.p2}>PLAYER 2: O</Text>
        </View>
        <View style={styles.btnWrapper}>
          <View style={styles.r1}>
            <Pressable
              style={styles.btn}
              onPress={() => {
                change(1);
                checkWin();
              }}
            >
              <Text style={styles.btnText}>{b1}</Text>
            </Pressable>
            <Pressable
              style={styles.btn}
              onPress={() => {
                change(2);
                checkWin();
              }}
            >
              <Text style={styles.btnText}>{b2}</Text>
            </Pressable>
            <Pressable
              style={styles.btn}
              onPress={() => {
                change(3);
                checkWin();
              }}
            >
              <Text style={styles.btnText}>{b3}</Text>
            </Pressable>
          </View>
          <View style={styles.r2}>
            <Pressable
              style={styles.btn}
              onPress={() => {
                change(4);
                checkWin();
              }}
            >
              <Text style={styles.btnText}>{b4}</Text>
            </Pressable>
            <Pressable
              style={styles.btn}
              onPress={() => {
                change(5);
                checkWin();
              }}
            >
              <Text style={styles.btnText}>{b5}</Text>
            </Pressable>
            <Pressable
              style={styles.btn}
              onPress={() => {
                change(6);
                checkWin();
              }}
            >
              <Text style={styles.btnText}>{b6}</Text>
            </Pressable>
          </View>
          <View style={styles.r3}>
            <Pressable
              style={styles.btn}
              onPress={() => {
                change(7);
              }}
            >
              <Text style={styles.btnText}>{b7}</Text>
            </Pressable>
            <Pressable
              style={styles.btn}
              onPress={() => {
                change(8);
              }}
            >
              <Text style={styles.btnText}>{b8}</Text>
            </Pressable>
            <Pressable
              style={styles.btn}
              onPress={() => {
                change(9);
              }}
            >
              <Text style={styles.btnText}>{b9}</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.p1Wrapper}>
          <Text style={styles.p1}>PLAYER 1: X</Text>
        </View>
        <Button title="click" onPress={() => alert(win2)} />
      </View>
      {modal ? (
        <Modal
          show={true}
          hideModal={hideModal}
          symbol={symbols[symbols.length - 1]}
        />
      ) : null}
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
