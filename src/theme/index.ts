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
        },
        body: {
          bg: "kula_blue",
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
