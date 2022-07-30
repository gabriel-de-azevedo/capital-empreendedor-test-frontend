import { Box, Text } from '@chakra-ui/react';

export const UserCard = () => {
  return (
    <Box
      bgColor="white"
      shadow="lg"
      borderWidth="1px"
      h="272px"
      w="240px"
      borderRadius="10px"
    >
      <Text>Cliente 1</Text>
      <Text>cliente1@example.com</Text>
      <Text>(19) 99999-9999</Text>
      <Text>1000000</Text>
    </Box>
  );
};
