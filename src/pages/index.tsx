import { Box, Stack, Flex } from '@chakra-ui/react';
import MyContainer from '@/components/ui/container';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Work from '@/components/Work';
import Contact from '@/components/Contact';
import { siteConfig } from '@/config/site.config';
export default function Home() {
  return (
    <>
      <title>{siteConfig.profile.name}</title>

      <MyContainer>
        <Flex gap={4} flexDirection={{ base: 'column', lg: 'row' }}>
          <Box width={{ base: '100%', lg: '40%' }}>
            {' '}
            <About />
          </Box>

          <Stack gap={10} flex={1}>
            <Skills />
            <Work />
            <Projects />
            <Contact />
          </Stack>
        </Flex>
      </MyContainer>
    </>
  );
}
