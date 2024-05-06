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
import Image from "next/image";
import Link from "next/link";

interface SignUpProps {}

interface FormValues {
  email: string;
  password: string;
  name: string;

  confirmPassword: string;
}

const SignUp: React.FC<SignUpProps> = (props) => {
  return (
    <Box
      minH="586px"
      maxW="435px"
      boxShadow={"md"}
      borderRadius={"xl"}
      bg="white"
    >
      <Stack
        py="30px"
        px={{ base: "4px", sm: "10px", md: "20px", lg: "40px", xl: "50px" }}
      >
        <Text textStyle="heading" textAlign="center">
          Sign Up with E-Mail
        </Text>
        <HStack
          fontSize={"sm"}
          alignItems="center"
          justifyContent="center"
          textStyle="heading2"
          mt="5"
        >
          <Text>Already have an account? </Text>
          <Link href="/login" passHref>
            <Text as="a" textDecor="underline" color="form-blue">
              Log in here
            </Text>
          </Link>
        </HStack>

        <Formik
          initialValues={{
            email: "",
            password: "",
            name: "",
            confirmPassword: "",
          }}
          onSubmit={(values: FormValues) => {
            console.log(values);
          }}
        >
          <Form>
            <VStack spacing="3" mt="5">
              <Field name="name">
                {({ field }: any) => (
                  <FormControl>
                    <FormLabel textStyle="formlabel">Your Name</FormLabel>
                    <InputGroup w="full" h="full" minH="50px">
                      <Input
                        isRequired
                        {...field}
                        placeholder="Name"
                        rounded="6px"
                        pl="50px"
                        minH="50px"
                        textStyle="placeholder"
                        border=" 1px solid #D0D0D6"
                      />
                      <InputLeftElement
                        height="full"
                        mx={2}
                        pointerEvents="none"
                        children={
                          <Box
                            width={34}
                            height={34}
                            borderRadius={4}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            backgroundColor="icon-orange"
                          >
                            <Image
                              src="/icons/name.svg"
                              height={23}
                              width={23}
                              alt="name"
                            />
                          </Box>
                        }
                      />
                    </InputGroup>
                  </FormControl>
                )}
              </Field>

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
                    >
                      <Input
                        isRequired
                        {...field}
                        placeholder="name@mail.com"
                        rounded="6px"
                        w="full"
                        h="full"
                        pl="50px"
                        minH="50px"
                        border=" 1px solid #D0D0D6"
                        textStyle="placeholder"
                      />
                      <InputLeftElement
                        height="full"
                        mx={2}
                        pointerEvents="none"
                        children={
                          <Box
                            width={34}
                            height={34}
                            borderRadius={4}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            backgroundColor="purple"
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
                    >
                      <Input
                        isRequired
                        {...field}
                        placeholder="..........................."
                        rounded="6px"
                        pl="50px"
                        w="full"
                        h="full"
                        border=" 1px solid #D0D0D6"
                        minH="50px"
                        textStyle="placeholder"
                      />
                      <InputLeftElement
                        height="full"
                        mx={2}
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
                  </FormControl>
                )}
              </Field>
              <Field name="confirmPassword">
                {({ field }: any) => (
                  <FormControl>
                    <FormLabel textStyle="formlabel">Repeat Password</FormLabel>
                    <InputGroup
                      display="flex"
                      alignItems="center"
                      w="full"
                      h="full"
                      minH="50px"
                    >
                      <Input
                        isRequired
                        {...field}
                        placeholder="..........................."
                        rounded="6px"
                        pl="50px"
                        border=" 1px solid #D0D0D6"
                        w="full"
                        h="full"
                        minH="50px"
                        textStyle="placeholder"
                      />
                      <InputLeftElement
                        height="full"
                        mx={2}
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
                  </FormControl>
                )}
              </Field>

              <Button
                textAlign="center"
                bg="form-blue"
                h="50px"
                mt="5"
                opacity={1}
                w="full"
                textStyle="btntext"
              >
                Sign up with E-Mail
              </Button>
            </VStack>
          </Form>
        </Formik>
        <Text textStyle="heading2" textAlign="center" mt="4">
          By singning in you agree to our{" "}
          <Text as="span" textDecor="underline">
            Privacy
          </Text>
          &
          <Text as="span" textDecor="underline">
            Terms
          </Text>
          .
        </Text>
      </Stack>
    </Box>
  );
};

export default SignUp;
