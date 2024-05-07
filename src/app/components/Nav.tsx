"use client";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import React from "react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { ButtonAccount } from "./button/ButtonAccount";
import { ButtonApps } from "./button/ButtonApps";
import { ButtonSignUp } from "./button/ButtonSignUp";
import { ButtonLogIn } from "./button/ButtonLogIn";

interface NavProps {
  app: string;
}

export function Nav({ app }: NavProps) {
  return (
    <nav>
      <Stack flexDir="row" alignItems="center" justifyContent="space-between">
        <Image
          src="/img/kula_logo.png"
          width={177}
          height={87}
          alt="kula logo"
        />

        <Breadcrumb
          spacing="8px"
          separator={<ChevronRightIcon color="white" />}
        >
          <BreadcrumbItem>
            <NextLink href={`/${app}`} passHref>
              <Link color="white">{app} </Link>
            </NextLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="#" color="white">
              Create a new App
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Box my="5" mr="17px">
          {/* <ButtonAccount /> */}
          {/* <ButtonApps /> */}
          {/* <ButtonSignUp /> */}
          <ButtonLogIn />
        </Box>
      </Stack>
    </nav>
  );
}
