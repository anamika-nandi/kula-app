import { Box, Button, Container, HStack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { HOME } from "../constant";

export interface MetalSectionProps {}

export function MetalSection(props: MetalSectionProps) {
  const {} = props;

  return (
    <Box
      bgImage="url('/img/metal-bg-img.png')"
      minH={{
        base: "750px",
        md: "841px",
      }}
      w="full"
      bgSize="cover"
      bgPos="center"
      bgRepeat="no-repeat"
    >
      <Container maxW="1520px" h="full">
        <VStack>
          <Text fontSize="2xl" fontWeight="bold" mb="4">
            {HOME.METALS.TITLE}
          </Text>

          <Text color="gray.600" mb="4">
            {HOME.METALS.METAL_DESCRIPTION}
          </Text>
          <Text color="gray.600" mb="4">
            {HOME.METALS.SUB_DESCRIPTION}
          </Text>
          <Button>{HOME.METALS.METAL_TEXT}</Button>
        </VStack>
      </Container>
    </Box>
  );
}
