import { MainContainer } from '../../Components/MainContainer';
import { OpportunityCard } from '../../Components/OpportunityCard';
import { UserCard } from '../../Components/UserCard';

export const Details = () => {
  return (
    <MainContainer>
      <UserCard />
      <OpportunityCard />
      <OpportunityCard />
      <OpportunityCard />
    </MainContainer>
  );
};
