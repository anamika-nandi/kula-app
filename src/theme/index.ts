"use client";
import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

import * as foundations from "./foundations";
const theme = extendTheme(
  {
    ...foundations,
    // semanticTokens: {
    //   colors: {
    //     background: {
    //       default: "hsl(0 0% 100%)",
    //       _dark: "hsl(0 0% 3.9%)",
    //     },

    //     foreground: {
    //       default: "hsl(0 0% 3.9%)",
    //       _dark: "hsl(0 0% 98%)",
    //     },
    //     card_border: {
    //       default: "#c6cbdeb3",
    //       _dark: "#616160",
    //     },
    //     card: {
    //       default: "hsl(0 0% 100%)",
    //       _dark: "#202020",
    //     },
    //     card_hover: {
    //       default: "hsl(0 0% 90%)",
    //       _dark: "hsl(0 0% 35.9%)",
    //     },

    //     card_foreground: {
    //       default: "hsl(0 0% 45%)",
    //       _dark: "hsl(0 0% 50%)",
    //     },
    //     card_shadow: {
    //       default: " rgba(0, 0, 0, 0.2)",
    //       _dark: " rgba(255, 255, 255, 0.2)",
    //     },
    //     secondary_text: {
    //       default: "gray.600",
    //       _dark: "gray.400",
    //     },
    //     popover: {
    //       default: "hsl(0 0% 100%)",
    //       _dark: "hsl(0 0% 14.9%)",
    //     },
    //     popover_foreground: {
    //       default: "hsl(0 0% 3.9%)",
    //       _dark: "hsl(0 0% 98%)",
    //     },
    //     primary: {
    //       default: "hsl(221.2 83.2% 53.3%)",
    //       _dark: "hsl(217.2 91.2% 59.8%)",
    //     },
    //     primary_foreground: {
    //       default: "hsl(210 40% 98%)",
    //       _dark: "hsl(222.2 47.4% 11.2%)",
    //     },
    //     secondary: {
    //       default: "hsl(210 40% 96.1%)",
    //       _dark: "hsl(217.2 32.6% 17.5%)",
    //     },
    //     secondary_foreground: {
    //       default: "hsl(0 0% 96.1%)",
    //       _dark: "hsl(0 0% 14.9%)",
    //     },
    //     muted: {
    //       default: "hsl(0 0% 96.1%)",
    //       _dark: "hsl(0 0% 14.9%)",
    //     },
    //     muted_foreground: {
    //       default: "hsl(0 0% 45.1%)",
    //       _dark: "hsl(0 0% 63.9%)",
    //     },
    //     accent: {
    //       default: "hsl(0 0% 96.1%)",
    //       _dark: "hsl(0 0% 14.9%)",
    //     },
    //     accent_foreground: {
    //       default: "hsl(0 0% 9%)",
    //       _dark: "hsl(0 0% 98%)",
    //     },
    //     destructive: {
    //       default: "hsl(0 84.2% 60.2%)",
    //       _dark: "hsl(0 62.8% 30.6%)",
    //     },
    //     destructive_foreground: {
    //       default: "hsl(0 0% 98%)",
    //       _dark: "hsl(0 0% 98%)",
    //     },
    //     border: {
    //       default: "hsl(0 0% 89.8%)",
    //       _dark: "hsl(0 0% 14.9%)",
    //     },
    //     input: {
    //       default: "hsl(0 0% 89.8%)",
    //       _dark: "hsl(0 0% 14.9%)",
    //     },
    //     ring: {
    //       default: "hsl(0 0% 3.9%)",
    //       _dark: "hsl(0 0% 83.1%)",
    //     },
    //     radius: {
    //       default: "0.5rem",
    //     },
    //     icon: {
    //       primary: {
    //         default: "hsl(0 0% 3.9%)",
    //         _dark: "hsl(0 0% 98%)",
    //       },
    //       secondary: {
    //         default: "hsl(0 0% 100%)",
    //         _dark: "hsl(0 0% 100%)",
    //       },
    //     },
    //   },
    // },
    // styles: {
    //   global: {
    //     "*": {
    //       userSelect: "none",
    //       boxSizing: "border-box",
    //       transition: "all 0.25s ease-out", // Global transition
    //     },
    //     body: {
    //       bg: "background",
    //       scrollBehavior: "smooth",
    //       minHeight: "100%",
    //       color: "foreground",
    //     },
    //     html: {
    //       height: "100%",
    //     },
    //   },
    // },

    // components: {
    //   ...components,
    //   // Progress: {
    //   //   baseStyle: {
    //   //     filledTrack: {
    //   //       bg: "primary",
    //   //     },
    //   //   },
    //   // },
    //   Icon: {
    //     // baseStyle: {
    //     //   color: "foreground",
    //     //   _hover: {
    //     //     color: "primary",
    //     //   },
    //     // },
    //     // variants: {
    //     //   primary: {
    //     //     color: "background",
    //     //   },
    //     // },
    //   },
    //   // FormLabel: {
    //   //   baseStyle: {
    //   //     fontSize: "sm",
    //   //   },
    //   // },
    //   FormHelperText: {
    //     baseStyle: {
    //       fontSize: "sm",
    //     },
    //   },
    // },
    fontSizes: {
      sm: "14px",
      md: "16px",
      lg: "18px ",
    },

    config: {
      useSystemColorMode: false,
      initialColorMode: "dark",
    },
  },
  withDefaultColorScheme({ colorScheme: "primary" })
);

export default theme;
