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

interface AccountProps {}

interface FormValues {
  email: string;
  name: string;
}

const Account: React.FC<AccountProps> = (props) => {
  return (
    <Container
      maxW="container.xl"
      w="full"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Stack maxW="343px" w="full" alignItems="center" justifyContent="center">
        <Box bg="icon.icon-orange" height={140} width={140}>
          <Image
            src="/img/kuala_setting_up.png"
            height={140}
            width={140}
            alt="kuala-img"
          />
        </Box>
        <Button
          mt="3"
          textStyle="placeholder"
          textAlign="center"
          px="7px"
          py="3px"
          borderRadius={8}
          color="white"
          bg="lightblue"
          border="none"
        >
          Change
        </Button>
        <Box w="full">
          <Formik
            initialValues={{
              email: "",
              name: "",
            }}
            onSubmit={(values: FormValues) => {
              console.log(values);
            }}
          >
            <Form>
              <VStack spacing="3" mt="4" width="343px">
                <Field name="name">
                  {({ field }: any) => (
                    <FormControl>
                      <FormLabel textStyle="formlabel">Your Name</FormLabel>
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
                          placeholder="Micheal Dundee"
                          rounded="6px"
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
                              backgroundColor="icon-orange"
                            >
                              <Image
                                src="/icons/star.svg"
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
                          placeholder="m.dundee@crocodile.au"
                          rounded="6px"
                          w="full"
                          h="full"
                          bg="white"
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
                              backgroundColor="purple"
                            >
                              <Image
                                src="/icons/round.svg"
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
              </VStack>
            </Form>
          </Formik>
          <Text textStyle="heading2" color="white" textAlign="center">
            You can’t change your E-Mail currently.
          </Text>
          <Text textStyle="heading2" color="white" textAlign="center">
            You’re signed in with [Apple / Google / E-Mail].
          </Text>
          <Text textStyle="heading2" color="white" textAlign="center">
            [(If signed in with E-Mail) Reset my Password ].
          </Text>
        </Box>

        <Button
          textStyle="btntext"
          textAlign="center"
          w="full"
          color="white"
          bg="orange"
          border="none"
        >
          Log Out
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
        <HStack>
          <HStack>
            <Text textStyle="heading2" color="white">
              User ID:
            </Text>
            <Text textStyle="heading2" color="white">
              63c28450g36bc34717611ad8
            </Text>
          </HStack>
          <Button
            mt="3"
            textStyle="placeholder"
            textAlign="center"
            h="20px"
            w="59px"
            borderRadius={8}
            color="white"
            bg="lightblue"
            border="none"
          >
            Copy
          </Button>
        </HStack>
        <Link href="/">
          <Text textDecoration="underline" color="white" textStyle="heading2">
            Delete my Account.
          </Text>
        </Link>
      </Stack>
    </Container>
  );
};

export default Account;
