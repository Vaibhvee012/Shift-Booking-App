# Shift Booking App

A React Native mobile application that allows users to view, book, and cancel work shifts. The application is built using Expo, TypeScript, React Navigation, and Axios, and integrates with the provided Shift Booking API.

## Features

- View all available shifts
- Book available shifts
- Cancel booked shifts
- View personal booked shifts
- Bottom tab navigation
- Real-time API integration
- Loading indicators
- Clean and responsive UI
- TypeScript support

## Tech Stack

- React Native
- Expo
- TypeScript
- React Navigation
- Axios

## Project Structure

```
src/
├── api/
│   └── shiftApi.ts
├── components/
│   └── ShiftCard.tsx
├── navigation/
│   └── BottomTabs.tsx
├── screens/
│   ├── AvailableShiftsScreen.tsx
│   └── MyShiftsScreen.tsx
├── styles/
│   └── theme.ts
└── types/
    └── Shift.ts
```

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/shift-booking-app.git
cd shift-booking-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Application

```bash
npx expo start
```

## Running the Mock API

The application uses the provided Shift Booking API.

Navigate to the API project folder:

```bash
cd react-native-assignment
npm install
npm start
```

Make sure the API server is running before launching the mobile application.

## Screens

### My Shifts
- Displays all booked shifts
- Allows users to cancel booked shifts
- Shows total booked shifts count

### Available Shifts
- Displays all available shifts
- Allows users to book shifts
- Automatically refreshes after booking or cancellation

## Data Model

Each shift contains:

```ts
{
  id: string;
  area: "Helsinki" | "Tampere" | "Turku";
  booked: boolean;
  startTime: number;
  endTime: number;
}
```

## Author

**Vaibhvee Prakash**

LinkedIn: https://www.linkedin.com/in/vaibhvee-prakash-901ba7289/

GitHub: https://github.com/Vaibhvee012