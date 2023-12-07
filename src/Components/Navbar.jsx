"use client";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Links = ["Ticket", "Boarding Pass"];

const NavLink = (props) => {
  const { children } = props;

  return (
    <Box
      as="a"
      px={3}
      py={2}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: "grey",
      }}
      href={"#"}>
      {children}
    </Box>
  );
};

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      bg="rgb(196,196,196)"
      p={4}
      width={"90%"}
      margin="auto"
      position={"sticky"}
      zIndex={2}
      top={"0"}>
      <Flex h={14} justifyContent={"space-around"} alignItems={"center"}>
        <IconButton
          size={"md"}
          color={"black"}
          bg={"white"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack
          spacing={500}
          margin={"auto"}
          alignItems={"center"}
          fontSize={{ base: "10px", sm: "10px", md: "12px", xl: "16px" }}
          fontWeight={"400"}>
          <Image
            borderRadius={50}
            src="https://static.vecteezy.com/system/resources/previews/007/794/791/non_2x/travel-bus-illustration-logo-on-light-background-free-vector.jpg"
            alt="haldiram"
            height={{ base: "40px", sm: "40px", xl: "70px" }}
            width={"fit-content"}
          />
          <HStack
            fontWeight={"500"}
            as={"nav"}
            spacing={20}
            display={{ base: "none", md: "flex" }}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
            <Flex
              mt={0}
              gap={4}
              fontSize={{ base: "10px", sm: "14px", md: "20px", xl: "30px" }}
              _hover={{ cursor: "pointer" }}></Flex>
          </HStack>
        </HStack>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
