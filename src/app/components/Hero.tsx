import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

export interface HeroProps {}

export function Hero(props: HeroProps) {
  const {} = props;

  return (
    <>
      <HStack
        justifyContent="space-between"
        color="white"
        bg="red"
        height="100vh"
      >
        <Stack>
          <Text>This $20 business changes</Text>
          <Text>Everything</Text>
          <Text>A GLOBAL OPPORTUNITY</Text>
          <Text>WATCH THIS VIDEO</Text>
          <Box>
            <Image
              src="/img/hero-video.png"
              height={383}
              width={682}
              alt="hero-video"
            />
          </Box>
          <Text>Network Marketing will never be the same</Text>
        </Stack>
        <Stack>
          <Text>jjjjjjjjjjjjjjjjjjj</Text>
        </Stack>
      </HStack>
    </>
  );
}
