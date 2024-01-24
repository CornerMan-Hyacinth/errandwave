import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  AntDesign,
  Entypo,
  FontAwesome,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";
import theme from "../../../assets/constants/theme";

const Account = () => {
  const { darkPink } = theme.COLORS;

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.top}>
        <Image
          source={require("../../../assets/images/avatarImage.jpg")}
          style={styles.avatar}
        />
        <View style={{ marginStart: 15 }}>
          <Text style={styles.name}>Edward Ike</Text>
          <Text style={styles.email}>hycorner462@gmail.com</Text>
        </View>
        <View style={[styles.role, { borderColor: darkPink }]}>
          <Text style={[styles.roleText, { color: darkPink }]}>Waver</Text>
        </View>
      </View>
      <View style={styles.thickLine} />

      <Text style={styles.title}>PERSONAL</Text>

      <View style={styles.btnWidget}>
        <View style={{ flexDirection: "row" }}>
          <FontAwesome5 name="wallet" size={20} color={darkPink} />
          <Text style={styles.btnTitle}>Waver Wallet</Text>
        </View>
        <MaterialIcons name="navigate-next" size={20} color="black" />
      </View>
      <View style={styles.thinLine} />

      <View style={styles.btnWidget}>
        <View style={{ flexDirection: "row" }}>
          <Entypo name="users" size={20} color={darkPink} />
          <Text style={styles.btnTitle}>Invite Friends</Text>
        </View>
        <MaterialIcons name="navigate-next" size={20} color="black" />
      </View>
      <View style={styles.thinLine} />

      <View style={styles.btnWidget}>
        <View style={{ flexDirection: "row" }}>
          <Entypo name="help-with-circle" size={20} color={darkPink} />
          <Text style={styles.btnTitle}>Help & Support</Text>
        </View>
        <MaterialIcons name="navigate-next" size={20} color="black" />
      </View>
      <View style={styles.thinLine} />

      <View style={styles.btnWidget}>
        <View style={{ flexDirection: "row" }}>
          <MaterialIcons name="delete" size={20} color="#FF0000" />
          <Text style={[styles.btnTitle, { color: "#FF0000" }]}>
            Delete Account
          </Text>
        </View>
        <MaterialIcons name="navigate-next" size={20} color="black" />
      </View>
      <View style={styles.thickLine} />

      <Text style={styles.title}>GENERAL</Text>

      <View style={styles.btnWidget}>
        <View style={{ flexDirection: "row" }}>
          <Entypo name="star" size={20} color={darkPink} />
          <Text style={styles.btnTitle}>Rate App</Text>
        </View>
        <MaterialIcons name="navigate-next" size={20} color="black" />
      </View>
      <View style={styles.thinLine} />

      <View style={styles.btnWidget}>
        <View style={{ flexDirection: "row" }}>
          <FontAwesome name="group" size={20} color={darkPink} />
          <Text style={styles.btnTitle}>Join Our Community</Text>
        </View>
        <MaterialIcons name="navigate-next" size={20} color="black" />
      </View>
      <View style={styles.thinLine} />

      <View style={styles.btnWidget}>
        <View style={{ flexDirection: "row" }}>
          <MaterialIcons name="privacy-tip" size={20} color={darkPink} />
          <Text style={styles.btnTitle}>Privacy Policy</Text>
        </View>
        <MaterialIcons name="navigate-next" size={20} color="black" />
      </View>
      <View style={styles.thinLine} />

      <View style={styles.btnWidget}>
        <View style={{ flexDirection: "row" }}>
          <AntDesign name="filetext1" size={20} color={darkPink} />
          <Text style={styles.btnTitle}>Terms of Service</Text>
        </View>
        <MaterialIcons name="navigate-next" size={20} color="black" />
      </View>
      <View style={styles.thickLine} />

      <View style={[styles.btnWidget, { marginTop: 30, marginBottom: 30 }]}>
        <View style={{ flexDirection: "row" }}>
          <MaterialIcons name="delete" size={20} color="#FF0000" />
          <Text style={[styles.btnTitle, { color: "#FF0000" }]}>
            Delete Account
          </Text>
        </View>
        <MaterialIcons name="navigate-next" size={20} color="black" />
      </View>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  top: {
    marginTop: 30,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  name: {
    fontFamily: "LatoRegular",
    fontSize: 18,
    marginBottom: 2,
  },
  email: {
    fontFamily: "LatoRegular",
    fontSize: 14,
    opacity: 0.7,
  },
  role: {
    position: "absolute",
    right: 15,
    borderRadius: 20,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  roleText: {
    fontFamily: "Prociono",
    fontSize: 14,
  },
  thickLine: {
    width: "100%",
    height: 2,
    backgroundColor: "black",
    opacity: 0.7,
    marginTop: 10,
  },
  title: {
    fontFamily: "Prociono",
    fontSize: 14,
    opacity: 0.7,
    paddingHorizontal: 15,
    marginTop: 30,
    marginBottom: 15,
  },
  btnWidget: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    marginTop: 15,
  },
  btnTitle: {
    marginStart: 15,
    fontFamily: "LatoRegular",
    fontSize: 16,
  },
  thinLine: {
    width: "100%",
    height: 1,
    backgroundColor: "black",
    opacity: 0.5,
    marginTop: 10,
  },
});
