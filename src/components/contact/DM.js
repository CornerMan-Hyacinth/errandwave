import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { Entypo, Ionicons } from "@expo/vector-icons";
import theme from "../../../assets/constants/theme";
import { useNavigation } from "@react-navigation/native";

const { darkPink } = theme.COLORS;

const DM = ({ handleCall }) => {
  const navigation = useNavigation();

  const [message, updateMessage] = useState("");
  const [textInputHeight, setTextInputHeight] = useState(40);

  const handleInputSize = (event) => {
    setTextInputHeight(event.nativeEvent.contentSize.height);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Entypo name="chevron-left" size={24} color="white" />
        </Pressable>

        <View style={{ alignItems: "center" }}>
          <Text style={styles.dmName} numberOfLines={1}>
            Cornerstone Hyacinth
          </Text>
          <Text style={styles.typing}>typing...</Text>
        </View>
        <Pressable onPress={handleCall}>
          <Ionicons name="call" size={20} color="white" />
        </Pressable>
      </View>

      <View style={styles.dmBody}>
        <ScrollView
          style={{ flex: 1, marginTop: 30, marginBottom: 15 }}
          showsVerticalScrollIndicator={false}
        >
          <DMBox
            message={
              "Hi, I'm the rider for the order. How do I locate your street?"
            }
            time={"14:01"}
            isSent={true}
            received={true}
          />
          <DMBox
            message={"Alright"}
            time={"14:05"}
            isSent={false}
            received={true}
          />
          <DMBox
            message={"Where are you at now?"}
            time={"14:05"}
            isSent={false}
            received={true}
          />
          <DMBox
            message={"I'm close to the back gate now."}
            time={"14:07"}
            isSent={true}
            received={true}
          />
          <DMBox
            message={
              "Okay, I'll send you the directions you'll take from there to my street"
            }
            time={"14:08"}
            isSent={false}
            received={true}
          />
          <DMBox
            message={"Okay, thanks"}
            time={"14:08"}
            isSent={true}
            received={true}
          />
          <DMBox
            message={
              "Okay, I'll send you the directions you'll take from there to my street"
            }
            time={"14:08"}
            isSent={false}
            received={true}
          />
          <DMBox
            message={"Okay, thanks"}
            time={"14:08"}
            isSent={true}
            received={true}
          />
        </ScrollView>
        <View style={styles.messageBox}>
          <TextInput
            placeholder="Message..."
            placeholderTextColor={"white"}
            selectionColor={darkPink}
            multiline
            // numberOfLines={4}
            value={message}
            onChangeText={(text) => updateMessage(text)}
            onContentSizeChange={handleInputSize}
            style={[
              styles.messageInput,
              { height: Math.max(40, textInputHeight) },
            ]}
          />
          <Pressable>
            <Ionicons
              name={message === "" ? "send-outline" : "send"}
              size={20}
              color={message === "" ? "white" : darkPink}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const DMBox = ({ message, time, isSent, received }) => {
  return (
    <View
      style={[
        styles.msgBox,
        isSent && {
          backgroundColor: darkPink,
          borderBottomEndRadius: 5,
          borderBottomStartRadius: 20,
          alignSelf: "flex-end",
        },
      ]}
    >
      <Text style={styles.msg}>{message}</Text>
      <View style={styles.stamp}>
        <Text style={styles.msgTime}>{time}</Text>
        {isSent && (
          <Ionicons
            name={
              received ? "checkmark-circle-sharp" : "checkmark-circle-outline"
            }
            size={12}
            color="rgba(255, 255, 255, .7)"
            style={{ marginStart: 5 }}
          />
        )}
      </View>
    </View>
  );
};

export default DM;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 30,
  },
  dmPic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginEnd: 10,
    borderWidth: 1,
    borderColor: "white",
  },
  dmName: {
    fontFamily: "LatoRegular",
    fontSize: 16,
    color: "white",
  },
  typing: {
    fontFamily: "Prociono",
    fontSize: 14,
    color: "white",
    opacity: 0.7,
  },
  dmBody: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, .8)",
    borderTopStartRadius: 35,
    borderTopEndRadius: 35,
    paddingHorizontal: 15,
  },
  messageBox: {
    minHeight: 45,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, .4)",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 10,
    marginBottom: 15,
  },
  messageInput: {
    flex: 1,
    fontFamily: "LatoRegular",
    fontSize: 16,
    marginEnd: 10,
    color: "white",
  },
  msgBox: {
    backgroundColor: "rgba(0, 0, 0, .4)",
    maxWidth: "80%",
    borderRadius: 20,
    borderBottomStartRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    alignSelf: "flex-start",
  },
  msg: {
    fontFamily: "LatoBold",
    fontSize: 14,
    color: "white",
  },
  stamp: {
    flexDirection: "row",
    alignSelf: "flex-end",
    alignItems: "center",
    marginTop: 4,
  },
  msgTime: {
    fontFamily: "LatoRegular",
    fontSize: 10,
    color: "rgba(255, 255, 255, .7)",
  },
});
