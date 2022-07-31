import { Box, Button, Text } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';

export const OpportunityCard = ({ opportunity }) => {
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
      <Text>{opportunity.name}</Text>
      <Text>{opportunity.limit}</Text>
      <Text>{opportunity.interest}</Text>
      <Text>{opportunity.term}</Text>
      <Button onClick={handleToast}>Active</Button>
    </Box>
  );
};
