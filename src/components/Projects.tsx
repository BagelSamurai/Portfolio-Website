import { Heading, Stack, Text, Link } from '@chakra-ui/react';
import { projectsData, ProjectsType } from '@/config/site.config';

const ProjectCard = (project: ProjectsType) => {
  return (
    <Link
      href={project.href}
      _hover={{ textDecoration: 'none', bg: 'brand.muted' }}
      p={6}
      borderRadius={'md'}
      target="_blank"
      _focus={{
        textDecoration: 'none',
        boxShadow: 'none',
        borderColor: 'brand.emphasized',
        border: 'none',
      }}
    >
      <Stack alignItems="start">
        <Heading
          as="h3"
          fontSize="lg"
          color={'brand'}
          fontWeight="bold"
          textAlign="start"
        >
          {project.title}
        </Heading>
        <Text color="brand.secondary" fontSize={'sm'}>
          {project.description}
        </Text>
      </Stack>
    </Link>
  );
};
export default function Projects() {
  return (
    <Stack gap={4} id={'projects'}>
      <Heading as={'h2'} fontSize={'xl'} color={'brand'}>
        Projects
      </Heading>
      <Stack>
        {projectsData.map(project => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </Stack>
    </Stack>
  );
}
