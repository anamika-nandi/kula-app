"use client";
import React from "react";
import {
  Container,
  HStack,
  Stack,
  Box,
  Text,
  Grid,
  Progress,
} from "@chakra-ui/react";
import Image from "next/image";

interface KulaCardProps {}

const kulaCardData = [
  {
    id: "1",
    img: "/img/kuala_waking_up_transparent.png",
    icon: "/icons/waking.svg",
    describe: "We’re waking our AI Assistant up…",
    width: "248",
    height: "192",
  },
  {
    id: "2",
    img: "/img/kuala_setting_up.png",
    icon: "/icons/waking1.svg",
    describe: "Our AI Assistant is setting up your App now…",
    width: "167",
    height: "190",
  },
  {
    id: "3",
    img: "/img/kuala_pictures.png",
    icon: "/icons/waking3.svg",
    describe: "Our AI Assistant is filling in some Images…",
    width: "167",
    height: "190",
  },
  {
    id: "4",
    img: "/img/kuala_feature_summoning.png",
    icon: "/icons/waking4.svg",
    describe: "Our AI Assistant is adding [Feature Type (plural)]…",
    width: "210",
    height: "190",
  },
  {
    id: "5",
    img: "/img/kuala_design.png",
    icon: "/icons/waking5.svg",
    describe: "Our AI Assistant is choosing a perfect design…",
    width: "167",
    height: "190",
  },
  {
    id: "6",
    img: "/img/kuala_setting_up.png",
    icon: "/icons/waking6.svg",
    describe: "Your App is ready to be previewed",
    width: "167",
    height: "190",
  },
];

const KulaCard: React.FC<KulaCardProps> = (props) => {
  return (
    <Container
      maxW="full"
      overflow="hidden"
      overflowX="auto"
      as={Grid}
      placeItems="center"
      h="90vh"
    >
      <HStack
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        alignItems="flex-start"
        justifyContent="center"
        gap="5"
      >
        {kulaCardData.map((item, i) => (
          <Stack
            w="340px"
            h="570px"
            bg="light_blue"
            alignItems="center"
            gap="5"
            borderRadius="16px"
            key={item.id}
            position="relative"
            overflow="hidden"
          >
            <Text
              mt="5"
              mr="4"
              textAlign="end"
              color="white"
              opacity="0.4"
              fontWeight="light"
              width="full"
            >
              <Text as="span" pr="2">
                STEP
              </Text>
              {i + 1 + "/" + kulaCardData.length}
            </Text>
            <Box position="absolute" top="0" w="full">
              <Progress
                size="xs"
                value={(100 / kulaCardData.length) * (1 + i)}
                w="full"
              />
            </Box>
            <Box minH="192px">
              <Image
                src={item.img}
                height={parseInt(item.height)}
                width={parseInt(item.width)}
                alt="kuala-img"
              />
            </Box>
            <Box mt="28px">
              <Image src={item.icon} height={46} width={46} alt="waking" />
            </Box>
            <Text
              textStyle="heading3"
              color="white"
              textAlign="center"
              mt="16px"
              px={{ sm: "2", md: "4", lg: 8 }}
              h={115}
            >
              {item.describe}
            </Text>
            <Text
              textStyle="btntext"
              color="white"
              letterSpacing="-0.16px"
              textAlign="center"
              mb="26px"
            >
              Your app is ready in 1-2 minutes
            </Text>
          </Stack>
        ))}
      </HStack>
    </Container>
  );
};

export default KulaCard;
