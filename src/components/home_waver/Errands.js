import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import theme from "../../../assets/constants/theme";
import { AntDesign, FontAwesome6 } from "@expo/vector-icons";
import errandData from "../../helper/errandData";
import { saveAsyncToken } from "../../helper/AsyncStorage";
import { useNavigation } from "@react-navigation/native";

const { darkPink } = theme.COLORS;

const Errands = () => {
  const navigation = useNavigation();

  const [data, updateData] = useState([]);

  useEffect(() => {
    updateData(errandData);
  }, []);

  const handleView = (index) => {
    const errand = data[index - 1];
    saveAsyncToken("errand", JSON.stringify(errand));

    navigation.navigate("RequestWaver");
  };

  return (
    <View style={{ flex: 1, marginTop: 15 }}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <ErrandCell
            name={item.name}
            location={item.location}
            category={item.category}
            index={item.id}
            handleView={handleView}
          />
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const ErrandCell = ({
  imageUrl,
  name,
  location,
  category,
  index,
  handleView,
}) => {
  return (
    <View style={[styles.cellBlock, { borderEndColor: darkPink }]}>
      <View style={[styles.rowSubFlex, { flex: 1, alignItems: "flex-start" }]}>
        <Image
          source={require("../../../assets/icons/propic.jpg")}
          style={styles.cellImage}
        />
        <View>
          <Text numberOfLines={1} style={styles.cellName}>
            {name}
          </Text>
          <View style={[styles.rowSubFlex, { marginBottom: 7 }]}>
            <FontAwesome6 name="location-arrow" size={15} color={darkPink} />
            <Text numberOfLines={1} style={styles.cellLocation}>
              {location}
            </Text>
          </View>
          <View style={[styles.rowSubFlex, { marginBottom: 7 }]}>
            <View
              style={[styles.cellCategoryBox, { backgroundColor: darkPink }]}
            >
              <Text style={styles.cellCategoryText}>{category}</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.cellRight}>
        <Pressable
          style={[styles.actionBtn, { borderColor: darkPink }]}
          onPress={() => handleView(index)}
        >
          <AntDesign name="arrowright" size={20} color={darkPink} />
        </Pressable>
      </View>
    </View>
  );
};

export default Errands;

const styles = StyleSheet.create({
  rowSubFlex: {
    flexDirection: "row",
    alignItems: "center",
  },
  cellBlock: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingStart: 15,
    paddingEnd: 5,
    paddingVertical: 10,
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderRadius: 10,
    borderEndWidth: 4,
    marginBottom: 30,
  },
  cellImage: {
    width: 50,
    height: 50,
    borderRadius: 20,
    marginEnd: 10,
  },
  cellName: {
    fontFamily: "Prociono",
    fontSize: 16,
    marginBottom: 7,
  },
  cellLocation: {
    fontFamily: "LatoRegular",
    fontSize: 14,
    marginStart: 5,
  },
  cellCategoryBox: {
    padding: 5,
    borderRadius: 5,
    marginEnd: 10,
  },
  cellCategoryText: {
    fontFamily: "LatoRegular",
    fontSize: 14,
    color: "white",
  },
  cellFee: {
    fontFamily: "LatoBold",
    fontSize: 14,
  },
  cellStore: {
    fontFamily: "Prociono",
    fontSize: 12,
    opacity: 0.7,
  },
  cellRight: {
    width: 150,
  },
  actionBtn: {
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderWidth: 1,
    borderRadius: 5,
    alignSelf: "flex-end",
  },
  contactBtn: {
    marginStart: 5,
    flexDirection: "row",
    alignItems: "center",
    padding: 4,
    borderRadius: 5,
  },
  contactText: {
    fontFamily: "LatoRegular",
    fontSize: 12,
    color: "white",
    marginStart: 3,
  },
});
