import { Badge, Box, Button, Text } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const OpportunityCard = ({ opportunity, setOpportunities }) => {
  const { email } = useParams();
  const toast = useToast();

  const handleButton = () =>
    axios
      .patch(
        `http://localhost:4000/api/users/${email}/opportunities/${opportunity.name}`
      )
      .then((response) => {
        setOpportunities(response.data.opportunities);
        toast({
          title: 'Updated',
          description: 'Opportunity status sucessfully udpated',
          status: 'info',
          duration: 2000,
          isClosable: true,
        });
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
      {opportunity.isActive ? (
        <Badge colorScheme="green">Active</Badge>
      ) : (
        <Badge colorScheme="red">Innactive</Badge>
      )}
      <Text>{opportunity.name}</Text>
      <Text>{opportunity.limit}</Text>
      <Text>{opportunity.interest}</Text>
      <Text>{opportunity.term}</Text>
      <Button onClick={handleButton}>Change Status</Button>
    </Box>
  );
};
