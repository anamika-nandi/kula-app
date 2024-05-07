"use client";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { MdWindow } from "react-icons/md";

export interface ButtonAppsProps {}

export function ButtonApps(props: ButtonAppsProps) {
  const {} = props;

  return (
    <HStack
      width={268}
      h={58}
      border="2px solid lightgray"
      borderRadius="8px"
      bg="white"
      justifyContent="space-between"
      pl="3"
    >
      <Box
        width={38}
        height={38}
        borderRadius={4}
        display="flex"
        alignItems="center"
        justifyContent="center"
        backgroundColor="blue"
      >
        <MdWindow height={29} width={26} color="white" />
      </Box>
      <Stack gap="0">
        <Text textStyle="heading4">Manage my Apps</Text>
      </Stack>
      <Box color="lightgray" width="33px" height="22px">
        <ChevronRightIcon width="33px" height="22px" />
      </Box>
    </HStack>
  );
}
