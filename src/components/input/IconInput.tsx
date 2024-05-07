import {
  FormControl,
  FormLabel,
  InputGroup,
  Input,
  InputLeftElement,
  Box,
} from "@chakra-ui/react";
import { Field } from "formik";
import Image from "next/image";

interface IconInputProps {
  name: string;
  placeholder: string;
  label: string;
  iconSrc: string;
}

const IconInput: React.FC<IconInputProps> = ({
  name,
  placeholder,
  label,
  iconSrc,
}) => (
  <Field name={name}>
    {({ field }: any) => (
      <FormControl>
        <FormLabel textStyle="formlabel">{label}</FormLabel>
        <InputGroup w="full" h="full" minH="50px">
          <Input
            isRequired
            {...field}
            placeholder={placeholder}
            rounded="6px"
            pl="50px"
            minH="50px"
            textStyle="placeholder"
            border=" 1px solid #D0D0D6"
          />
          <InputLeftElement height="full" mx={2} pointerEvents="none">
            <Box
              width={34}
              height={34}
              borderRadius={4}
              display="flex"
              alignItems="center"
              justifyContent="center"
              backgroundColor="orange"
            >
              <Image src={iconSrc} height={23} width={23} alt={name} />
            </Box>
          </InputLeftElement>
        </InputGroup>
      </FormControl>
    )}
  </Field>
);

export default IconInput;
