import { Box } from "@chakra-ui/react";
import { Hero } from "./components/Hero";
import { ProductSection } from "./components/ProductSection";
import { MetalSection } from "./components/MetalSection";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <Box>
      <Hero />
      <ProductSection />
      <MetalSection />
      <Footer />
    </Box>
  );
}
