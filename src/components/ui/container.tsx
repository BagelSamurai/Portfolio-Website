import { Container, ContainerProps } from "@chakra-ui/react";

function MyContainer({ children, ...props }: ContainerProps) {
  return (
    <Container mx={"auto"} maxW={"5xl"} px={{ base: 2, md: 4 }} {...props}>
      {children}
    </Container>
  );
}

export default MyContainer;
