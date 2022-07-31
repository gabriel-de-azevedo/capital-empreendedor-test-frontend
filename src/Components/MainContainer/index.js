import {
  Button,
  Center,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  LinkOverlay,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

export const MainContainer = ({ children }) => {
  return (
    <Center>
      <Container
        minH="calc(100vh - 80px)"
        maxW="100vw"
        background="linear-gradient(180deg, #A3A3A3 50%, #555555 50%)"
      >
        <Center>
          <Stack>
            <Heading as="h3" pt={16} color="white" textAlign="center">
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
              <LinkOverlay as={RouterLink} to="/">
                Back to Dashboard
              </LinkOverlay>
            </Button>
          </Stack>
        </Center>
        <Container width="90%" maxW="1024px" pt={16} pb={16}>
          <Center>
            <SimpleGrid columns={[1, 1, 2, 3, 4]} spacing={8}>
              {children}
            </SimpleGrid>
          </Center>
        </Container>
      </Container>
    </Center>
  );
};
