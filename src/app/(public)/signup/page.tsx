"use client";
import React from "react";
import { HStack, Stack, Text, useDisclosure, Center } from "@chakra-ui/react";
import Image from "next/image";
import IconButton from "@/components/button/IconButton";
import { CustomModal } from "@/components/CustomModal";
import SignupModal from "./ui/signup-modal";
import { Nav } from "@/components/Nav";

interface SignupProps {}

const Signup: React.FC<SignupProps> = (props) => {
  const { onOpen, isOpen, onClose } = useDisclosure();
  return (
    <>
      <Nav
        page="signup"
        breadcrumb={[
          {
            href: "/signup",
            label: "Sign up",
          },
        ]}
      />
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
                By signin in you agree to our{" "}
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
          <Image
            src="/img/kuala.png"
            height={440}
            width={578}
            alt="kuala-img"
          />
        </HStack>
        <CustomModal isOpen={isOpen} onClose={onClose}>
          <SignupModal />
        </CustomModal>
      </Center>
    </>
  );
};

export default Signup;
