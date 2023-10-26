import { SafeAreaView,StyleSheet,TextInput,Text, TouchableOpacity} from "react-native";
import React from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from "react";


const AddItem = ({addItem}) => {

    const [text, setText] = useState('');

    const onChange = textValue => setText(textValue);

  return (
    <SafeAreaView>
        <TextInput placeholder="Add Books" style={styles.input} onChangeText={onChange} />
        <TouchableOpacity style={styles.btn} 
        onPress={()=> addItem(text)}>
            <Text style={styles.btnText}
            ><Ionicons name="add" size={20} />
            Add items</Text>
        </TouchableOpacity>
    </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    input:{
        height:60,
        padding:8,
        margin:5,
        fontSize:16,
        backgroundColor:"#f3f6f4",
    },
    btn:{
        backgroundColor:"#c1d8c3",
        width:"100%",
        padding:10,
        marginLeft:0,
    },
    btnText:{
        color:"#6a9c89",
        fontSize:20,
        textAlign:"center",
    },
}); 

export default AddItem;
