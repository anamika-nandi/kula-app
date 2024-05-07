"use client";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Button, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export interface ButtonLogInProps {}

export function ButtonLogIn(props: ButtonLogInProps) {
  const {} = props;
  const router = useRouter();

  const handleLoginClick = () => {
    router.push("/login");
  };
  return (
    <Button
      h={58}
      border="2px solid "
      borderColor="white"
      borderRadius="8px"
      bg="transparent"
      pl="3"
      onClick={handleLoginClick}
      gap="4"
      display="flex"
    >
      <Box
        minW={38}
        height={38}
        borderRadius={4}
        display="flex"
        alignItems="center"
        justifyContent="center"
        backgroundColor="white"
        color="kula_blue"
      >
        <Image
          src="/icons/signup.svg"
          height={23}
          width={23}
          alt="sign up"
          style={{ color: "blue" }}
        />
      </Box>
      <Stack gap="0" color="white">
        <Text textStyle="heading2">Already have an Account?</Text>
        <Text fontWeight="bold" align="start" textStyle="heading4">
          Login here
        </Text>
      </Stack>
      <Box color="white" width="33px" height="22px">
        <ChevronRightIcon width="33px" height="25px" />
      </Box>
    </Button>
  );
}
