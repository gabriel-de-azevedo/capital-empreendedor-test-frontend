import axios from 'axios';
import { useEffect, useState } from 'react';
import { MainContainer } from '../../Components/MainContainer';
import { UserCard } from '../../Components/UserCard';

/**
 * Fetches the users from our API when rendering the page
 * Creates a UserCard for each, passing their data as a prop
 * All of them are rendered within the MainContainer
 */

export const Dashboard = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    axios.get('http://localhost:4000/api/users').then((response) => {
      setUsers(response.data.users);
    });
  }, []);

  return (
    <MainContainer dashboardVariant>
      {users &&
        users.map((user, index) => <UserCard user={user} key={index} />)}
    </MainContainer>
  );
};
