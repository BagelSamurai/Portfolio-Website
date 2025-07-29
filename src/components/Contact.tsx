import { Heading, Stack, Box, Text, Link } from "@chakra-ui/react";
import { siteConfig } from "@/config/site.config";

function Contact() {
  return (
    <Stack gap={4} id={"contact"} mb={10}>
      <Heading as={"h2"} fontSize={"xl"} color={"brand"}>
        Contact
      </Heading>
      <Box
        borderWidth={"1px"}
        p={5}
        borderRadius={"lg"}
        borderColor={"gray.subtle"}
      >
        <Text textAlign={"center"} fontSize={"sm"} color={"brand.secondary"}>
          Contact me at{" "}
          <Link
            color={"brand.secondary"}
            _hover={{ color: "brand" }}
            _focus={{ boxShadow: "none" }}
            target="_blank"
            href={siteConfig.contact.emailHref}
          >
            {" "}
            {siteConfig.contact.email}
          </Link>
        </Text>
      </Box>
    </Stack>
  );
}

export default Contact;
