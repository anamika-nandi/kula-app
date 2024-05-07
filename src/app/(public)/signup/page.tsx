"use client";
import React from "react";
import {
  HStack,
  Stack,
  Text,
  useDisclosure,
  Center,
} from "@chakra-ui/react";
import Image from "next/image";
import IconButton from "@/components/button/IconButton";

interface SignupProps {}

const Signup: React.FC<SignupProps> = (props) => {
  const { onOpen } = useDisclosure();
  return (
    <Center h="100vh">
      <HStack
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent="center"
      >
        <Stack maxW="335px" w="full">
          <Text textStyle="heading" color="white" textAlign="center" mb="10">
            Create your kula account and make an app
          </Text>
          <Stack rowGap="4">
            <IconButton
              bg="black"
              iconSrc="/icons/apple.svg"
              altText="Sign up with Apple"
            >
              Sign up with Apple
            </IconButton>
            <IconButton
              bg="white"
              color="black"
              iconSrc="/icons/google.svg"
              altText="Google"
            >
              Sign up with Google
            </IconButton>

            <IconButton
              bg="blue"
              iconSrc="/icons/email.svg"
              altText="Email"
              onClick={onOpen}
            >
              Sign up with Email
            </IconButton>

            <Text textStyle="heading2" color="white" textAlign="center">
              By singning in you agree to our{" "}
              <Text as="span" textDecor="underline">
                Privacy
              </Text>
              <Text as="span" mx="1">
                &
              </Text>
              <Text as="span" textDecor="underline">
                Terms
              </Text>
              .
            </Text>
          </Stack>
        </Stack>
        <Image src="/img/kuala.png" height={440} width={578} alt="kuala-img" />
      </HStack>
    </Center>
  );
};

export default Signup;
