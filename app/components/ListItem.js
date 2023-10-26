import { StyleSheet,Text,TouchableOpacity, View} from "react-native";
import React from "react";
import Ionicons from '@expo/vector-icons/Ionicons';


const ListItem = ({item,deleteItem}) => {
  return (
  <TouchableOpacity style={styles.listItem}> 
    <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{item.text}</Text>
        <Ionicons name="trash" size={20} color="firebrick" 
        onPress={() => deleteItem(item.id)}/>
    </View>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  listItem:{
    padding:15,
    backgroundColor:"#f8f8f8",
    borderBottomWidth:1,
    borderColor:"#eee",
  },
  listItemView:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
  },
});

export default ListItem;
