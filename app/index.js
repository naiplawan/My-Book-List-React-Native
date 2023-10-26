import { FlatList, SafeAreaView,StyleSheet,Text} from "react-native";
import React,{useState} from "react";
import Header from "./components/Header"; 
import ListItem from "./components/ListItem";
import uuid from "uuid-random";
import AddItem from "./components/AddItem";
import { Alert } from "react-native";

const Home = () => {
  const [items, setItems] = useState([
    {id:uuid(),text:"HTML"},
    {id:uuid(),text:"CSS"},
    {id:uuid(),text:"JS"},
    {id:uuid(),text:"PHP"},
  ])

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id)
    })
  }

  const addItem = (text) => {
    if(!text){
      Alert.alert("Error","Please enter an item", {text:"Ok"})
    }
    setItems(prevItems => {
      return [{id:uuid(),text},...prevItems]
    })
  }

  return (
  <SafeAreaView 
  style={styles.container}>
    <Header />
    <AddItem addItem={addItem}/>
    <FlatList 
    data={items}
    renderItem={({item}) => (<ListItem item={item} deleteItem={deleteItem} />)}
    />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f2e1",
    paddingTop:80,
  },
});

export default Home;
