import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Profile1 from "./assets/Profile1.jpg";

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
      <Image source={Profile1} style={styles.image} />
      <View style={styles.topContainer}>
        <View style={styles.topLabels}>
          <Text style={styles.topLabel}>School</Text>
          <TextInput style={styles.topInput} />
        </View>

        <View style={styles.topLabels}>
          <Text style={styles.topLabel}>Email Address</Text>
          <TextInput style={styles.topInput} />
        </View>
      </View>

      <View style={styles.downContainer}>
        <View style={styles.downLabels}>
          <Text style={styles.downLabel}>Name</Text>
          <TextInput
            style={[styles.topInput, styles.downInput]}
            autoCapitalie="none"
            autoCorrect={false}
          />
        </View>

        <View style={styles.downLabels}>
          <Text style={styles.downLabel}>Nick Name</Text>
          <TextInput
            style={[styles.topInput, styles.downInput]}
            autoCapitalie="none"
            autoCorrect={false}
          />
        </View>

        <View style={styles.downLabels}>
          <Text style={styles.downLabel}>Emergency Number</Text>
          <TextInput
            style={[styles.topInput, styles.downInput]}
            autoCapitalie="none"
            autoCorrect={false}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.buttonContainer} >
        <Text style={styles.buttonText}>Update Profile</Text>
      </TouchableOpacity>

      <View style={styles.copyRight}>
        <Text style={styles.copyRightText}>
          CodeNyakeh 2023 &#169; All rights reserved.
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 250,
    marginBottom: 30,
    alignSelf: "center",
    marginTop: 75,
  },
  topContainer: {
    marginHorizontal: 50,
  },
  topLabel: {
    color: "#b8b4b4",
  },
  topInput: {
    marginVertical: 5,
  },
  downContainer: {
    marginVertical: 4,
    marginHorizontal: 50,
  },
  downLabel: {
    color: "#00d9ff",
    paddingTop: 20,
  },
  downInput: {
    borderBottomColor: "#b8b4b4",
    borderBottomWidth: 1,
  },
  buttonContainer: {
    backgroundColor: "#00d9ff",
    marginVertical: 30,
    marginHorizontal: 70,
    height: 50,
    width: 250,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: "white",
  },
  copyRight: {
    alignSelf: "center",
    // marginTop: 5,
  },
  copyRightText: {
    color: "#b8b4b4",
  },
});
