"use client";
import React from "react";
import {
  Container,
  HStack,
  Stack,
  Button,
  Box,
  Text,
  Progress,
  Flex,
  Grid,
} from "@chakra-ui/react";
import Image from "next/image";
import { FaRegCopy } from "react-icons/fa";
interface AppNameProps {}

interface FormValues {
  name: string;
  websiteName: string;
  descriptionText: string;
}

const AppName: React.FC<AppNameProps> = (props) => {
  return (
    <Grid>
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        alignItems="flex-start"
        mx="auto"
        gap="76px"
      >
        <Stack
          maxW="335px"
          w="full"
          gap="0px"
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
          <Stack mt="5">
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
          <Box my="5" borderRadius="8px">
            <Image
              src="/img/kuala_waking_up_transparent.png"
              height={260}
              width={260}
              alt="kuala-img"
            />
          </Box>
          <Button
            textStyle="heading2"
            textAlign="center"
            px="8px"
            h="25px"
            borderRadius={8}
            color="white"
            bg="lightblue"
            border="none"
            leftIcon={
              <Box>
                <FaRegCopy />
              </Box>
            }
          >
            <Box> Copy Download Link</Box>
          </Button>
        </Stack>

        <Stack
          w="340px"
          minH="547px"
          h="full"
          bg="lightblue"
          alignItems="center"
          px="11"
          borderRadius="16px"
          position="relative"
          overflow="hidden"
        >
          <Box position="absolute" top="0" w="full">
            <Progress colorScheme="green" size="sm" value={20} w="full" />
          </Box>
          <Box>
            <Image
              src="/img/kuala_waking_up_transparent.png"
              height={192}
              width={248}
              alt="kuala-img"
            />
          </Box>
          <Box mt="30px">
            <Image
              src="/icons/waking.svg"
              height={60}
              width={60}
              alt="waking"
            />
          </Box>
          <Text textStyle="heading3" color="white" textAlign="center" mt="3">
            We’re waking our AI Assistant up…
          </Text>
          <Text
            textStyle="btntext"
            color="white"
            letterSpacing="-0.16px"
            textAlign="center"
            mt="71px"
          >
            Your app is ready in 1-2 minutes
          </Text>
        </Stack>
      </Flex>
    </Grid>
  );
};

export default AppName;
