import React from "react";
import { Button, Box, Image, ButtonProps, BoxProps } from "@chakra-ui/react";

interface IconButtonProps extends ButtonProps {
  iconSrc: string;
  altText: string;
  children: React.ReactNode;
  leftIconProps?: BoxProps;
}

const IconButton: React.FC<IconButtonProps> = ({
  iconSrc,
  altText,
  children,
  leftIconProps,
  ...props
}) => (
  <Button
    textStyle="btntext"
    w="full"
    pos="relative"
    fontWeight="medium"
    leftIcon={
      <Box pos="absolute" left="4" top="2" {...leftIconProps}>
        <Image src={iconSrc} height={22} width={18} alt={altText} />
      </Box>
    }
    {...props}
  >
    {children}
  </Button>
);

export default IconButton;
