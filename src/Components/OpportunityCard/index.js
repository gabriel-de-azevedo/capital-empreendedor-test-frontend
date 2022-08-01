import {
  Badge,
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

/**
 * Receives a single opportunity as a prop and renders it as text
 * Also receives the setter function for all of the user's opportunities
 * Renders a button responsible for changing the status of the opportunity
 * Sends a PATCH request onClick that updates the data on the backend
 * Also overwrites the opportunities state with the updated data returned
 */

export const OpportunityCard = ({ opportunity, setOpportunities }) => {
  const { user_email } = useParams();
  const toast = useToast();

  const handleButton = () =>
    axios
      .patch(
        `http://localhost:4000/api/users/${user_email}/opportunities/${opportunity.name}`
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
      p={6}
    >
      <Stack>
        <HStack>
          <Heading size="md" as="h4">
            {opportunity.name}
          </Heading>
          {opportunity.isActive ? (
            <Badge colorScheme="green" fontSize={10}>
              Active
            </Badge>
          ) : (
            <Badge colorScheme="red" fontSize={10}>
              Innactive
            </Badge>
          )}
        </HStack>
        <Text>{`R$ ${opportunity.limit},00 limit`}</Text>
        <Divider />
        <Text>{`${opportunity.interest} interest rate`}</Text>
        <Text>{`${opportunity.term}-month term`}</Text>
        <Divider />
        <Box h={3} />
        <Button onClick={handleButton}>Change Status</Button>
      </Stack>
    </Box>
  );
};
