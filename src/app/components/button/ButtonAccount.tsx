"use client";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Button, HStack, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaGreaterThan } from "react-icons/fa";

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
      border="2px solid lightgray"
      borderRadius="8px"
      bg="white"
      pl="3"
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
      <Stack gap="0">
        <Text textStyle="heading4">Hi, Name!</Text>
        <Text color="gray" textStyle="heading2">
          Manage your Account
        </Text>
      </Stack>
      <Box color="lightgray" width="33px" height="22px">
        <ChevronRightIcon width="33px" height="22px" />
      </Box>
    </Button>
  );
}
