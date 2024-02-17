import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { FontAwesome6, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Call = () => {
  const navigation = useNavigation();

  const [callStatus, setCallStatus] = useState("receiving");
  const [callFeature, setCallFeature] = useState("");

  const handleToggleFeature = (feature) => {
    if (callFeature === feature) {
      setCallFeature("");
    } else {
      setCallFeature(feature);
    }
  };

  const statusLabel = () => {
    switch (callStatus) {
      case "calling":
        return "Calling";

      case "ringing":
        return "Ringing";

      case "receiving":
        return "Waver";

      case "disconnected":
        return "Connecting...";

      case "ended":
        return "Call ended";

      default:
        break;
    }
  };

  const handleEndCall = () => {
    setCallStatus("ended");

    setTimeout(() => {
      navigation.goBack();
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/icons/propic.jpg")}
        style={styles.callPic}
      />
      <Text style={styles.callName}>Alex Otti</Text>
      <Text
        style={[styles.callStatus, callStatus === "receiving" && { flex: 1 }]}
      >
        {callStatus === "connected" ? "09 : 52" : statusLabel()}
      </Text>

      {callStatus !== "receiving" && (
        <View style={styles.callFeat}>
          <View style={styles.featWidget}>
            <Pressable style={styles.featBtn}>
              <FontAwesome6 name="microphone-slash" size={24} color="white" />
            </Pressable>
            <Text style={styles.featText}>Mute</Text>
          </View>

          <View style={styles.featWidget}>
            <Pressable style={styles.featBtn}>
              <Ionicons
                name="chatbubble-ellipses-sharp"
                size={24}
                color="white"
              />
            </Pressable>
            <Text style={styles.featText}>Message</Text>
          </View>

          <View style={styles.featWidget}>
            <Pressable style={styles.featBtn}>
              <FontAwesome6 name="volume-low" size={24} color="white" />
            </Pressable>
            <Text style={styles.featText}>Speaker</Text>
          </View>
        </View>
      )}

      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 45 }}
      >
        <Pressable style={styles.responseBtn} onPress={handleEndCall}>
          <MaterialIcons name="call-end" size={30} color="white" />
        </Pressable>

        {callStatus === "receiving" && (
          <Pressable
            style={[
              styles.responseBtn,
              { marginStart: 90, backgroundColor: "#00FF1A" },
            ]}
          >
            <MaterialIcons name="call" size={30} color="white" />
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default Call;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    alignItems: "center",
  },
  callPic: {
    marginTop: 75,
    width: 90,
    height: 90,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "white",
  },
  callName: {
    fontFamily: "LatoRegular",
    fontSize: 20,
    color: "white",
    marginTop: 15,
  },
  callStatus: {
    fontFamily: "LatoBold",
    fontSize: 14,
    color: "white",
    opacity: 0.7,
    marginTop: 5,
  },
  callFeat: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 75,
  },
  featWidget: {
    alignItems: "center",
    marginHorizontal: 20,
  },
  featBtn: {
    padding: 15,
    borderRadius: 50,
    backgroundColor: "black",
    opacity: 0.6,
  },
  featText: {
    fontFamily: "LatoBold",
    fontSize: 12,
    color: "white",
    marginTop: 10,
  },
  responseBtn: {
    padding: 12,
    borderRadius: 50,
    backgroundColor: "#FF0000",
  },
});
