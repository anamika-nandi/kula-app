"use client";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Button, HStack, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MdWindow } from "react-icons/md";

export interface ButtonAppsProps {}

export function ButtonApps(props: ButtonAppsProps) {
  const {} = props;
  const router = useRouter();

  const handleApps = () => {
    router.push("/my-apps");
  };
  return (
    <Button
      width={268}
      h={58}
      border="2px solid light_gray"
      borderRadius="8px"
      bg="white"
      justifyContent="space-between"
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
        backgroundColor="blue"
      >
        <MdWindow height={29} width={26} color="white" />
      </Box>
      <Stack gap="0">
        <Text textStyle="heading4">Manage my Apps</Text>
      </Stack>
      <Box color="light_gray" width="33px" height="22px">
        <ChevronRightIcon width="33px" height="22px" />
      </Box>
    </Button>
  );
}
