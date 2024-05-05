"use client";
import React from "react";
import { Container, HStack, Stack, Button, Box, Text } from "@chakra-ui/react";
import Image from "next/image";

interface AppNameProps {}

interface FormValues {
  name: string;
  websiteName: string;
  descriptionText: string;
}

const AppName: React.FC<AppNameProps> = (props) => {
  return (
    <Container maxW="container.xl">
      <HStack
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        alignItems="flex-start"
        justifyContent="center"
      >
        <Stack
          maxW="335px"
          w="full"
          gap="3"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            width="140px"
            height="140px"
            borderRadius="32px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            backgroundColor="purple"
          >
            <Image src="/icons/plus.svg" height={62} width={80} alt="icon" />
          </Box>
          <Text textStyle="heading" mt="5" color="white">
            My App Name 1
          </Text>
          <Stack>
            <Text
              textStyle="btntext"
              lineHeight="22px"
              letterSpacing="-0.16px"
              color="white"
            >
              1. Download the kula app to your phone
            </Text>
            <Text
              textStyle="btntext"
              lineHeight="22px"
              letterSpacing="-0.16px"
              color="white"
            >
              2. Sign in with the same Account
            </Text>
            <Text
              textStyle="btntext"
              lineHeight="22px"
              letterSpacing="-0.16px"
              color="white"
            >
              3. Preview, edit & manage your App
            </Text>
          </Stack>

          <Button
            mt="3"
            textStyle="heading2"
            textAlign="center"
            px="8px"
            py="4px"
            borderRadius={8}
            color="white"
            bg="lightblue"
            border="none"
          >
            Copy Download Link
          </Button>
        </Stack>

        <Stack
          w="340px"
          minH="547px"
          h="full"
          bg="lightblue"
          alignItems="center"
          px="46px"
        >
          <Box>
            <Image
              src="/img/kuala_waking_up_transparent.png"
              height={440}
              width={578}
              alt="kuala-img"
            />
          </Box>
          <Box>
            <Image
              src="/icons/waking.svg"
              height={60}
              width={60}
              alt="waking"
            />
          </Box>
          <Text textStyle="heading3" color="white" textAlign="center">
            We’re waking our AI Assistant up…
          </Text>
          <Text
            textStyle="btntext"
            color="white"
            letterSpacing="-0.16px"
            textAlign="center"
          >
            Your app is ready in 1-2 minutes
          </Text>
        </Stack>
      </HStack>
    </Container>
  );
};

export default AppName;
