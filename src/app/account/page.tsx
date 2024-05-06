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
      maxW="1920px"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
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
          h="25px"
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
                      <FormLabel textStyle="formlabel" color="white">
                        Name
                      </FormLabel>
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
                          pl="50px"
                          textStyle="placeholder"
                          bg="white"
                          border="1px solid #D0D0D6"
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
                      <FormLabel textStyle="formlabel" color="white">
                        E-Mail
                      </FormLabel>
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
                          pl="50px"
                          minH="50px"
                          border="1px solid #D0D0D6"
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
          <Text textStyle="heading2" color="white" textAlign="center" mt="3">
            You can’t change your E-Mail currently.
          </Text>
          <Text textStyle="heading2" color="white" textAlign="center" mt="10px">
            You’re signed in with [Apple / Google / E-Mail].
          </Text>
          <Text textStyle="heading2" color="white" textAlign="center" mt="3">
            [(If signed in with E-Mail)
            <Text as="span" textDecor="underline" px="1">
              Reset my Password
            </Text>
            ].
          </Text>
        </Box>

        <Button
          textStyle="btntext"
          textAlign="center"
          w="full"
          color="white"
          bg="orange"
          border="none"
          mt="5"
        >
          Log Out
        </Button>

        <HStack mt="8" alignItems="center" justifyContent="center" mb="18px">
          <HStack alignItems="center" justifyContent="space-between">
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
