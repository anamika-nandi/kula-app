"use client";
import React from "react";
import {
  HStack,
  Stack,
  VStack,
  Button,
  Box,
  Text,
  Center,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import Link from "next/link";
import Image from "next/image";
import IconInput from "@/components/input/IconInput";
import { Nav } from "@/components/Nav";

interface AccountProps {}

interface FormValues {
  email: string;
  name: string;
}

const Account: React.FC<AccountProps> = (props) => {
  return (
    <>
      <Nav
        page="account"
        breadcrumb={[
          {
            href: "/account",
            label: "Your Account",
          },
        ]}
      />
      <Center h="calc(100vh - 180px)">
        <Stack
          maxW="343px"
          w="full"
          alignItems="center"
          justifyContent="center"
        >
          <Box bg="icon.orange" height={140} width={140}>
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
            bg="light_blue"
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
                  <IconInput
                    name="name"
                    placeholder="Name"
                    label="Your Name"
                    iconSrc="/icons/star.svg"
                    iconBgColor="orange"
                    labelProps={{ color: "white" }}
                  />

                  <IconInput
                    name="email"
                    placeholder="name@gmail.com"
                    label="E-Mail"
                    iconSrc="/icons/round.svg"
                    iconBgColor="purple"
                    inputType="email"
                    labelProps={{ color: "white" }}
                  />
                </VStack>
              </Form>
            </Formik>
            <Text textStyle="heading2" color="white" textAlign="center" mt="3">
              You can’t change your E-Mail currently.
            </Text>
            <Text
              textStyle="heading2"
              color="white"
              textAlign="center"
              mt="10px"
            >
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

          <HStack mt="8" mb="18px" w="full" justifyContent="space-between">
            <HStack alignItems="center" justifyContent="space-between">
              <Text textStyle="heading2" color="white">
                User ID:
              </Text>
              <Text textStyle="heading2" color="white">
                63c28450g36bc34717611ad8
              </Text>
            </HStack>
            <Button
              textStyle="placeholder"
              textAlign="center"
              h="20px"
              w="59px"
              borderRadius={8}
              color="white"
              bg="light_blue"
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
      </Center>
    </>
  );
};

export default Account;
