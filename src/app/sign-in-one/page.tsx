"use client";
import React from "react";
import {
  Container,
  HStack,
  Stack,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Text,
  InputLeftElement,
  InputGroup,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import Link from "next/link";
import Image from "next/image";

interface SignInProps {}

interface FormValues {
  email: string;
  password: string;
}

const SignIn: React.FC<SignInProps> = (props) => {
  return (
    <Container maxW="container.xl" backgroundColor="#23AAE3">
      <HStack
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent="center"
      >
        <Stack py="3" px="4" maxW="335px" w="full">
          <Text textStyle="heading" color="white" textAlign="center">
            Create your kula account and make an app
          </Text>
          <Button
            textStyle="btntext"
            textAlign="center"
            w="full"
            bg="black"
            border="none"
            leftIcon={
              <Image
                src="/icons/apple.svg"
                height={22}
                width={18}
                alt="apple"
              />
            }
          >
            Sign up with Apple
          </Button>
          <Button
            textStyle="btntext"
            textAlign="center"
            w="full"
            bg="white"
            border="none"
            leftIcon={
              <Image
                src="/icons/google.svg"
                height={22}
                width={22}
                alt="google"
              />
            }
          >
            Sign up with Google
          </Button>
          <Button
            textStyle="btntext"
            textAlign="center"
            w="full"
            bg="white"
            border="none"
            leftIcon={
              <Image
                src="/icons/google.svg"
                height={22}
                width={22}
                alt="google"
              />
            }
          >
            Sign up with Email
          </Button>

          <Text textStyle="heading2" color="white" textAlign="center">
            By singning in you agree to our{" "}
            <Text as="span" textDecor="underline">
              Privacy
            </Text>{" "}
            &
            <Text as="span" textDecor="underline">
              Terms
            </Text>
            .
          </Text>
        </Stack>
        <Box>
          <Image
            src="/img/kuala.png"
            height={440}
            width={578}
            alt="kuala-img"
          />
        </Box>
      </HStack>
    </Container>
  );
};

export default SignIn;
