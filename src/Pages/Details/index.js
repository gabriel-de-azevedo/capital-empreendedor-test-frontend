import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MainContainer } from '../../Components/MainContainer';
import { OpportunityCard } from '../../Components/OpportunityCard';
import { UserCard } from '../../Components/UserCard';

export const Details = () => {
  const { email } = useParams();
  const [user, setUser] = useState();
  const [opportunities, setOpportunities] = useState();

  useEffect(() => {
    axios.get(`http://localhost:4000/api/users/${email}`).then((response) => {
      setUser(response.data.user);
      setOpportunities(response.data.opportunities);
    });
  }, [email]);

  return (
    <MainContainer>
      {user && <UserCard user={user} />}
      {opportunities &&
        opportunities.map((opportunity, index) => (
          <OpportunityCard
            opportunity={opportunity}
            setOpportunities={setOpportunities}
            key={index}
            email={email}
          />
        ))}
    </MainContainer>
  );
};
