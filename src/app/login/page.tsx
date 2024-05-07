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
  Center,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import Image from "next/image";
import { useRouter } from "next/navigation";
import IconButton from "@/components/button/IconButton";
import IconInput from "@/components/input/IconInput";

interface LogInProps {}

interface FormValues {
  email: string;
  password: string;
}

const LogIn: React.FC<LogInProps> = (props) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/account");
  };
  return (
    <Center h="100vh">
      <HStack display="flex" flexDirection={{ base: "column", md: "row" }}>
        <Stack minW="335px" w="full" spacing={0}>
          <Text textStyle="heading" mb="10" color="white" textAlign="center">
            Login & Manage your App
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
            <Text textStyle="heading2" color="white" textAlign="center">
              or
            </Text>
          </Stack>

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
                <IconInput
                  name="email"
                  placeholder="name@gmail.com"
                  label="E-Mail"
                  iconSrc="/icons/email.svg"
                  iconBgColor="purple"
                  inputType="email"
                  labelProps={{
                    color: "white",
                  }}
                />

                <IconInput
                  name="password"
                  placeholder="................."
                  label="Password"
                  iconSrc="/icons/password.svg"
                  iconBgColor="gray"
                  inputType="password"
                  iconHeight={19}
                  iconWidth={13}
                  labelProps={{
                    color: "white",
                  }}
                />

                <IconButton
                  bg="blue"
                  iconSrc="/icons/email.svg"
                  altText="Email"
                  onClick={handleClick}
                  mt="2"
                >
                  Sign up with Email
                </IconButton>
              </VStack>
            </Form>
          </Formik>
          <Text textStyle="heading2" color="white" textAlign="center" mt={4}>
            By singning in you agree to our{" "}
            <Text as="span" textDecor="underline">
              Privacy
            </Text>{" "}
            &{" "}
            <Text as="span" textDecor="underline">
              Terms
            </Text>
            .
          </Text>
        </Stack>
        <Box minH={440} minW={578} width="full">
          <Image
            src="/img/kuala.png"
            height={440}
            width={578}
            alt="kuala-img"
          />
        </Box>
      </HStack>
    </Center>
  );
};

export default LogIn;
