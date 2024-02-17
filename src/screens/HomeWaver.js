import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import theme from "../../assets/constants/theme";
import Landing from "../components/home_waver/Landing";
import Chat from "../components/home_waver/Chat";
import BottomNav from "../components/home_waver/BottomNav";
import Errands from "../components/home_waver/Errands";
import Header from "../components/home_waver/Header";

const HomeWaver = () => {
  const { darkPink } = theme.COLORS;
  const { medium } = theme.SHADOWS;

  const [tab, setTab] = useState("Dashboard");
  const [active, setActive] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const handleTab = (page) => {
    setTab(page);
    console.log(page);
  };

  const renderTabs = () => {
    switch (tab) {
      case "Dashboard":
        return <Landing setTab={handleTab} />;

      case "Errands":
        return <Errands />;

      case "Chat":
        return <Chat />;

      default:
        break;
    }
  };

  const handleModalYes = () => {
    if (active) {
      setActive(false);
      setModalVisible(false);
    } else {
      setActive(true);
      setModalVisible(false);
    }
  };

  const handleModalNo = () => {
    if (active) {
      setActive(false);
      setModalVisible(false);
    } else {
      setModalVisible(false);
    }
  };

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.headTitle}>
        <Text style={styles.headTitleText}>{tab}</Text>
        {tab === "Dashboard" && (
          <Pressable
            style={[styles.activeBtn, active && { borderColor: "#06FC1F" }]}
            onPress={() => setModalVisible(true)}
          >
            {active && (
              <View
                style={[styles.activeDot, { backgroundColor: "#06FC1F" }]}
              />
            )}
            <Text style={[styles.activeText, active && { color: "#06FC1F" }]}>
              {active ? "active" : "inactive"}
            </Text>
          </Pressable>
        )}
      </View>

      <View style={{ flex: 1, marginBottom: 60 }}>{renderTabs()}</View>

      <BottomNav tab={tab} handleTab={handleTab} />

      <Modal
        animationType="slide"
        transparent
        statusBarTranslucent
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <Pressable
          style={styles.modalFill}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Pressable style={[styles.modalView, medium]}>
            <Text style={[styles.modalTitle, !active && { marginBottom: 30 }]}>
              Go {active ? "inactive" : "active"}
            </Text>
            {active && (
              <Text style={styles.modalText}>
                Can you still complete your existing orders?
              </Text>
            )}

            <View style={styles.modalBtnWidget}>
              <Pressable style={styles.modalBtn} onPress={handleModalNo}>
                <Text style={styles.modalBtnText}>No</Text>
              </Pressable>
              <Pressable
                style={[styles.modalBtn, { backgroundColor: darkPink }]}
                onPress={handleModalYes}
              >
                <Text style={styles.modalBtnText}>Yes</Text>
              </Pressable>
            </View>
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
};

export default HomeWaver;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  headTitle: {
    marginTop: 65,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingBottom: 10,
  },
  headTitleText: {
    fontFamily: "LatoBold",
    fontSize: 20,
  },
  activeBtn: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "rgba(0, 0, 0, .5)",
  },
  activeDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    marginEnd: 5,
  },
  activeText: {
    fontFamily: "Prociono",
    fontSize: 16,
    color: "rgba(0, 0, 0, .5)",
  },
  modalFill: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, .3)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "white",
    width: "80%",
    borderRadius: 10,
    padding: 15,
  },
  modalTitle: {
    fontFamily: "LatoBold",
    fontSize: 18,
    marginBottom: 10,
  },
  modalText: {
    fontFamily: "LatoRegular",
    fontSize: 14,
    opacity: 0.7,
    marginBottom: 20,
  },
  modalBtnWidget: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modalBtn: {
    width: 80,
    paddingVertical: 7,
    borderRadius: 10,
    backgroundColor: "rgba(0, 0, 0, .5)",
  },
  modalBtnText: {
    textAlign: "center",
    fontFamily: "Prociono",
    fontSize: 16,
    color: "white",
  },
});
