import { useEffect, useState } from "react";
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import {
  getShifts,
  bookShift,
  cancelShift,
} from "../api/shiftApi";

import ShiftCard from "../components/ShiftCard";
import { Shift } from "../types/Shift";
import { COLORS } from "../styles/theme";

export default function AvailableShiftsScreen() {
  const [shifts, setShifts] = useState<Shift[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCity, setSelectedCity] =
    useState("All");

 const loadShifts = async () => {
  try {
    setLoading(true);

    const data = await getShifts();

    setShifts(data);
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
    loadShifts();
  }, []);

  const handleBook = async (id: string) => {
    await bookShift(id);
    loadShifts();
  };

  const handleCancel = async (id: string) => {
    await cancelShift(id);
    loadShifts();
  };

  const cities = [
    "All",
    "Helsinki",
    "Tampere",
    "Turku",
  ];

  const filteredShifts =
    selectedCity === "All"
      ? shifts
      : shifts.filter(
          (s) => s.area === selectedCity
        );
        if (loading) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator
        size="large"
        color="#004FB4"
      />
    </View>
  );
}

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: COLORS.background,
        padding: 15,
      }}
    >
      <Text
        style={{
          fontSize: 28,
          fontWeight: "bold",
          marginBottom: 15,
        }}
      >
        Available Shifts
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginBottom: 20 }}
      >
        {cities.map((city) => (
          <TouchableOpacity
            key={city}
            onPress={() =>
              setSelectedCity(city)
            }
            style={{
              paddingHorizontal: 15,
              paddingVertical: 8,
              borderRadius: 20,
              marginRight: 10,
              backgroundColor:
                selectedCity === city
                  ? COLORS.primary
                  : "white",
            }}
          >
            <Text
              style={{
                color:
                  selectedCity === city
                    ? "white"
                    : "black",
              }}
            >
              {city}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {filteredShifts.map((shift) => (
        <ShiftCard
          key={shift.id}
          shift={shift}
          actionText={
            shift.booked ? "Cancel" : "Book"
          }
          actionColor={
            shift.booked
              ? COLORS.danger
              : COLORS.success
          }
          onPress={() =>
            shift.booked
              ? handleCancel(shift.id)
              : handleBook(shift.id)
          }
        />
      ))}
    </ScrollView>
  );
}