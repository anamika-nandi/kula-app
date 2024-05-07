"use client";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Button, HStack, Icon, Stack, Text } from "@chakra-ui/react";
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
      h={58}
      borderRadius="8px"
      pl="3"
      onClick={handleApps}
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
        <Icon height={6} width={6} color="white" as={MdWindow} />
      </Box>
      <HStack gap="0" color="black">
        <Text align="start" fontWeight="bold" textStyle="heading4">
          Manage my Apps
        </Text>
      </HStack>
      <Box color="light_gray" width="33px" height="22px">
        <ChevronRightIcon width="33px" height="25px" />
      </Box>
    </Button>
  );
}
