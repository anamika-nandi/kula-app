"use client";
import React from "react";
import { Container, HStack, VStack, Button, Box, Text } from "@chakra-ui/react";
import Image from "next/image";

interface MyAppsProps {}

interface FormValues {
  email: string;
  password: string;
}

const MyApps: React.FC<MyAppsProps> = (props) => {
  return (
    <Container
      maxW="1920px"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <HStack
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        alignItems="flex-start"
        justifyContent="center"
      >
        <VStack w="335px">
          <Box
            width="140px"
            height="140px"
            borderRadius="32px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            backgroundColor="purple"
          >
            <Image src="/icons/plus.svg" height={62} width={80} alt="icon" />
          </Box>
          <Text textStyle="heading" mt="5" color="white">
            My App Name 1
          </Text>
          <Button
            mt="5"
            textStyle="btntext"
            textAlign="center"
            px="7px"
            py="3px"
            borderRadius={8}
            color="white"
            bg="lightblue"
            border="none"
          >
            Preview on my Phone
          </Button>
          <Button
            mt="3"
            textStyle="btntext"
            textAlign="center"
            px="7px"
            py="3px"
            borderRadius={8}
            color="white"
            bg="lightblue"
            border="none"
          >
            Manage Billing
          </Button>
        </VStack>
        <VStack w="335px">
          <Box
            width="140px"
            height="140px"
            borderRadius="32px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            backgroundColor="lightblue"
          >
            <Image src="/icons/plus.svg" height={62} width={80} alt="icon" />
          </Box>
          <Text textStyle="heading" color="white" mt="5">
            Create a new App
          </Text>
        </VStack>
      </HStack>
    </Container>
  );
};

export default MyApps;
