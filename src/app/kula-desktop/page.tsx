"use client";
import React from "react";
import {
  Container,
  HStack,
  Stack,
  Button,
  Text,
  Center,
  VStack,
} from "@chakra-ui/react";

interface CreateNewAppProps {}

interface FormValues {
  name: string;
  websiteName: string;
  descriptionText: string;
}

const CreateNewApp: React.FC<CreateNewAppProps> = (props) => {
  return (
    <Center h="100vh">
      <HStack display="flex" alignItems="center" justifyContent="center">
        <VStack maxW="335px" w="full" gap="45px">
          <Text textStyle="heading">Are you on Desktop?</Text>
          <Text
            color="white"
            textAlign="center"
            fontSize="base"
            fontFamily="body"
            fontWeight="medium"
          >
            Make your screen bigger!
          </Text>
          <Button
            textStyle="btntext"
            textAlign="center"
            fontWeight="semibold"
            mt="5"
            w="full"
            h="50px"
            color="white"
            border="2px solid white"
          >
            or download kula to your phone
          </Button>
        </VStack>
      </HStack>
    </Center>
  );
};

export default CreateNewApp;
