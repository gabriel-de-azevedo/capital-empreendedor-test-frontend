import { Route, Routes } from 'react-router-dom';
import { Dashboard } from '../Pages/Dashboard';
import { Details } from '../Pages/Details';

/**
 * The index page ("/") contains our Dashboard
 * Details is rendered when we redirect the user to "/clients/:user_email"
 */

export const Routing = () => {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="/clients">
        <Route path=":user_email" element={<Details />} />
      </Route>
    </Routes>
  );
};
