import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Picker } from "@react-native-picker/picker";
import theme from "../../../assets/constants/theme";

const PickerField = ({ data, value, field, updateField }) => {
  const { darkPink } = theme.COLORS;

  const label = () => {
    switch (field) {
      case "school":
        return "School";

      case "gender":
        return "Gender";

      case "meal":
        return "Meal";

      default:
        break;
    }
  };

  const topValue = () => {
    switch (field) {
      case "school":
        return "Choose your school";

      case "gender":
        return "Choose your gender";

      case "meal":
        return "Select a meal";

      default:
        break;
    }
  };

  const renderData = data.map((item, index) => (
    <Picker.Item
      key={item.id || index}
      label={item.name || item}
      value={item.name || item}
      style={styles.pickerItem}
    />
  ));

  return (
    <View style={styles.container}>
      <View style={styles.labelBox}>
        <Text style={styles.labelText}>{label()}</Text>
      </View>
      <View style={[styles.pickerWrapper]}>
        <Picker
          selectedValue={value}
          onValueChange={(data, genderIndex) => updateField(field, data)}
          style={[styles.picker, { margin: 0, padding: 0 }]}
          dropdownIconColor={darkPink}
          // mode="dropdown"
        >
          <Picker.Item label={topValue} value="" style={styles.pickerItem} />
          {renderData}
        </Picker>
      </View>
    </View>
  );
};

export default PickerField;

const styles = StyleSheet.create({
  container: {
    height: 63,
    justifyContent: "center",
    marginBottom: 15,
  },
  labelBox: {
    position: "absolute",
    paddingHorizontal: 5,
    top: 0,
    left: 40,
    backgroundColor: "white",
    zIndex: 1,
  },
  labelText: {
    fontFamily: "LatoBold",
  },
  pickerWrapper: {
    width: "90%",
    maxHeight: 45,
    flexDirection: "row",
    borderWidth: 2,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  picker: {
    flex: 1,
    color: "black",
  },
  pickerItem: {
    fontFamily: "Prociono",
    fontSize: 14,
  },
});
