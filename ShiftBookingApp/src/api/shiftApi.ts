import { Shift } from "../types/Shift";
import { mockShifts } from "./mockData";

let shifts = [...mockShifts];

export const getShifts = async (): Promise<Shift[]> => {
  return shifts;
};

export const bookShift = async (id: string) => {
  shifts = shifts.map((shift) =>
    shift.id === id ? { ...shift, booked: true } : shift
  );

  return shifts.find((shift) => shift.id === id);
};

export const cancelShift = async (id: string) => {
  shifts = shifts.map((shift) =>
    shift.id === id ? { ...shift, booked: false } : shift
  );

  return shifts.find((shift) => shift.id === id);
};