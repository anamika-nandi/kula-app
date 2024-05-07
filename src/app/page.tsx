import { Box } from "@chakra-ui/react";
import SignIn from "./sign-in-one/page";
import { Nav } from "./components/Nav";

export default function Home() {
  return (
    <Box>
      <Nav app="my-apps" />
      <SignIn />
    </Box>
  );
}
