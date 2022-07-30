import { Button, Center, Container, Heading, Stack } from '@chakra-ui/react';

export const DashboardContainer = ({ children }) => {
  return (
    <Center>
      <Container
        minH="1024px"
        maxW="100vw"
        background="linear-gradient(180deg, #A3A3A3 50%, white 50%)"
      >
        <Center>
          <Stack>
            <Heading as="h3" pt={24} color="white" textAlign="center">
              Capital List
            </Heading>
            <Heading
              as="h4"
              p={6}
              size="md"
              color="white"
              textAlign="center"
              maxW="520px"
            >
              This project was built as part of a Technical Assesment for
              Capital Empreendedor
            </Heading>
            <Button maxW="240px" colorScheme="blackAlpha" alignSelf="center">
              See Repository
            </Button>
          </Stack>
        </Center>
        {children}
      </Container>
    </Center>
  );
};
