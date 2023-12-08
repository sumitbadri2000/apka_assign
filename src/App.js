// src/App.js
import React from "react";
import SearchBus from "./Components/SearchBus";
import Navbar from "./Components/Navbar";
import { Box } from "@chakra-ui/react";
import SeatBookingSystem from "./Components/Layout";
// import ListBus from "./components/ListBus";
// import SeatLayoutSelection from "./components/SeatLayoutSelection";

const App = () => {
  return (
    <Box bg="rgb(196,196,196)" padding={6}>
      <Navbar />
      <SearchBus />
      {/* <SeatBookingSystem /> */}
    </Box>
  );
};

export default App;
