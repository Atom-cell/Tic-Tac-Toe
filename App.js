import React from "react";
import { Pressable, StyleSheet, Text, View, Button, Image } from "react-native";
import ShowModal from "./Modal";

export default function App() {
  let [count, setCount] = React.useState(0);
  const [modal, setModal] = React.useState(false);
  const [symbol, setSymbol] = React.useState(null);
  const [board, setBoard] = React.useState([
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
  ]);

  const alt = () => {
    if (count % 2 === 0) {
      setCount((count) => count + 1);
      return "X";
    } else {
      setCount((count) => count + 1);
      return "O";
    }
  };

  React.useEffect(() => {
    checkWin();
  }, [board]);

  const change = (n) => {
    if (n === 1) {
      let a = [...board];
      a[0] = alt();
      setBoard(a);
    } else if (n === 2) {
      let a = [...board];
      a[1] = alt();
      setBoard(a);
    } else if (n === 3) {
      let a = [...board];
      a[2] = alt();
      setBoard(a);
    } else if (n === 4) {
      let a = [...board];
      a[3] = alt();
      setBoard(a);
    } else if (n === 5) {
      let a = [...board];
      a[4] = alt();
      setBoard(a);
    } else if (n === 6) {
      let a = [...board];
      a[5] = alt();
      setBoard(a);
    } else if (n === 7) {
      let a = [...board];
      a[6] = alt();
      setBoard(a);
    } else if (n === 8) {
      let a = [...board];
      a[7] = alt();
      setBoard(a);
    } else if (n === 9) {
      let a = [...board];
      a[8] = alt();
      setBoard(a);
    }
  };

  const hideModal = () => {
    setModal(false);
    setCount(0);
    setSymbol(null);
    setBoard(["-", "-", "-", "-", "-", "-", "-", "-", "-"]);
  };

  const checkWin = () => {
    if (
      (board[0] == "X" && board[1] == "X" && board[2] == "X") ||
      (board[0] == "O" && board[1] == "O" && board[2] == "O")
    ) {
      if (board[0] === "X") setSymbol("X");
      else setSymbol("O");
      setModal(true);
    } else if (
      (board[3] == "X" && board[4] == "X" && board[5] == "X") ||
      (board[3] == "O" && board[4] == "O" && board[5] == "O")
    ) {
      if (board[3] === "X") setSymbol("X");
      else setSymbol("O");
      setModal(true);
    } else if (
      (board[6] == "X" && board[7] == "X" && board[8] == "X") ||
      (board[6] == "O" && board[7] == "O" && board[8] == "O")
    ) {
      if (board[6] === "X") setSymbol("X");
      else setSymbol("O");
      setModal(true);
    } else if (
      (board[0] == "X" && board[3] == "X" && board[6] == "X") ||
      (board[0] == "O" && board[3] == "O" && board[6] == "O")
    ) {
      if (board[0] === "X") setSymbol("X");
      else setSymbol("O");
      setModal(true);
    } else if (
      (board[1] == "X" && board[4] == "X" && board[7] == "X") ||
      (board[1] == "O" && board[4] == "O" && board[7] == "O")
    ) {
      if (board[1] === "X") setSymbol("X");
      else setSymbol("O");
      setModal(true);
    } else if (
      (board[2] == "X" && board[5] == "X" && board[8] == "X") ||
      (board[2] == "O" && board[5] == "O" && board[8] == "O")
    ) {
      if (board[2] === "X") setSymbol("X");
      else setSymbol("O");
      setModal(true);
    } else if (
      (board[0] == "X" && board[4] == "X" && board[8] == "X") ||
      (board[0] == "O" && board[4] == "O" && board[8] == "O")
    ) {
      if (board[4] === "X") setSymbol("X");
      else setSymbol("O");
      setModal(true);
    } else if (
      (board[2] == "X" && board[4] == "X" && board[6] == "X") ||
      (board[2] == "O" && board[4] == "O" && board[6] == "O")
    ) {
      if (board[4] === "X") setSymbol("X");
      else setSymbol("O");
      setModal(true);
    }
  };

  return (
    <>
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
                  {
                    board[0] === "-" && change(1);
                  }
                }}
              >
                <Text style={styles.btnText}>{board[0]}</Text>
              </Pressable>
              <Pressable
                style={styles.btn}
                onPress={() => {
                  {
                    board[1] === "-" && change(2);
                  }
                }}
              >
                <Text style={styles.btnText}>{board[1]}</Text>
              </Pressable>
              <Pressable
                style={styles.btn}
                onPress={() => {
                  {
                    board[2] === "-" && change(3);
                  }
                }}
              >
                <Text style={styles.btnText}>{board[2]}</Text>
              </Pressable>
            </View>
            <View style={styles.r2}>
              <Pressable
                style={styles.btn}
                onPress={() => {
                  {
                    board[3] === "-" && change(4);
                  }
                }}
              >
                <Text style={styles.btnText}>{board[3]}</Text>
              </Pressable>
              <Pressable
                style={styles.btn}
                onPress={() => {
                  {
                    board[4] === "-" && change(5);
                  }
                }}
              >
                <Text style={styles.btnText}>{board[4]}</Text>
              </Pressable>
              <Pressable
                style={styles.btn}
                onPress={() => {
                  {
                    board[5] === "-" && change(6);
                  }
                }}
              >
                <Text style={styles.btnText}>{board[5]}</Text>
              </Pressable>
            </View>
            <View style={styles.r3}>
              <Pressable
                style={styles.btn}
                onPress={() => {
                  {
                    board[6] === "-" && change(7);
                  }
                }}
              >
                <Text style={styles.btnText}>{board[6]}</Text>
              </Pressable>
              <Pressable
                style={styles.btn}
                onPress={() => {
                  {
                    board[7] === "-" && change(8);
                  }
                }}
              >
                <Text style={styles.btnText}>{board[7]}</Text>
              </Pressable>
              <Pressable
                style={styles.btn}
                onPress={() => {
                  {
                    board[8] === "-" && change(9);
                  }
                }}
              >
                <Text style={styles.btnText}>{board[8]}</Text>
              </Pressable>
            </View>
          </View>
          <View style={styles.p1Wrapper}>
            <Text style={styles.p1}>PLAYER 1: X</Text>
          </View>
        </View>
        {modal ? (
          <ShowModal show={true} hideModal={hideModal} symbol={symbol} />
        ) : null}
      </View>
      <Pressable onPress={() => hideModal()}>
        <View>
          <Image
            source={require("./assets/refresh.png")}
            style={styles.resetBtn}
          />
        </View>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: "10%",
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
  resetBtn: {
    width: 70,
    height: 70,
    position: "relative",
    bottom: "20%",
    marginBottom: 15,
    marginLeft: 20,
  },
});
