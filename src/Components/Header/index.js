import { FaCompass } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';
import { Flex, Center, Icon, Link } from '@chakra-ui/react';

export const Header = () => {
  return (
    <Center>
      <Flex p={4} width="90%" maxW="1024px" justify="space-between">
        <Icon color="blackAlpha.900" as={FaCompass} w={12} h={12} />
        <Center>
          <Link
            color="blackAlpha.800"
            as={RouterLink}
            to="/"
            fontSize={18}
            pl={4}
          >
            Dashboard
          </Link>
          <Link
            href="https://github.com/gabriel-de-azevedo/capital-empreendedor-test-frontend"
            isExternal
            color="blackAlpha.800"
            fontSize={18}
            pl={4}
          >
            Repo
          </Link>
          <Link
            href="https://github.com/gabriel-de-azevedo/capital-empreendedor-test-backend"
            isExternal
            color="blackAlpha.800"
            fontSize={18}
            pl={4}
            pr={4}
          >
            API
          </Link>
        </Center>
      </Flex>
    </Center>
  );
};
