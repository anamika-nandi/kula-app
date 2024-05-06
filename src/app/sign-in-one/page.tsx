"use client";
import React from "react";
import {
  Container,
  HStack,
  Stack,
  Button,
  Box,
  Text,
  Grid,
  useDisclosure,
  Modal,
  ModalContent,
  ModalCloseButton,
} from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import SignUp from "../signup/page";

interface SignInProps {}

interface FormValues {
  email: string;
  password: string;
}

const SignIn: React.FC<SignInProps> = (props) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/signup");
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Container as={Grid} placeItems="center" maxW="720px" h="100dvh">
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
            <Button
              textStyle="btntext"
              w="full"
              bg="black"
              border="none"
              justifyContent="flex-start"
              leftIcon={
                <Box mr="60px">
                  <Image
                    src="/icons/apple.svg"
                    height={22}
                    width={18}
                    alt="apple"
                  />
                </Box>
              }
            >
              <Box>Sign up with Apple</Box>
            </Button>

            <Button
              textStyle="btntext"
              w="full"
              bg="white"
              justifyContent="flex-start"
              color="black"
              border="none"
              leftIcon={
                <Box mr="60px">
                  <Image
                    src="/icons/google.svg"
                    height={22}
                    width={22}
                    alt="google"
                  />
                </Box>
              }
            >
              Sign up with Google
            </Button>
            <Button
              textStyle="btntext"
              textAlign="center"
              w="full"
              color="white"
              bg="blue"
              border="none"
              onClick={onOpen}
            >
              Sign up with Email
            </Button>

            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalContent minH="586px" maxW="435px">
                <ModalCloseButton />

                <SignUp />
              </ModalContent>
            </Modal>

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
