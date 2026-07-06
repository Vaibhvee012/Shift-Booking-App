import { useState, useCallback } from "react";
import {
  ScrollView,
  Text,
  View,
  ActivityIndicator,
} from "react-native";

import { useFocusEffect } from "@react-navigation/native";

import {
  getShifts,
  cancelShift,
} from "../api/shiftApi";

import { Shift } from "../types/Shift";
import ShiftCard from "../components/ShiftCard";
import { COLORS } from "../styles/theme";

export default function MyShiftsScreen() {
  const [shifts, setShifts] = useState<Shift[]>([]);
  const [loading, setLoading] = useState(true);

  const loadShifts = async () => {
    try {
      setLoading(true);

      const data = await getShifts();

      setShifts(
        data.filter((shift) => shift.booked)
      );
    } catch (error) {
      console.log("Error loading shifts:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = async (id: string) => {
    try {
      await cancelShift(id);
      loadShifts();
    } catch (error) {
      console.log("Error cancelling shift:", error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadShifts();
    }, [])
  );

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: COLORS.background,
        }}
      >
        <ActivityIndicator
          size="large"
          color={COLORS.primary}
        />
        <Text style={{ marginTop: 10 }}>
          Loading shifts...
        </Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: COLORS.background,
      }}
      contentContainerStyle={{
        padding: 16,
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          marginBottom: 20,
          color: COLORS.text,
        }}
      >
        My Shifts
      </Text>

      <View
        style={{
          backgroundColor: COLORS.primary,
          borderRadius: 18,
          padding: 20,
          marginBottom: 24,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 14,
          }}
        >
          Total Booked Shifts
        </Text>

        <Text
          style={{
            color: "white",
            fontSize: 34,
            fontWeight: "bold",
          }}
        >
          {shifts.length}
        </Text>
      </View>

      {shifts.length === 0 ? (
        <View
          style={{
            backgroundColor: "white",
            padding: 30,
            borderRadius: 16,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "600",
            }}
          >
            No booked shifts
          </Text>

          <Text
            style={{
              color: "#777",
              marginTop: 8,
            }}
          >
            Book a shift from Available Shifts
          </Text>
        </View>
      ) : (
        shifts.map((shift) => (
          <ShiftCard
            key={shift.id}
            shift={shift}
            actionText="Cancel"
            actionColor={COLORS.danger}
            onPress={() =>
              handleCancel(shift.id)
            }
          />
        ))
      )}
    </ScrollView>
  );
}