import { Box, Button, Flex, Link, Stack, HStack } from "@chakra-ui/react"; // Corrected import
import { Avatar } from "./ui/avatar";
import MyContainer from "./ui/container";
import { siteConfig, navItems } from "@/config/site.config";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { IoMenu } from "react-icons/io5";

export default function Navbar() {
  return (
    <MyContainer zIndex={1} position={"sticky"} top={3} mb={10} px={6} py={3}>
      <Box
        borderWidth={"1px"}
        borderColor={"gray.subtle"}
        borderRadius={"md"}
        bg={"bg"}
        p={4}
      >
        <MobileNavbar />
        <DesktopNavbar />
      </Box>
    </MyContainer>
  );
}

const MobileNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <Stack display={{ base: "block", lg: "none" }}>
      {" "}
      {/* Use display prop for responsiveness */}
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        {/* {Avatar} */}
        <Avatar
          name={siteConfig.profile.name}
          src={siteConfig.profile.avatar}
          size={"sm"}
        />

        {/* menu */}
        <Button variant={"ghost"} onClick={toggleMenu}>
          {isMenuOpen ? <RxCross2 /> : <IoMenu />}
        </Button>
      </Flex>
      {isMenuOpen && (
        <Stack gap={2} px={2} pt={2}>
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href} // Add href for navigation
              p={2}
              borderRadius={"md"}
              _hover={{ bg: "brand.muted", textDecoration: "none" }}
            >
              <HStack>
                {" "}
                {item.icon}
                <span>{item.label}</span>
              </HStack>
            </Link>
          ))}
        </Stack>
      )}
    </Stack>
  );
};

const DesktopNavbar = () => {
  return (
    <Flex
      hideBelow={"lg"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      {/* 1. Avatar */}
      <Avatar
        name={siteConfig.profile.name}
        src={siteConfig.profile.avatar}
        size={"sm"}
      />

      {/* 2. Navigation Links */}
      <HStack gap={4}>
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href} // Add href for navigation
            p={2}
            borderRadius={"md"}
            _hover={{ bg: "brand.muted", textDecoration: "none" }}
          >
            <HStack>
              {" "}
              {/* Wrap icon and label in HStack for alignment */}
              {item.icon}
              <span>{item.label}</span>
            </HStack>
          </Link>
        ))}
      </HStack>
    </Flex>
  );
};
