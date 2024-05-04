"use client";
import React from "react";
import {
  Container,
  HStack,
  Stack,
  Button,
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  VStack,
  Textarea,
} from "@chakra-ui/react";
import Image from "next/image";
import { Formik, Form, Field } from "formik";

interface CreateNewAppProps {}

interface FormValues {
  name: string;
  websiteName: string;
  descriptionText: string;
}

const CreateNewApp: React.FC<CreateNewAppProps> = (props) => {
  return (
    <Container maxW="container.xl">
      <HStack display="flex" alignItems="center" justifyContent="center">
        <Stack maxW="335px" w="full" gap="45px">
          <Text
            fontFamily="Sofia Pro"
            fontSize={["24px", "28px", "34px"]}
            lineHeight={["28px", "32px", "39px"]}
            fontWeight="bold"
            color="white"
            textAlign="center"
          >
            Are you on Desktop?
          </Text>
          <Text color="white" textAlign="center" textStyle="btntext">
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
        </Stack>
      </HStack>
    </Container>
  );
};

export default CreateNewApp;
