import { SafeAreaView,StyleSheet,Text} from "react-native";
import React from "react";


const Header = ({title}) => {
  return (
  <SafeAreaView 
  style={styles.header}>
<Text style={styles.headerText}>{title}</Text>
    </SafeAreaView>
  );
};

Header.defaultProps = {
  title: "My Book List",
};

const styles = StyleSheet.create({
  header: {
    height: 80,
    padding:15,
    backgroundColor: "#cd5c08",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
    color: "#fff",
  },
});

export default Header;
