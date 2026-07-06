import { Shift } from "../types/Shift";

export const mockShifts: Shift[] = [
  {
    id: "1",
    area: "Helsinki",
    booked: true,
    startTime: Date.now(),
    endTime: Date.now() + 3600000,
  },
  {
    id: "2",
    area: "Tampere",
    booked: false,
    startTime: Date.now() + 86400000,
    endTime: Date.now() + 90000000,
  },
  {
    id: "3",
    area: "Turku",
    booked: false,
    startTime: Date.now() + 172800000,
    endTime: Date.now() + 176400000,
  },
];