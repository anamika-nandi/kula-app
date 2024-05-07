"use client";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Stack,
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
  breadcrumb?: [
    {
      href: string;
      label: string;
    }
  ];
  page: string;
}

export function Nav({ breadcrumb, page }: NavProps) {
  const renderButton = () => {
    switch (page) {
      case "login":
        return <ButtonLogIn />;
      case "signup":
        return <ButtonSignUp />;
      case "apps":
        return <ButtonApps />;
      case "accounts":
        return <ButtonAccount />;

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
          {breadcrumb?.map((item, index) => (
            <BreadcrumbItem key={index}>
              <BreadcrumbLink
                as={NextLink}
                href={item.href}
                passHref
                color="white"
              >
                {item.label}
              </BreadcrumbLink>
            </BreadcrumbItem>
          ))}
        </Breadcrumb>

        <Box my="5" mr="17px">
          {renderButton()}
        </Box>
      </Stack>
    </nav>
  );
}
