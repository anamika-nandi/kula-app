"use client";
import {
  background,
  extendTheme,
  withDefaultColorScheme,
} from "@chakra-ui/react";

import * as foundations from "./foundations";
const theme = extendTheme(
  {
    ...foundations,
    fonts: {
      heading: `'Sofia Pro', sans-serif`,
      sf_text: `'SF Pro Text', sans-serif`,
      sf_display: `'SF Pro Display', sans-serif`,
    },

    styles: {
      global: {
        "*": {
          userSelect: "none",
          boxSizing: "border-box",
        },
        body: {
          // bg: "white",
          scrollBehavior: "smooth",
          minHeight: "100%",
        },
        html: {
          height: "100%",
        },
      },
    },

    components: {
      Button: {
        baseStyle: {
          h: "60px",
          borderRadius: "10px",
          background: "yellow.200",
          color: "white",
        },
        variants: {},
      },
      input: {
        field: {
          height: "60px",
          borderRadius: "10px",
          color: "black.300",
          background: "gray.200",
          fontSize: "15px",
          fontWeight: "normal",
          _placeholder: {
            color: "gray",
            fontWeight: "normal",
            fontSize: "18px",
          },
        },
      },
    },

    config: {
      useSystemColorMode: false,
      initialColorMode: "dark",
    },
  },
  withDefaultColorScheme({ colorScheme: "primary" })
);

export default theme;
