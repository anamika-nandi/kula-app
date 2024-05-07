import {
  FormControl,
  FormLabel,
  InputGroup,
  Input,
  InputLeftElement,
  Box,
  FormLabelProps,
} from "@chakra-ui/react";
import { Field } from "formik";
import Image from "next/image";

interface IconInputProps {
  name: string;
  placeholder: string;
  label: string;
  iconSrc: string;
  iconBgColor?: string;
  iconHeight?: number;
  iconWidth?: number;
  inputType?: string;
  labelProps?: FormLabelProps;
}

const IconInput: React.FC<IconInputProps> = ({
  name,
  placeholder,
  label,
  iconSrc,
  iconBgColor,
  iconHeight,
  iconWidth,
  inputType,
  labelProps,
}) => (
  <Field name={name}>
    {({ field }: any) => (
      <FormControl>
        <FormLabel
          fontFamily="body"
          fontWeight="medium"
          color="black"
          {...labelProps}
        >
          {label}
        </FormLabel>
        <InputGroup
          display="flex"
          alignItems="center"
          bg="white"
          w="full"
          h="full"
          rounded="6px"
        >
          <Input
            isRequired
            placeholder={placeholder}
            rounded="6px"
            pl="50px"
            borderRadius="6px"
            textStyle="placeholder"
            _placeholder={{
              textStyle: "placeholder",
            }}
            type={inputType || "text"}
            _hover={{
              border: "1px solid #D0D0D6",
            }}
            minH="48px"
            border=" 1px solid #D0D0D6"
            {...field}
          />
          <InputLeftElement height="full" mx={2} pointerEvents="none">
            <Box
              width={34}
              height={34}
              borderRadius={4}
              display="flex"
              alignItems="center"
              justifyContent="center"
              backgroundColor={iconBgColor || "orange"}
            >
              <Image
                src={iconSrc}
                height={iconHeight || 23}
                width={iconWidth || 23}
                alt={name}
              />
            </Box>
          </InputLeftElement>
        </InputGroup>
      </FormControl>
    )}
  </Field>
);

export default IconInput;
