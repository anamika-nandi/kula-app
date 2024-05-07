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
import { usePathname, useRouter } from "next/navigation";

interface NavProps {
  app: string;
}

export function Nav({ app }: NavProps) {
  const pathname = usePathname();

  const renderButton = () => {
    switch (pathname) {
      case "/":
        return <ButtonLogIn />;
      case "/login":
        return <ButtonSignUp />;
      case "/account":
        return <ButtonApps />;
      case "/my-apps":
        return <ButtonAccount />;
      case "/app-name":
        return <ButtonAccount />;
      case "/create-new-app":
        return <ButtonAccount />;
      case "/sign-in-one":
        return <ButtonLogIn />;
      default:
        return null;
    }
  };

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
          {renderButton()}
        </Box>
      </Stack>
    </nav>
  );
}
