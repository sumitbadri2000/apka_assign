// src/App.js
import React from "react";
import SearchBus from "./Components/SearchBus";
import Navbar from "./Components/Navbar";
import { Box } from "@chakra-ui/react";
import SeatAvailabilityComponent from "./Components/Layout";
// import ListBus from "./components/ListBus";
// import SeatLayoutSelection from "./components/SeatLayoutSelection";

const App = () => {
  return (
    <Box bg="rgb(196,196,196)" padding={6}>
      {/* <Navbar />
      <SearchBus /> */}
      <SeatAvailabilityComponent />
    </Box>
  );
};

export default App;
