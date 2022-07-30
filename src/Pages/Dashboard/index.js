import { DashboardContainer } from '../../Components/DashboardContainer';
import { UserCard } from '../../Components/UserCard';

export const Dashboard = () => {
  return (
    <DashboardContainer>
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
    </DashboardContainer>
  );
};
