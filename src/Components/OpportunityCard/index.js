import { Box, Button, Text } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';

export const OpportunityCard = () => {
  const toast = useToast();

  const handleToast = () =>
    toast({
      title: 'Updated',
      description: "Your opportunity's status was sucessfuly updated",
      status: 'info',
      duration: 5000,
      isClosable: true,
    });

  return (
    <Box
      bgColor="white"
      shadow="lg"
      borderWidth="1px"
      h="272px"
      w="240px"
      borderRadius="10px"
    >
      <Text>Institution 1</Text>
      <Text>50000</Text>
      <Text>0.045</Text>
      <Text>60</Text>
      <Button onClick={handleToast}>Active</Button>
    </Box>
  );
};
