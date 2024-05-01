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
            Login & Manage your App
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
            Sign in with Apple
          </Button>
          <Button
            textStyle="btntext"
            w="full"
            bg="white"
            color="black"
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
            Sign in with Google
          </Button>
          <Text textStyle="heading2" color="white" textAlign="center">
            or
          </Text>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={(values: FormValues) => {
              console.log(values);
            }}
          >
            <Form>
              <VStack spacing="3" mt="4">
                <Field name="email">
                  {({ field }: any) => (
                    <FormControl>
                      <FormLabel textStyle="formlabel">E-Mail</FormLabel>
                      <InputGroup
                        display="flex"
                        alignItems="center"
                        w="full"
                        h="full"
                        minH="50px"
                        bg="white"
                      >
                        <Input
                          isRequired
                          {...field}
                          placeholder="name@mail.com"
                          rounded="6px"
                          w="full"
                          h="full"
                          minH="50px"
                          textStyle="placeholder"
                        />
                        <InputLeftElement
                          height="full"
                          pointerEvents="none"
                          children={
                            <Box
                              width={34}
                              height={34}
                              borderRadius={4}
                              display="flex"
                              alignItems="center"
                              justifyContent="center"
                              backgroundColor="button.purple"
                            >
                              <Image
                                src="/icons/email.svg"
                                height={17}
                                width={22}
                                alt="email"
                              />
                            </Box>
                          }
                        />
                      </InputGroup>
                    </FormControl>
                  )}
                </Field>
                <Field name="password">
                  {({ field }: any) => (
                    <FormControl>
                      <FormLabel textStyle="formlabel">Password</FormLabel>
                      <InputGroup
                        display="flex"
                        alignItems="center"
                        w="full"
                        h="full"
                        minH="50px"
                        bg="white"
                        border="none"
                      >
                        <Input
                          isRequired
                          {...field}
                          placeholder="..........................."
                          rounded="6px"
                          w="full"
                          h="full"
                          minH="50px"
                          textStyle="placeholder"
                        />
                        <InputLeftElement
                          height="full"
                          pointerEvents="none"
                          children={
                            <Box
                              width={34}
                              height={34}
                              borderRadius={4}
                              display="flex"
                              alignItems="center"
                              justifyContent="center"
                              backgroundColor="gray"
                            >
                              <Image
                                src="/icons/password.svg"
                                height={19}
                                width={13}
                                alt="password"
                              />
                            </Box>
                          }
                        />
                      </InputGroup>
                      <Text
                        textDecoration="underline"
                        textAlign="end"
                        textStyle="heading2"
                        color="white"
                      >
                        Can't remeber your password?
                      </Text>
                    </FormControl>
                  )}
                </Field>

                <Button
                  type="submit"
                  fontSize="sm"
                  rounded="md"
                  border="none"
                  textAlign="center"
                  w="full"
                  bg="button.blue"
                >
                  Sign in with E-Mail
                </Button>
              </VStack>
            </Form>
          </Formik>
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
