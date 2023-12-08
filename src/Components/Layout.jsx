// import { Box, Text } from "@chakra-ui/react";
// import axios from "axios";
// import React, { useEffect, useState } from "react";

// const SeatAvailabilityComponent = () => {
//   const [availableLowerSeats, setAvailableLowerSeats] = useState([]);
//   const [availableUpperSeats, setAvailableUpperSeats] = useState([]);
//   const [seat, setSeat] = useState([]);
//   const [lower, setLower] = useState([]);
//   const [upper, setUpper] = useState([]);

//   const fetch = async () => {
//     const res = await axios.post(
//       "https://rightpayonline.com/bus/getSeatingLayout",
//       {
//         sourceId: "3",
//         destinationId: "5",
//         doj: "2023-12-30",
//         serviceId: "1769344333",
//         operatorId: "115551",
//         layoutId: "0",
//         seatFare: 1666,
//         isSingleLady: 0,
//         concessionId: 0,
//       }
//     );
//     // console.log(res.data.seatlayout.TotalSeatList
//     //   );
//     setLower(res.data.seatlayout.TotalSeatList.lowerdeck_seat_nos);
//     setUpper(res.data.seatlayout.TotalSeatList.upperdeck_seat_nos);
//   };

//   useEffect(() => {
//     // Simulating the JSON response
//     fetch();

//     // Extract available seats logic
//     // const extractAvailableSeats = (seatArray) => {
//     //   console.log(seatArray);
//     //   return seatArray
//     //     .filter((seatEntry) => seatEntry.split(", ")[5] === "Y")
//     //     .map((seatInfo) => seatInfo.split(", ")[0]);
//     // };

//     // // Extract available seats for lower and upper decks
//     // const availableLowerSeats = extractAvailableSeats(lower);
//     // const availableUpperSeats = extractAvailableSeats(upper);

//     // // Update state with available seats
//     // setAvailableLowerSeats(availableLowerSeats);
//     // setAvailableUpperSeats(availableUpperSeats);
//   }, []); // useEffect will run only once when the component mounts
//   console.log(lower);
//   const getBackgroundColor = (status) => (status === "N" ? "red" : "green");
//   return (
//     <Box>
//       <Text fontSize="xl" fontWeight="bold">
//         Lower Berth Seats:
//       </Text>
//       <Box display="flex" flexWrap="wrap">
//         {lower.map((seatEntry, index) => {
//           const [seatNumber, row, column, type, status, gender] =
//             seatEntry.split(", ");

//           return (
//             <Box
//               key={index}
//               w="50px" // Adjust as per your layout
//               h="50px" // Adjust as per your layout
//               bg={getBackgroundColor(status)}
//               borderWidth="1px" // Add borders for better visibility
//               margin="5px" // Add margin for better spacing
//               display="flex"
//               alignItems="center"
//               justifyContent="center">
//               {seatNumber}
//             </Box>
//           );
//         })}
//       </Box>
//     </Box>
//   );
// };

// export default SeatAvailabilityComponent;
