import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import theme from "../../../assets/constants/theme";
import { useNavigation } from "@react-navigation/native";
import { saveAsyncToken } from "../../helper/AsyncStorage";

const Chat = () => {
  return (
    <ScrollView
      style={{ flex: 1, paddingHorizontal: 15, marginTop: 15 }}
      showsVerticalScrollIndicator={false}
    >
      <ChatBox />
      <ChatBox />
      <ChatBox />
    </ScrollView>
  );
};

const ChatBox = () => {
  const navigation = useNavigation();
  const { darkPink, lightFaded } = theme.COLORS;

  const handleChat = async () => {
    await saveAsyncToken("contact", "dm");
    navigation.navigate("Contact");
  };

  return (
    <Pressable
      style={[styles.chatBox, { backgroundColor: lightFaded }]}
      onPress={handleChat}
    >
      <View>
        <Image
          source={require("../../../assets/icons/propic.jpg")}
          style={styles.roundPic}
        />
        <View style={[styles.active, { backgroundColor: darkPink }]} />
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={styles.flexMid}>
          <Text style={styles.name}>Kenneth Grams</Text>
          <Text style={[styles.msg]}>I can't find you.</Text>
        </View>
        <View style={styles.flexEnd}>
          <Text style={styles.time}>12:33</Text>
          <View style={[styles.newMsg, { backgroundColor: darkPink }]}>
            <Text style={styles.newMsgText}>1</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default Chat;

const styles = StyleSheet.create({
  chatBox: {
    flexDirection: "row",
    paddingHorizontal: 7,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 15,
  },
  roundPic: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  active: {
    position: "absolute",
    width: 10,
    height: 10,
    right: 0,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
  },
  flexMid: {
    marginStart: 15,
  },
  name: {
    fontFamily: "LatoBold",
    fontSize: 16,
    marginBottom: 5,
  },
  msg: {
    fontFamily: "LatoBold",
    fontSize: 14,
    opacity: 0.7,
  },
  flexEnd: {
    marginEnd: 10,
  },
  time: {
    fontFamily: "LatoLight",
    fontSize: 12,
  },
  newMsg: {
    position: "absolute",
    bottom: 0,
    right: 0,
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 20,
  },
  newMsgText: {
    color: "white",
    fontFamily: "LatoBold",
    fontSize: 12,
  },
});
