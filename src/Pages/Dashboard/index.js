import axios from 'axios';
import { useEffect, useState } from 'react';
import { MainContainer } from '../../Components/MainContainer';
import { UserCard } from '../../Components/UserCard';

export const Dashboard = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    axios.get('http://localhost:4000/api/users').then((response) => {
      setUsers(response.data.users);
    });
  }, []);

  return (
    <MainContainer>
      {users &&
        users.map((user, index) => <UserCard user={user} key={index} />)}
    </MainContainer>
  );
};
