"use client";
import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

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
          transition: "all 0.25s ease-out", // Global transition
        },
        body: {
          bg: "light-blue",
          scrollBehavior: "smooth",
          minHeight: "100%",
          color: "foreground",
        },
        html: {
          height: "100%",
        },
      },
    },

    fontSizes: {
      sm: "14px",
      md: "16px",
      lg: "18px ",
    },

    components: {
      Button: {
        baseStyle: {
          h: "50px",
        },
        variants: {},
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
