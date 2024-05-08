"use client";
import React from "react";
import { HStack, VStack, Button, Box, Text, Center } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Nav } from "@/components/Nav";
import Link from "next/link";

interface MyAppsProps {}

interface FormValues {
  email: string;
  password: string;
}

const MyApps: React.FC<MyAppsProps> = (props) => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/preview");
  };
  return (
    <>
      <Nav
        page="apps"
        breadcrumb={[
          {
            href: "/my-apps",
            label: "My Apps",
          },
        ]}
      />
      <Center h="calc(100vh - 180px)">
        <HStack
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          alignItems="flex-start"
          justifyContent="center"
        >
          <VStack w="335px">
            <Box
              width="140px"
              height="140px"
              borderRadius="32px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              backgroundColor="purple"
            >
              <Image src="/icons/plus.svg" height={62} width={80} alt="icon" />
            </Box>
            <Text textStyle="heading" mt="5" color="white">
              My App Name 1
            </Text>
            <Button
              mt="5"
              textStyle="btntext"
              textAlign="center"
              px="7px"
              height="25px"
              borderRadius={8}
              color="white"
              bg="light_blue"
              border="none"
              onClick={handleClick}
            >
              Preview on my Phone
            </Button>
            <Button
              mt="3"
              textStyle="btntext"
              textAlign="center"
              px="7px"
              py="3px"
              height="25px"
              borderRadius={8}
              color="white"
              bg="light_blue"
              border="none"
            >
              Manage Billing
            </Button>
          </VStack>
          <Link href="create-new-app">
            <VStack w="335px">
              <Box
                width="140px"
                height="140px"
                borderRadius="32px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                backgroundColor="light_blue"
              >
                <Image
                  src="/icons/plus.svg"
                  height={62}
                  width={80}
                  alt="icon"
                />
              </Box>
              <Text textStyle="heading" color="white" mt="5">
                Create a new App
              </Text>
            </VStack>
          </Link>
        </HStack>
      </Center>
    </>
  );
};

export default MyApps;
