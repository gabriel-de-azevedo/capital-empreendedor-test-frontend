import { FaCompass } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';
import { Flex, Center, Icon, Link } from '@chakra-ui/react';

export const Header = () => {
  return (
    <Center>
      <Flex m={6} width="90%" maxW="1024px" justify="space-between">
        <Icon as={FaCompass} w={12} h={12} />
        <Center>
          <Link as={RouterLink} to="/" fontSize={21} pl={4}>
            Dashboard
          </Link>
          <Link fontSize={21} pl={4}>
            Home
          </Link>
          <Link fontSize={21} pl={4} pr={4}>
            About
          </Link>
        </Center>
      </Flex>
    </Center>
  );
};
