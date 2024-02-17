import {
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import {
  AntDesign,
  Entypo,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import theme from "../../../assets/constants/theme";
import { saveAsyncToken } from "../../helper/AsyncStorage";
import { useNavigation } from "@react-navigation/native";

const Account = () => {
  const navigation = useNavigation();
  const { darkPink } = theme.COLORS;
  const { medium } = theme.SHADOWS;

  const [modal, setModal] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const handleOtherBtn = async (page) => {
    await saveAsyncToken("other", page);
    navigation.navigate("Other");
  };

  const handleModalBtn = (feat) => {
    setModal(feat);
    setModalVisible(true);
  };

  const handleOut = () => {};

  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
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

      <Pressable
        style={styles.btnWidget}
        onPress={() => handleOtherBtn("wallet")}
      >
        <View style={{ flexDirection: "row" }}>
          <FontAwesome5 name="wallet" size={20} color={darkPink} />
          <Text style={styles.btnTitle}>Waver Wallet</Text>
        </View>
        <MaterialIcons name="navigate-next" size={20} color="black" />
      </Pressable>
      <View style={styles.thinLine} />

      <Pressable
        style={styles.btnWidget}
        onPress={() => handleOtherBtn("referral")}
      >
        <View style={{ flexDirection: "row" }}>
          <Entypo name="users" size={20} color={darkPink} />
          <Text style={styles.btnTitle}>Invite Friends</Text>
        </View>
        <MaterialIcons name="navigate-next" size={20} color="black" />
      </Pressable>
      <View style={styles.thinLine} />

      <Pressable
        style={styles.btnWidget}
        onPress={() => handleOtherBtn("help")}
      >
        <View style={{ flexDirection: "row" }}>
          <Entypo name="help-with-circle" size={20} color={darkPink} />
          <Text style={styles.btnTitle}>Help & Support</Text>
        </View>
        <MaterialIcons name="navigate-next" size={20} color="black" />
      </Pressable>
      <View style={styles.thinLine} />

      <Pressable
        style={styles.btnWidget}
        onPress={() => handleModalBtn("delete")}
      >
        <View style={{ flexDirection: "row" }}>
          <MaterialIcons name="delete" size={20} color="#FF0000" />
          <Text style={[styles.btnTitle, { color: "#FF0000" }]}>
            Delete Account
          </Text>
        </View>
        <MaterialIcons name="navigate-next" size={20} color="black" />
      </Pressable>
      <View style={styles.thickLine} />

      <Text style={styles.title}>GENERAL</Text>

      <Pressable style={styles.btnWidget}>
        <View style={{ flexDirection: "row" }}>
          <Entypo name="star" size={20} color={darkPink} />
          <Text style={styles.btnTitle}>Rate App</Text>
        </View>
        <MaterialIcons name="navigate-next" size={20} color="black" />
      </Pressable>
      <View style={styles.thinLine} />

      <Pressable style={styles.btnWidget}>
        <View style={{ flexDirection: "row" }}>
          <FontAwesome name="group" size={20} color={darkPink} />
          <Text style={styles.btnTitle}>Join Our Community</Text>
        </View>
        <MaterialIcons name="navigate-next" size={20} color="black" />
      </Pressable>
      <View style={styles.thinLine} />

      <Pressable
        style={styles.btnWidget}
        onPress={() => handleOtherBtn("privacy")}
      >
        <View style={{ flexDirection: "row" }}>
          <MaterialIcons name="privacy-tip" size={20} color={darkPink} />
          <Text style={styles.btnTitle}>Privacy Policy</Text>
        </View>
        <MaterialIcons name="navigate-next" size={20} color="black" />
      </Pressable>
      <View style={styles.thinLine} />

      <Pressable
        style={styles.btnWidget}
        onPress={() => handleOtherBtn("terms")}
      >
        <View style={{ flexDirection: "row" }}>
          <AntDesign name="filetext1" size={20} color={darkPink} />
          <Text style={styles.btnTitle}>Terms of Service</Text>
        </View>
        <MaterialIcons name="navigate-next" size={20} color="black" />
      </Pressable>
      <View style={styles.thickLine} />

      <Pressable
        style={[styles.btnWidget, { marginTop: 30, marginBottom: 30 }]}
        onPress={() => handleModalBtn("logout")}
      >
        <View style={{ flexDirection: "row" }}>
          <Ionicons name="log-out" size={20} color="#FF0000" />
          <Text style={[styles.btnTitle, { color: "#FF0000" }]}>Log out</Text>
        </View>
        <MaterialIcons name="navigate-next" size={20} color="black" />
      </Pressable>

      <Modal
        animationType="spring"
        transparent
        statusBarTranslucent
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <Pressable
          style={styles.modalBackdrop}
          onPress={() => setModalVisible(false)}
        >
          <Pressable style={[styles.modalContainer, medium]}>
            <Text style={styles.modalTitle}>
              {modal === "delete"
                ? "Do you wish to delete your account?"
                : "Do you wish to logout?"}
            </Text>
            {modal === "delete" && (
              <Text style={styles.modalNote}>
                *Clicking 'Yes' will remove all records of your account
              </Text>
            )}

            <View style={styles.modalBtnWidget}>
              <Pressable
                style={styles.modalBtn}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalBtnText}>No</Text>
              </Pressable>
              <Pressable
                style={[styles.modalBtn, { backgroundColor: darkPink }]}
                onPress={handleOut}
              >
                <Text style={styles.modalBtnText}>Yes</Text>
              </Pressable>
            </View>
          </Pressable>
        </Pressable>
      </Modal>
    </ScrollView>
  );
};

export default Account;

const styles = StyleSheet.create({
  top: {
    marginTop: 15,
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
  modalBackdrop: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, .3)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "white",
    width: "80%",
    padding: 15,
    borderRadius: 10,
  },
  modalTitle: {
    fontFamily: "LatoRegular",
    fontSize: 18,
    marginBottom: 10,
  },
  modalNote: {
    fontFamily: "LatoRegular",
    fontSize: 14,
    opacity: 0.5,
  },
  modalBtnWidget: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 30,
  },
  modalBtn: {
    width: 100,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: "rgba(0, 0, 0, .6)",
  },
  modalBtnText: {
    textAlign: "center",
    fontFamily: "Prociono",
    fontSize: 16,
    color: "white",
  },
});
