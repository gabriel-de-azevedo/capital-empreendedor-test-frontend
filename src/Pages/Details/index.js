import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MainContainer } from '../../Components/MainContainer';
import { OpportunityCard } from '../../Components/OpportunityCard';
import { UserCard } from '../../Components/UserCard';

/**
 * Uses the user_email on the URL to fetch all of it's user's data
 * The API returns the user's basic data and all of it's opportunities
 * Renders a single UserPage using the returned basic data
 * And an OpportunityCard for each opportunity returned
 */

export const Details = () => {
  const { user_email } = useParams();
  const [user, setUser] = useState();
  const [opportunities, setOpportunities] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/users/${user_email}`)
      .then((response) => {
        setUser(response.data.user);
        setOpportunities(response.data.opportunities);
      });
  }, [user_email]);

  return (
    <MainContainer>
      {user && <UserCard user={user} />}
      {opportunities &&
        opportunities.map((opportunity, index) => (
          <OpportunityCard
            opportunity={opportunity}
            setOpportunities={setOpportunities}
            key={index}
          />
        ))}
    </MainContainer>
  );
};
