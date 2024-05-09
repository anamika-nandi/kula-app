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
  Icon,
} from "@chakra-ui/react";
import Image from "next/image";
import { GoArrowUpLeft } from "react-icons/go";
import { HiOutlineArrowDownRight } from "react-icons/hi2";
import Link from "next/link";
export interface OnlyDesktopProps {
  children: React.ReactNode;
}

export function OnlyDesktop(props: OnlyDesktopProps) {
  const { children } = props;

  return (
    <>
      <Box h="100vh" display={{ base: "flex", lg: "none" }}>
        <Stack pos="absolute" top="0" left="0">
          <Box>
            <Image
              src="/img/kula_logo.png"
              width={177}
              height={87}
              alt="kula logo"
            />
          </Box>
          <Box pos="absolute" top="24" left="8">
            <Icon as={GoArrowUpLeft} boxSize="10" color="white" />
          </Box>
        </Stack>
        <Center w="full">
          <HStack display="flex" alignItems="center" justifyContent="center">
            <VStack maxW="335px" w="full" gap="45px">
              <Text
                textStyle="heading"
                textColor="white"
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
          pos="absolute"
          bottom="8"
          right="8"
        >
          <Icon as={HiOutlineArrowDownRight} boxSize="10" color="white" />
        </Stack>
      </Box>
      <Box display={{ base: "none", lg: "block" }}>
        {children}

        <Center justifyContent="end" p="4" as="footer" gap="4">
          <Text fontSize="lg" color="white" textAlign="center">
            <Link href="/privacy">
              <Text as="span" fontFamily="body" textDecor="underline" px="1">
                Privacy
              </Text>
            </Link>
            <Link href="/terms">
              <Text as="span" fontFamily="body" textDecor="underline" px="1">
                Terms
              </Text>
            </Link>
            <Link href="/imprint">
              <Text as="span" fontFamily="body" textDecor="underline" px="1">
                Imprint
              </Text>
            </Link>
          </Text>
        </Center>
      </Box>
    </>
  );
}
