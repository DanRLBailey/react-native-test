import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [name, setName] = useState("Name");
  const [person, setPerson] = useState({
    name: "Little Cheese",
    color: "Questrian",
  });

  const clickHandler = (newName) => {
    setPerson({ name: newName });
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>What up {person.name}</Text>
      <TextInput
        style={styles.input}
        placeholder="name"
        onChangeText={(val) => setName(val)}
      />
      <View style={styles.buttonContainer}>
        <Button title="UpdateName" onPress={() => clickHandler(name)} />
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
  input: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    width: 200,
  },
});
