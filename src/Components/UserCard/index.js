import { Link as RouterLink } from 'react-router-dom';
import {
  Divider,
  Heading,
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
} from '@chakra-ui/react';

/**
 * Receives the user data as a prop and renders it as text
 * Redirects to "/details/:email" based on the user email
 */

export const UserCard = ({ user }) => {
  return (
    <LinkBox
      bgColor="white"
      shadow="lg"
      borderWidth="1px"
      h="272px"
      w="240px"
      borderRadius="10px"
      p={6}
    >
      <LinkOverlay as={RouterLink} to={`/clients/${user.email}`}>
        <Stack>
          <Heading size="md" as="h4">
            {user.name}
          </Heading>
          <Text>{user.email}</Text>
          <Divider />
          <Text>Revenue</Text>
          <Text>{`R$ ${user.revenue},00`}</Text>
          <Divider />
          <Text>Phone</Text>
          <Text>{user.phone}</Text>
        </Stack>
      </LinkOverlay>
    </LinkBox>
  );
};
