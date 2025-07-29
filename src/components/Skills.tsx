import { Heading, SimpleGrid, Stack, Button } from "@chakra-ui/react";
import { skills, Skill } from "@/config/site.config";

const SkillBlock = ({ icon, name }: Skill) => {
  return (
    <Button
      variant="outline"
      _hover={{ bg: "brand.muted" }}
      color={"brand"}
      borderColor={"gray.subtle"}
    >
      {icon}
      {name}
    </Button>
  );
};

const Skills = () => {
  return (
    <Stack gap={4} id={"skills"}>
      <Heading as={"h2"} fontSize={"xl"} color={"brand"}>
        Skills
      </Heading>
      <SimpleGrid columns={{ base: 2, sm: 3 }} gap={4}>
        {skills.map((skill) => (
          <SkillBlock key={skill.name} icon={skill.icon} name={skill.name} />
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default Skills;
