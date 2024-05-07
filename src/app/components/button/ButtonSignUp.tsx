"use client";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Button, HStack, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaGreaterThan } from "react-icons/fa";

export interface ButtonSignUpProps {}

export function ButtonSignUp(props: ButtonSignUpProps) {
  const {} = props;
  const router = useRouter();

  const handleLoginClick = () => {
    router.push("/sign-in-one");
  };

  return (
    <Button
      width={268}
      h={58}
      border="2px solid lightgray"
      borderRadius="8px"
      bg="white"
      pl="3"
      onClick={handleLoginClick}
    >
      <Box
        width={38}
        height={38}
        borderRadius={4}
        display="flex"
        alignItems="center"
        justifyContent="center"
        backgroundColor="green"
      >
        <Image src="/icons/signup.svg" height={23} width={23} alt="round" />
      </Box>
      <Stack gap="0" color="black">
        <Text textStyle="heading2">Don’t have an Account?</Text>
        <Text textStyle="heading4">Sign up here</Text>
      </Stack>
      <Box color="lightgray" width="33px" height="22px">
        <ChevronRightIcon width="33px" height="22px" />
      </Box>
    </Button>
  );
}
