import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Center,
  CircularProgress,
  Flex,
  Heading,
  Input,
  Spinner,
  Text,
} from "@chakra-ui/react";

const SearchBus = () => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [doj, setDoj] = useState("");
  const [nobus, setNoBus] = useState(false);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setDoj("");
    setDestination("");
    setSource("");
    const data = {
      sourceId: source,
      destinationId: destination,
      doj: doj,
    };
    setNoBus(true);
    setLoading(true);
    try {
      const response = await axios.post(
        "https://rightpayonline.com/bus/getAvailableServices",
        data
      );
      setLoading(false);
      if (response.data.status === "fail") {
        setServices([]);
        console.log(response.data);
      } else if (response.data.status === "success") {
        setServices(response.data.services);
      }
    } catch (error) {
      console.error("Error searching for buses:", error);
    }
  };

  return (
    <Box>
      <Box
        bgImage={`url('https://blog.travelcarma.com/wp-content/uploads/2018/08/bus-booking-1-1.jpg')`}
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        h="480px"
        pt="100px"
        textAlign="center"
        width="90%"
        margin="auto">
        <Center color="black">
          <Flex
            direction="column"
            w={{ base: "100%", sm: "70%", md: "50%", xl: "30%" }}
            ml={{ base: "0%", sm: "0%", md: "30%", xl: "60%" }}
            gap="20px"
            textAlign="center">
            <Heading as="h2">Search Bus</Heading>
            <Input
              placeholder="Start From"
              type="number"
              value={source}
              onChange={(e) => setSource(e.target.value)}
            />
            <Input
              placeholder="Destination"
              type="number"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
            <Input
              placeholder="Date of Journey"
              type="date"
              value={doj}
              onChange={(e) => setDoj(e.target.value)}
            />
            <Button
              color="white"
              bg="rgb(216, 78, 85)"
              fontWeight="bold"
              onClick={handleSearch}
              _hover={{ bg: "red" }}>
              Search Results
            </Button>
          </Flex>
        </Center>
      </Box>
      {loading ? (
        <Center margin={10}>
          <Spinner
            thickness="6px"
            speed="0.85s"
            emptyColor="gray.400"
            color="blue.500"
            size="xl"
          />
        </Center>
      ) : (
        nobus && (
          <Box textAlign="center" mt="10px">
            <Heading as="h2" mb="20px">
              Bus Lists
            </Heading>
            {services.length !== 0 ? (
              <Flex direction="column" align="center">
                {services?.map((bus) => (
                  <Box
                    key={bus.id}
                    border="1px solid black"
                    w="90%"
                    m="auto"
                    mb="20px"
                    p="10px"
                    _hover={{ bg: "rgb(196,196,208)" }}>
                    <Flex wrap="wrap" justify="space-between" textAlign="start">
                      <Box width={{ base: "100%", md: "48%" }} p="5px">
                        <Heading as="h5" size="sm" mb="2">
                          Agent Name
                        </Heading>
                        <Text>{bus.Traveler_Agent_Name}</Text>
                      </Box>
                      <Box width={{ base: "100%", md: "48%" }} p="5px">
                        <Heading as="h5" size="sm" mb="2">
                          Service Name
                        </Heading>
                        <Text>{bus.Service_Name}</Text>
                      </Box>
                      <Box width={{ base: "100%", md: "48%" }} p="5px">
                        <Heading as="h5" size="sm" mb="2">
                          Price
                        </Heading>
                        <Text>{bus.Fare}</Text>
                      </Box>
                      <Box width={{ base: "100%", md: "48%" }} p="5px">
                        <Heading as="h5" size="sm" mb="2">
                          Available Seats
                        </Heading>
                        <Text>{bus.available_seats}</Text>
                      </Box>
                      <Box width={{ base: "100%", md: "48%" }} p="5px">
                        <Heading as="h5" size="sm" mb="2">
                          Bus Type
                        </Heading>
                        <Text>{bus.bus_type}</Text>
                      </Box>
                      <Box width={{ base: "100%", md: "48%" }} p="5px">
                        <Heading as="h5" size="sm" mb="2">
                          Start Time
                        </Heading>
                        <Text>{bus.Start_time}</Text>
                      </Box>
                      <Box width={{ base: "100%", md: "48%" }} p="5px">
                        <Heading as="h5" size="sm" mb="2">
                          Travel Time
                        </Heading>
                        <Text>{bus.TravelTime}</Text>
                      </Box>
                      <Box width={{ base: "100%", md: "48%" }} p="5px">
                        <Button
                          Button
                          color="white"
                          bg="rgb(216, 78, 85)"
                          fontWeight="bold"
                          onClick={handleSearch}
                          _hover={{ bg: "red" }}>
                          Seat Book
                        </Button>
                      </Box>
                    </Flex>
                  </Box>
                ))}
              </Flex>
            ) : (
              <Heading size={"sm"}>
                No services were found in this route
              </Heading>
            )}
          </Box>
        )
      )}
    </Box>
  );
};

export default SearchBus;
