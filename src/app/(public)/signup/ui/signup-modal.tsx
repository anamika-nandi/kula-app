import IconInput from "@/components/input/IconInput";
import { Stack, HStack, VStack, Button, Text } from "@chakra-ui/react";
import { Formik, Form, FormikValues } from "formik";
import Link from "next/link";

export interface SignupModalProps {}

export default function SignupModal(props: SignupModalProps) {
  const {} = props;

  return (
    <Stack
      py="30px"
      px={{ base: "4px", sm: "10px", md: "20px", lg: "40px", xl: "50px" }}
      color="black"
    >
      <Text textStyle="heading" color="black" textAlign="center">
        Sign Up with E-Mail
      </Text>
      <HStack
        fontSize={"sm"}
        alignItems="center"
        justifyContent="center"
        textStyle="heading2"
        mt="4"
      >
        <Text color="black">Already have an account? </Text>
        <Link href="/login" passHref>
          <Text as="a" textDecor="underline" color="form_blue">
            Log in here
          </Text>
        </Link>
      </HStack>

      <Formik
        initialValues={{
          email: "",
          password: "",
          name: "",
          confirmPassword: "",
        }}
        onSubmit={(values: FormikValues) => {
          console.log(values);
        }}
      >
        <Form>
          <VStack spacing="3" mt="5">
            <IconInput
              name="name"
              placeholder="Name"
              label="Your Name"
              iconSrc="/icons/name.svg"
              iconBgColor="orange"
            />

            <IconInput
              name="email"
              placeholder="name@gmail.com"
              label="E-Mail"
              iconSrc="/icons/email.svg"
              iconBgColor="purple"
              inputType="email"
            />

            <IconInput
              name="password"
              placeholder="................."
              label="Password"
              iconSrc="/icons/password.svg"
              iconBgColor="gray"
              inputType="password"
              iconHeight={19}
              iconWidth={13}
            />

            <IconInput
              name="confirmPassword"
              placeholder="................."
              label="Repeat Password"
              iconSrc="/icons/password.svg"
              iconBgColor="gray"
              inputType="password"
              iconHeight={19}
              iconWidth={13}
            />

            <Button
              bg="form_blue"
              color="white"
              mt="2"
              w="full"
              fontWeight="medium"
              textStyle="btntext"
            >
              Sign up with E-Mail
            </Button>
          </VStack>
        </Form>
      </Formik>
      <Text
        textStyle="heading2"
        color="black !important"
        textAlign="center"
        mt="4"
      >
        By singning in you agree to our{" "}
        <Text as="span" textDecor="underline">
          Privacy
        </Text>{" "}
        &{" "}
        <Text as="span" textDecor="underline">
          Terms
        </Text>
        .
      </Text>
    </Stack>
  );
}
