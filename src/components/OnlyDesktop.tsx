"use client";
import React from "react";
import { HStack, Button, Text, Center, VStack, Box } from "@chakra-ui/react";
export interface OnlyDesktopProps {
  children: React.ReactNode;
}

export function OnlyDesktop(props: OnlyDesktopProps) {
  const { children } = props;

  return (
    <>
      <Center h="100vh" display={{ base: "flex", lg: "none" }}>
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
      <Box display={{ base: "none", lg: "block" }}>{children}</Box>
    </>
  );
}
