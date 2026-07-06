import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import { Shift } from "../types/Shift";
import { COLORS } from "../styles/theme";

interface Props {
  shift: Shift;
  actionText: string;
  actionColor: string;
  onPress: () => void;
}

export default function ShiftCard({
  shift,
  actionText,
  actionColor,
  onPress,
}: Props) {
  const getAreaColor = () => {
    switch (shift.area) {
      case "Helsinki":
        return COLORS.helsinki;
      case "Tampere":
        return COLORS.tampere;
      case "Turku":
        return COLORS.turku;
      default:
        return COLORS.white;
    }
  };

  const duration =
    (shift.endTime - shift.startTime) /
    (1000 * 60 * 60);

  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: 16,
        padding: 18,
        marginBottom: 14,
        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 3,
      }}
    >
      <View
        style={{
          alignSelf: "flex-start",
          backgroundColor: getAreaColor(),
          paddingHorizontal: 10,
          paddingVertical: 5,
          borderRadius: 50,
          marginBottom: 12,
        }}
      >
        <Text
          style={{
            fontWeight: "600",
          }}
        >
          {shift.area}
        </Text>
      </View>

      <Text
        style={{
          fontSize: 16,
          fontWeight: "700",
          marginBottom: 4,
        }}
      >
        {new Date(
          shift.startTime
        ).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
        {" - "}
        {new Date(
          shift.endTime
        ).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </Text>

      <Text
        style={{
          color: COLORS.lightText,
          marginBottom: 12,
        }}
      >
        {duration} h shift
      </Text>

      <TouchableOpacity
        onPress={onPress}
        style={{
          backgroundColor: actionColor,
          paddingVertical: 12,
          borderRadius: 12,
        }}
      >
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontWeight: "700",
          }}
        >
          {actionText}
        </Text>
      </TouchableOpacity>
    </View>
  );
}