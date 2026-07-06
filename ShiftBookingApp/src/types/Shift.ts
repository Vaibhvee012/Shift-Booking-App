export interface Shift {
  id: string;
  area: "Helsinki" | "Tampere" | "Turku";
  booked: boolean;
  startTime: number;
  endTime: number;
}