import { DetailsContainer } from '../../Components/DetailsContainer';
import { OpportunityCard } from '../../Components/OpportunityCard';
import { UserCard } from '../../Components/UserCard';

export const Details = () => {
  return (
    <DetailsContainer>
      <UserCard />
      <OpportunityCard />
      <OpportunityCard />
      <OpportunityCard />
    </DetailsContainer>
  );
};
