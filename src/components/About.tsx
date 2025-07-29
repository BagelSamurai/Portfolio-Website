import { useEffect } from 'react'; // 1. Import useEffect
import { useGLTF } from '@react-three/drei'; // 2. Import useGLTF
import { aboutSocials, siteConfig } from '@/config/site.config';
import { Button, Heading, Stack, Text, Center, Link } from '@chakra-ui/react';
import { Model } from './model/model';
import { Canvas } from '@react-three/fiber';
import { Environment, Float, Lightformer } from '@react-three/drei';
export default function About() {
  useEffect(() => {
    useGLTF.preload('/space_ame_camping_-_amelia_watson_hololive.glb');
  }, []);

  return (
    <Stack
      id="about"
      p={6}
      gap={4}
      borderColor={'gray.subtle'}
      borderRadius={'md'}
      borderWidth={'1px'}
      bg={'brand'}
      height={'fit-content'}
      position={{ lg: 'sticky' }}
      top={{ lg: '24' }}
    >
      <Heading color={'brand'} fontSize={'3xl'} as={'h1'}>
        {siteConfig.profile.name}
      </Heading>
      <Text color={'brand.secondary'} fontSize={'sm'} whiteSpace="pre-wrap">
        {siteConfig.profile.about}
      </Text>
      <Center>
        {aboutSocials.map(social => (
          <Link key={social.title} href={social.href} target="_blank">
            <Button
              key={social.title}
              height={10}
              width={10}
              variant={'ghost'}
              borderRadius={'full'}
              color={'brand'}
            >
              {social.Icon}
            </Button>
          </Link>
        ))}
      </Center>
      <Canvas
        shadows
        camera={{ position: [0, 0, 10], fov: 15, near: 1, far: 20 }}
      >
        <ambientLight intensity={0.5} />

        <Model />

        <Environment resolution={256}>
          <group rotation={[-Math.PI / 3, 4, 1]}>
            <Lightformer
              form={'circle'}
              intensity={2}
              position={[0, 5, -9]}
              scale={10}
            />
            <Lightformer
              form={'circle'}
              intensity={2}
              position={[0, 3, 1]}
              scale={10}
            />
            <Lightformer
              form={'circle'}
              intensity={2}
              position={[-5, -1, -1]}
              scale={10}
            />
            <Lightformer
              form={'circle'}
              intensity={2}
              position={[10, 1, 0]}
              scale={16}
            />
          </group>
        </Environment>
      </Canvas>
    </Stack>
  );
}
