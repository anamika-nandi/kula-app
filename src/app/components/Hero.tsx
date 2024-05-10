"use client";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Select,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { HOME } from "../constant";
import { Field, Form, Formik } from "formik";

export interface HeroProps {}

export function Hero(props: HeroProps) {
  const {} = props;

  return (
    <>
      <Box
        bgImage="url('/img/hero-bg-img.png')"
        minH={{
          base: "750px",
          md: "841px",
        }}
        w="full"
        bgSize="cover"
        bgPos="center"
        bgRepeat="no-repeat"
      >
        <Container maxW="1520px" h="full">
          <HStack
            w="full"
            justify="space-between"
            alignItems={{
              base: "center",
            }}
            flexDir={{
              base: "column-reverse",
              md: "row",
            }}
            textAlign={{
              base: "center",
              md: "start",
            }}
            gap={{
              base: "20",
              md: "20",
            }}
            py={112}
          >
            <Box maxW={713}>
              <Stack gap="0">
                <Text
                  color="yellow.200"
                  textStyle="text4"
                  textTransform="uppercase"
                >
                  {HOME.HERO.HEADING1}
                </Text>
                <Text textStyle="heading3" lineHeight="0.9">
                  {HOME.HERO.HEADING2}
                </Text>
              </Stack>
              <VStack mt="8" gap="0">
                <Text fontSize="30px" fontWeight="normal" color="white">
                  {HOME.HERO.VIDEO_TEXT1}
                </Text>
                <Text
                  color="yellow.200"
                  fontSize="68px"
                  fontWeight="bold"
                  lineHeight="1"
                >
                  {HOME.HERO.VIDEO_TITLE}
                </Text>
                <Box mt="12">
                  <Image
                    height={617}
                    width={778}
                    src="/img/hero-video.png"
                    alt="Product"
                  />
                </Box>
              </VStack>
              <Text textStyle="heading4">{HOME.HERO.DESCRIPTION}</Text>
            </Box>
            <Box h="full" minH={516} maxW="616px">
              <Text fontSize="38px" fontWeight="bold" textTransform="uppercase">
                {HOME.HERO.FORM.TITLE}
              </Text>
              <Text>{HOME.HERO.FORM.FORM_DESCRIPTION}</Text>
              <Formik
                initialValues={{
                  firstName: "",
                  lastName: "",
                  email: "",
                  country: "",
                }}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                <Form>
                  <VStack spacing="3" mt="5">
                    <Field name="firstName">
                      {({ field }: any) => (
                        <FormControl>
                          <FormLabel>First Name</FormLabel>
                          <Input
                            isRequired
                            placeholder="First Name"
                            {...field}
                          />
                        </FormControl>
                      )}
                    </Field>
                    <Field name="lastName">
                      {({ field }: any) => (
                        <FormControl>
                          <FormLabel>Last Name</FormLabel>
                          <Input
                            isRequired
                            placeholder="Last Name"
                            {...field}
                          />
                        </FormControl>
                      )}
                    </Field>
                    <Field name="email">
                      {({ field }: any) => (
                        <FormControl>
                          <FormLabel> Email</FormLabel>
                          <Input
                            isRequired
                            placeholder="Email"
                            type="email"
                            {...field}
                          />
                        </FormControl>
                      )}
                    </Field>
                    <Field name="country">
                      {({ field }: any) => (
                        <FormControl>
                          <FormLabel> Country</FormLabel>
                          <Select
                            isRequired
                            placeholder="Select Country"
                            {...field}
                          >
                            <option value="usa">USA</option>
                            <option value="uk">UK</option>
                            <option value="canada">Canada</option>
                          </Select>
                        </FormControl>
                      )}
                    </Field>
                    <Button
                      bg="blue"
                      color="white"
                      mt="2"
                      w="full"
                      fontWeight="medium"
                      type="submit"
                    >
                      Sign Up
                    </Button>
                  </VStack>
                </Form>
              </Formik>
            </Box>
          </HStack>
        </Container>
      </Box>
    </>
  );
}
