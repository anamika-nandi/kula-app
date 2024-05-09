"use client";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  HStack,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import React from "react";

import { ChevronRightIcon } from "@chakra-ui/icons";
import { ButtonAccount } from "./button/ButtonAccount";
import { ButtonApps } from "./button/ButtonApps";
import { ButtonSignUp } from "./button/ButtonSignUp";
import { ButtonLogIn } from "./button/ButtonLogIn";
import Link from "next/link";

interface NavProps {
  breadcrumb: {
    href: string;
    label: string;
  }[];
  page: string;
}

export function Nav({ breadcrumb, page }: NavProps) {
  const renderButton = () => {
    switch (page) {
      case "login":
        return <ButtonSignUp />;
      case "signup":
        return <ButtonLogIn />;
      case "apps":
        return <ButtonAccount />;
      case "account":
        return <ButtonApps />;

      default:
        return null;
    }
  };

  return (
    <Box as="nav" pos="sticky" top="0" bg="kula_blue" w="full">
      <HStack justifyContent="space-between">
        <Link href="/account">
          <Image
            src="/img/kula_logo.png"
            width={177}
            height={87}
            alt="kula logo"
          />
        </Link>

        <Breadcrumb
          spacing="8px"
          separator={<ChevronRightIcon boxSize={8} color="white" />}
        >
          {breadcrumb?.map((item, index) => (
            <BreadcrumbItem key={index}>
              <BreadcrumbLink
                as={NextLink}
                href={item.href}
                passHref
                color="white"
                textStyle="heading"
              >
                {item.label}
              </BreadcrumbLink>
            </BreadcrumbItem>
          ))}
        </Breadcrumb>

        <Box my="5" mr="17px">
          {renderButton()}
        </Box>
      </HStack>
    </Box>
  );
}
