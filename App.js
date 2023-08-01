import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Header from "./components/header";
import TodoItem from "./components/todoItem";
import AddTodo from "./components/addTodo";
import Sandbox from "./components/sandbox";

export default function App() {
  // const [name, setName] = useState("Ishaq");
  // const [age, setAge] = useState("22");
  // const [people, setPeople] = useState([
  //   { name: "John", id: "1" },
  //   { name: "kitty", id: "2" },
  //   { name: "shaun", id: "3" },
  //   { name: "peek", id: "4" },
  //   { name: "mario", id: "5" },
  //   { name: "mr", id: "6" },
  //   { name: "tro", id: "7" },
  // ]);

  // const pressHandler = (id) => {
  //   console.log(id);
  //   setPeople((prevPeople) => {
  //     return prevPeople.filter((person) => person.id != id);
  //   });
  // };

  const [todos, setTodos] = useState([
    { text: "buy a coffee", key: "1" },
    { text: "create an app", key: "2" },
    { text: "go to the gym", key: "3" },
  ]);

  const onPrs = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todos) => todos.key != key);
    });
  };

  const buttonHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [{ text: text, key: Math.random().toString() }, ...prevTodos];
      });
    } else {
      Alert.alert("OOPS!", " Must be over 3 characters", [
        { text: "UnderStood", onPress: () => console.log("alert closed") },
      ]);
    }
  };

  // return (
  //   <View style={styles.container}>
  {
    /* Text Input */
  }
  {
    /* <Text>Enter name: </Text>
      <Text>
        name : {name} , age:{age}
      </Text>
      <TextInput
        multiline
        style={styles.input}
        placeholder="Enter name"
        onChangeText={(val) => setName(val)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Age"
        onChangeText={(val) => setAge(val)}
      /> */
  }

  {
    /* Button */
  }
  {
    /* <View style={styles.buttonContainer}>
        <Button title="update state" onPress={clikHandler} />
      </View> */
  }

  {
    /* scrollView */
  }
  {
    /* <ScrollView>
        {people.map((item) => (
          <View key={i.key}>
            <Text style={styles.item}> {item.name} </Text>
          </View>
        ))}
      </ScrollView> */
  }

  {
    /* FlatList */
  }
  {
    /* <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      /> */
  }

  {
    /* toDoApp  */
  }
  {
    /* header */
  }
  return (
    // <Sandbox />
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log("dismissed keyboard");
      }}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          {/* todo form */}
          <AddTodo submitHandler={buttonHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => <TodoItem item={item} onPrs={onPrs} />}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 30,
    // backgroundColor: "skyblue",
    flex: 1,
  },
  list: {
    marginTop: 20,
    // backgroundColor: "yellow",
    flex: 1,
  },
});
