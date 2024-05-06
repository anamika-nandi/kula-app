"use client";
import React from "react";
import {
  Container,
  HStack,
  Stack,
  Button,
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  VStack,
  Textarea,
  Grid,
} from "@chakra-ui/react";
import Image from "next/image";
import { Formik, Form, Field } from "formik";

interface CreateNewAppProps {}

interface FormValues {
  name: string;
  websiteName: string;
  descriptionText: string;
}

const CreateNewApp: React.FC<CreateNewAppProps> = (props) => {
  return (
    <Container as={Grid} placeItems="center" maxW="720px" h="100dvh">
      <HStack flexDirection={{ base: "column", md: "row" }}>
        <Stack minW="335px" gap="3">
          <Text textStyle="heading" color="white" textAlign="center" mb="5">
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
                  <Field name="name">
                    {({ field }: any) => (
                      <FormControl>
                        <FormLabel textStyle="formlabel" color="white">
                          App Name
                        </FormLabel>
                        <InputGroup
                          display="flex"
                          alignItems="center"
                          w="full"
                          h="full"
                          minH="50px"
                        >
                          <Input
                            isRequired
                            {...field}
                            placeholder="Your Awesome App"
                            rounded="6px"
                            bg="white"
                            w="full"
                            h="full"
                            pl="50px"
                            minH="50px"
                            border="1px solid #D0D0D6"
                            textStyle="placeholder"
                          />
                          <InputLeftElement
                            height="full"
                            mx={2}
                            pointerEvents="none"
                            children={
                              <Box
                                width={34}
                                height={34}
                                borderRadius={4}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                backgroundColor="yellow"
                              >
                                <Image
                                  src="/icons/star.svg"
                                  height={17}
                                  width={22}
                                  alt="star"
                                />
                              </Box>
                            }
                          />
                        </InputGroup>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="websiteName">
                    {({ field }: any) => (
                      <FormControl>
                        <FormLabel textStyle="formlabel" color="white">
                          Website
                        </FormLabel>
                        <InputGroup
                          display="flex"
                          alignItems="center"
                          w="full"
                          h="full"
                          minH="50px"
                          border="none"
                        >
                          <Input
                            isRequired
                            {...field}
                            placeholder="www.your-website.com"
                            rounded="6px"
                            pl="50px"
                            bg="white"
                            w="full"
                            h="full"
                            border="1px solid #D0D0D6"
                            minH="50px"
                            textStyle="placeholder"
                          />
                          <InputLeftElement
                            height="full"
                            mx={2}
                            pointerEvents="none"
                            children={
                              <Box
                                width={34}
                                height={34}
                                borderRadius={4}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                backgroundColor="purple"
                              >
                                <Image
                                  src="/icons/round.svg"
                                  height={22}
                                  width={22}
                                  alt="round"
                                />
                              </Box>
                            }
                          />
                        </InputGroup>
                      </FormControl>
                    )}
                  </Field>
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
                            children={
                              <Box>
                                <Image
                                  src="/icons/description.svg"
                                  height={25}
                                  width={25}
                                  alt="password"
                                />
                              </Box>
                            }
                          />
                          <Textarea
                            rows="6"
                            isRequired
                            {...field}
                            placeholder="Tell me more about what your app should do, and what kind of features it should have"
                            rounded="6px"
                            pl="50px"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                            bg="white"
                            w="full"
                            border="1px solid #D0D0D6"
                            textStyle="placeholder"
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
    </Container>
  );
};

export default CreateNewApp;
