import {
  Flex,
  Separator,
  Stack,
  Heading,
  Text,
  HStack,
} from "@chakra-ui/react";
import { WorkType, worksData } from "@/config/site.config";
import { FaRegCalendarDays } from "react-icons/fa6";
const WorkBlock = (work: WorkType) => {
  return (
    <Stack gap={4} id="work">
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Heading
          as="h3"
          fontSize="lg"
          color={"brand"}
          fontWeight="bold"
          textAlign={"start"}
        >
          {work.company}
        </Heading>
        <HStack
          p={2}
          borderWidth={"1px"}
          borderColor={"gray.subtle"}
          borderRadius={"lg"}
        >
          <FaRegCalendarDays size={14} />{" "}
          <Text fontSize={"xs"} color={"brand"}>
            {work.fromDate} - {work.toDate}
          </Text>
        </HStack>
      </Flex>
      <Stack
        listStyleType={"disc"}
        ml={"4"}
        fontSize={"sm"}
        color={"brand.secondary}"}
        gap={2}
        as={"ul"}
      >
        {work.deliverables.map((item, index) => (
          <li key={index}>{item} </li>
        ))}
      </Stack>
    </Stack>
  );
};
export default function Work() {
  return (
    <Stack gap={4} id={"work"}>
      <Heading as={"h2"} fontSize={"xl"} color={"brand"}>
        Work Experience
      </Heading>
      <Stack
        gap={5}
        p={6}
        borderWidth={"1px"}
        borderColor={"gray.subtle"}
        borderRadius={"lg"}
        separator={<Separator opacity={1} color={"brand"} />}
      >
        {worksData.map((work) => (
          <WorkBlock {...work} />
        ))}
      </Stack>
    </Stack>
  );
}
