"use client";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Button, HStack, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export interface ButtonSignUpProps {}

export function ButtonSignUp(props: ButtonSignUpProps) {
  const {} = props;
  const router = useRouter();

  const handleLoginClick = () => {
    router.push("/signup");
  };

  return (
    <Button
      h={58}
      borderRadius="8px"
      pl="3"
      onClick={handleLoginClick}
      bg="white"
      gap="4"
    >
      <Box
        width={38}
        height={38}
        borderRadius={4}
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg="green"
      >
        <Image src="/icons/signup.svg" height={23} width={23} alt="round" />
      </Box>
      <Stack gap="0" color="black">
        <Text textStyle="heading2">Don’t have an Account?</Text>
        <Text align="start" fontWeight="bold" textStyle="heading4">
          Sign up here
        </Text>
      </Stack>
      <Box color="light_gray" width="33px" height="22px">
        <ChevronRightIcon width="33px" height="25px" />
      </Box>
    </Button>
  );
}
