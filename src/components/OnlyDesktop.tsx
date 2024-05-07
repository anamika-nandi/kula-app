"use client";
import React from "react";
import {
  HStack,
  Button,
  Text,
  Center,
  VStack,
  Box,
  Stack,
} from "@chakra-ui/react";
import Image from "next/image";
import { GoArrowUpLeft } from "react-icons/go";
import { HiOutlineArrowDownRight } from "react-icons/hi2";
export interface OnlyDesktopProps {
  children: React.ReactNode;
}

export function OnlyDesktop(props: OnlyDesktopProps) {
  const { children } = props;

  return (
    <>
      <Box h="100vh" display={{ base: "flex", lg: "none" }}>
        <Stack>
          <Box>
            <Image
              src="/img/kula_logo.png"
              width={177}
              height={87}
              alt="kula logo"
            />
          </Box>
          <Box boxSize="22px">
            <GoArrowUpLeft />
          </Box>
        </Stack>
        <Center>
          <HStack display="flex" alignItems="center" justifyContent="center">
            <VStack maxW="335px" w="full" gap="45px">
              <Text
                textStyle="heading"
                textAlign="center"
                lineHeight="120%"
                fontSize="34px"
              >
                Are you on <br />
                Desktop?
              </Text>
              <Text
                color="white"
                textAlign="center"
                fontSize="base"
                fontFamily="body"
                fontWeight="medium"
              >
                Make your screen bigger!
              </Text>
              <Button
                textStyle="btntext"
                textAlign="center"
                fontWeight="semibold"
                mt="5"
                w="full"
                h="50px"
                color="white"
                border="2px solid white"
              >
                or download kula to your phone
              </Button>
            </VStack>
          </HStack>
        </Center>
        <Stack
          height="full"
          alignItems="flex-end"
          justifyContent="flex-end"
          boxSize="22px"
        >
          <HiOutlineArrowDownRight />
        </Stack>
      </Box>
      <Box display={{ base: "none", lg: "block" }}>{children}</Box>
    </>
  );
}
