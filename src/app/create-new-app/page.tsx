"use client";
import React from "react";
import {
  HStack,
  Stack,
  Button,
  Box,
  Text,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  VStack,
  Textarea,
  Center,
} from "@chakra-ui/react";
import Image from "next/image";
import { Formik, Form, Field } from "formik";
import { useRouter } from "next/navigation";
import IconInput from "@/components/input/IconInput";

interface CreateNewAppProps {}

interface FormValues {
  name: string;
  websiteName: string;
  descriptionText: string;
}

const CreateNewApp: React.FC<CreateNewAppProps> = (props) => {
  const router = useRouter();

  const handleApp = () => {
    router.push("/app-name");
  };
  return (
    <Center h="100vh">
      <HStack flexDirection={{ base: "column", md: "row" }}>
        <Stack maxW="335px" w="full" gap="3">
          <Text textStyle="heading" color="white" textAlign="center">
            Hi [Name]! What App do you want me to build?
          </Text>
          <Stack>
            <Formik
              initialValues={{
                name: "",
                websiteName: "",
                descriptionText: "",
              }}
              onSubmit={(values: FormValues) => {
                console.log(values);
              }}
            >
              <Form>
                <VStack spacing="3" mt="4">
                  <IconInput
                    name="name"
                    placeholder="Your Awesome App"
                    label="App Name"
                    iconSrc="/icons/email.svg"
                    iconBgColor="purple"
                    inputType="email"
                    labelProps={{
                      color: "white",
                    }}
                  />

                  <IconInput
                    name="websiteName"
                    placeholder="www.your-website.com"
                    label="Website"
                    iconSrc="/icons/round.svg"
                    iconBgColor="purple"
                    inputType="text"
                    labelProps={{
                      color: "white",
                    }}
                    isOptional
                  />

                  <Field name="descriptionText">
                    {({ field }: any) => (
                      <FormControl>
                        <FormLabel textStyle="formlabel" color="white">
                          Description
                        </FormLabel>
                        <InputGroup w="full" h="ful" border="none">
                          <InputLeftElement
                            mx={2}
                            mt={3}
                            height="full"
                            display="flex"
                            alignItems="flex-start"
                            pointerEvents="none"
                          >
                            <Box>
                              <Image
                                src="/icons/description.svg"
                                height={25}
                                width={25}
                                alt="password"
                              />
                            </Box>
                          </InputLeftElement>
                          <Textarea
                            rows="6"
                            isRequired
                            placeholder="Tell me more about what your app should do, and what kind of features it should have"
                            rounded="6px"
                            pl="50px"
                            color="black"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                            bg="white"
                            textStyle="placeholder"
                            w="full"
                            _placeholder={{
                              textStyle: "placeholder",
                            }}
                            _hover={{
                              border: "1px solid #D0D0D6",
                            }}
                            minH="48px"
                            border=" 1px solid #D0D0D6"
                            {...field}
                          />
                        </InputGroup>
                      </FormControl>
                    )}
                  </Field>
                </VStack>
              </Form>
            </Formik>
          </Stack>
          <Button
            textStyle="btntext"
            textAlign="center"
            mt="5"
            w="full"
            h="50px"
            color="white"
            bg="blue"
            border="none"
            onClick={handleApp}
          >
            Create my App
          </Button>
        </Stack>

        <Box minW={578} w="full" minH={440}>
          <Image
            src="/img/kuala.png"
            height={440}
            width={578}
            alt="kuala-img"
          />
        </Box>
      </HStack>
    </Center>
  );
};

export default CreateNewApp;
