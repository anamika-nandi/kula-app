"use client";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Button, HStack, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export interface ButtonAccountProps {}

export function ButtonAccount(props: ButtonAccountProps) {
  const {} = props;
  const router = useRouter();

  const handleApps = () => {
    router.push("/account");
  };
  return (
    <Button
      width={268}
      h={58}
      borderRadius="8px"
      pl="3"
      bg="white"
      gap="4"
      onClick={handleApps}
    >
      <Box
        width={38}
        height={38}
        borderRadius={4}
        display="flex"
        alignItems="center"
        justifyContent="center"
        backgroundColor="purple"
      >
        <Image src="/icons/round.svg" height={17} width={22} alt="round" />
      </Box>
      <Stack gap="0" color="black">
        <Text align="start" fontWeight="bold" textStyle="heading4">
          Hi, Name!
        </Text>
        <Text align="start" color="gray" textStyle="heading2">
          Manage your Account
        </Text>
      </Stack>
      <Box color="light_gray" width="33px" height="22px">
        <ChevronRightIcon width="33px" height="22px" />
      </Box>
    </Button>
  );
}
