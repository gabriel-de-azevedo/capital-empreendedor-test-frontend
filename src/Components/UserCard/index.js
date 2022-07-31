import { Link as RouterLink } from 'react-router-dom';
import { LinkBox, LinkOverlay, Text } from '@chakra-ui/react';

export const UserCard = ({ user }) => {
  return (
    <LinkBox
      bgColor="white"
      shadow="lg"
      borderWidth="1px"
      h="272px"
      w="240px"
      borderRadius="10px"
    >
      <LinkOverlay as={RouterLink} to={`/clients/${user.email}`}>
        <Text>{user.name}</Text>
        <Text>{user.email}</Text>
        <Text>{user.phone}</Text>
        <Text>{user.revenue}</Text>
      </LinkOverlay>
    </LinkBox>
  );
};
